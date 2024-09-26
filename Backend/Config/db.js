const mongoose = require("mongoose");

mongoose.connect("mongodb://locahost/Ecommerce")
.then(() => {console.log("Connected Successfully!!")})
.catch((error) => {console.log(error)})


