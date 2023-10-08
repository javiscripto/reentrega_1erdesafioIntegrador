// product.route.js

import { Router } from "express";
import ProductManagerFS from "../../DAO/managers/productManagerFs.js";
import ProductManagerDb from "../../DAO/managers/productManagerDb.js";

const route = Router();

// Import managers
const pmFs = new ProductManagerFS();
const pmDb = new ProductManagerDb();

// Get all products
route.get("/", async (req, res) => {
  try {
    const fsProducts = await pmFs.getAll();
    const dbProducts = await pmDb.getAll();
    res.json({ result: "success", payload: { fsProducts, dbProducts } });
  } catch (error) {
    res.status(500).json({ result: "error", message: error.message });
  }
});

// Get by id
route.get("/:pid", async (req, res) => {
  try {
    const pid=req.params;
    
    const fsProduct = await pmFs.getById(pid.pid);
    const dbProduct = await pmDb.getById(pid.pid);
    res.json({ result: "success", payload: {  dbProduct, fsProduct } });
  } catch (error) {
    res.status(500).json({ result: "error", message: error.message });
  }
});

// Create product
route.post("/", async (req, res) => {
  try {
    const product = req.body;
    
    
    const createdProduct = await pmDb.createProduct(product);
    await pmFs.writeProduct(createdProduct)
    res.json({ result: "success", payload: createdProduct });
  } catch (error) {
    res.status(500).json({ result: "error", message: error.message });
  }
});

// Update product
route.put("/:pid", async (req, res) => {
  try {
    const pid = req.params.pid;
    const updatedProductData = req.body;
    const updatedProduct = await pmDb.updateProduct(pid, updatedProductData);
    await pmFs.updateProduct(pid,updatedProduct)
    res.json({ result: "success", payload: updatedProduct });
  } catch (error) {
    res.status(500).json({ result: "error", message: error.message });
  }
});

// Delete product
route.delete("/:pid", async (req, res) => {
  try {
    const pid = req.params.pid;
    const deletedProduct = await pmDb.deleteProduct(pid);
    await pmFs.deleteProduct(pid)
    res.json({ result: "success", payload: deletedProduct });
  } catch (error) {
    res.status(500).json({ result: "error", message: error.message });
  }
});

export default route;
