require("dotenv").config()
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../Models/user.js");


exports.signup = async (req, res) =>{
    try {
        const user = await User.findOne({ email: req.body.email});
        if (user) return res.status(400).send("User Already Exist!!");

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password,salt);

        let newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
            admin: req.body.admin
        });

        newUser = await newUser.save();
        
        res.status(200).send("User Created Successfully!!");
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Server Error!");
    }
}


exports.login = async (req,res) =>{
    try{
        const user = await User.findOne({ email: req.body.email})
        if (!user) return res.status(400).send("Invalid Email");

        const verifyPassword = await bcrypt.compare(req.body.password, user.password);
        if (!verifyPassword) return res.status(400).send("Invalid Password");

        const token = jwt.sign({email: req.body.email},process.env.jwt_secret,{expiresIn:'15d'});
        res.setHeader("x-authToken", token);
        res.status(200).send("Logged In Successfully!!")
        
    }
    catch (error){
        console.log(error)
    }
}