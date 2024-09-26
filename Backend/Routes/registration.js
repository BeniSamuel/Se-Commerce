const express = require("express");
const route = express.Router();
const { signup , login } = require("../Controllers/registration.js");
const { signupValidation, loginValidation, } = require("../Validation/validation.js");

route.post("/signup", signupValidation , signup);
route.post("/login", loginValidation , login);

module.exports = route;