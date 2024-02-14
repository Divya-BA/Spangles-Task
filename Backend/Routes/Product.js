const express = require("express");
const router = express.Router();
const Product=require('../Models/product')
router.post("/", async (req, res) => {
  const { name, images, sizes, amounts } = req.body;
  if (
    !sizes ||
    !amounts ||
    !images ||
    sizes.length !== amounts.length ||
    sizes.length !== images.length
  ) {
    return res.status(400).json({ message: "invalid data" });
  }
const product=new Product({
    name,sizes,images,amounts
});
  try {
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
router.get("/", async (req, res) => {
  try {
    const product = await Product.find();
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
