const User = require("../Models/user");

exports.isAdmin = async (req, res, next) => {
    try {
        const user = await User.findOne({email: req.user.email});
        if (!user) return (400).send("Invalid Request");

        if (!user.admin) return res.status(403).send("Forbidden action");

        next()
    }
    catch(error){
        console.log(error);
    }
}