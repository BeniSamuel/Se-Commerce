require("dotenv").config();
const jwt = require("jsonwebtoken");

exports.verifyToken = async (req,res,next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        if (!token) return res.status(400).send("No token found!");

        const checkToken = jwt.verify(token,process.env.jwt_secret);
        if (!checkToken) return res.status(400).send("Invalid Token!");

        req.user = checkToken.email;
        next();
    }
    catch(error){
        console.log(error);
    }

}