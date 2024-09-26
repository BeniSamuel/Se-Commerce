const Product = require("../Models/Products.js");
const _ = require("lodash");

const createProduct = async (req, res) => {
  try {
    let newProduct = new Product({
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
    });

    newProduct = await newProduct.sava();

    res.status(200).send(newProduct);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
};

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    const result = products.map((product) =>
      _.pick(product, ["_id", "name", "price", "description"])
    );
    res.status(200).send(result);
  } catch (error) {
    console.log(error);
  }
};

const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findOne({ id: id });
    if (!product) return res.status(404).send("Product not found");

    res.status(200).send(_.pick(product, ["name", "price", "description"]));
  } catch (error) {
    console.log(error);
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(
      { id: id },
      {
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
      },
      {new: true}
    );

    if (!product) return res.status(404).send("Product not Found!!")

    res.status(200).send("Product Updated Successfully!!");
  } catch (error) {
    console.log(error);
  }
};


const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndRemove({id: id});
        if (!product) return res.status(404).send("Product not Found!!")
        res.status(200).send("Product Deleted Successfully!!");
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    createProduct,
    getProduct,
    getProducts,
    updateProduct,
    deleteProduct
}
