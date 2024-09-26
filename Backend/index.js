const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const registration = require("./Routes/registration.js");
const products = require("./Routes/products.js");
const cart = require("./Routes/carts.js");

// server
const app = express();
const port = process.env.PORT || 3000;

// db
require("./Config/db");

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(morgan("dev"));
app.use(cors())

// routes
app.use("/api/auth", registration);
app.use("/api/products", products);
// app.use("/api/cart", cart);

// running server
app.listen(port , ()=>{
    console.log(`App running at port ${port}`)
});




