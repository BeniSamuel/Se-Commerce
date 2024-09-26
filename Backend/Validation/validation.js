const Joi = require("joi");

function signupValidation ( req, res, next){
    const userSchema = Joi.object({
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required(),
        admin: Joi.boolean().valid(true,false).default(false)
    });

    const { error } = userSchema.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    next();
}

function loginValidation (req, res, next){
    const userSchema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().required(),
    });

    const { error } = userSchema.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    next();
}

function productValidation (req, res, next) {
    const productSchema = Joi.object({
        name: Joi.string().required(),
        price: Joi.number().required(),
        description: Joi.string().required(),
    });

    const { error } = productSchema.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    next();
}


module.exports = {
    signupValidation,
    loginValidation,
    productValidation
}