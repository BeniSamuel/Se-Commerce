
const express = require("express");
const route = express.Router();
const { verifyToken } = require("../Middlewares/verifyToken.js");
const { isAdmin } = require("../Middlewares/isAdmin.js");
const { createProduct, getProducts , getProduct, updateProduct, deleteProduct} = require("../Controllers/products.js");
const { productValidation } = require("../Validation/validation.js")

route.post("/", verifyToken, isAdmin, productValidation, createProduct);
route.get("/", verifyToken, getProducts);
route.get("/:id", verifyToken, getProduct);
route.put("/:id", verifyToken , isAdmin, productValidation, updateProduct);
route.delete("/:id", verifyToken, isAdmin, deleteProduct);

module.exports = route;