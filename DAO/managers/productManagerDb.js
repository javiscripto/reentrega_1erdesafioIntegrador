
import productModel from "../models/product.model.js";

export default class ProductManagerDb{
    constructor(){};

    createProduct= async(productData)=>{
        try {
            const product = new productModel(productData);
            const savedProduct = await product.save();
            return savedProduct;
        } catch (error) {
          console.error("error",error)
        }
    }

    getAll= async()=>{
        try {
            const products = await productModel.find();
            return products;
          } catch (error) {
            console.error("error",error)
          }
    }

    getById= async(productId)=>{
        try {
            const product = await productModel.findById(productId);
            return product;
          } catch (error) {
            console.error("error",error)
          }
    }

    updateProduct = async(productId, updatedProductData)=>{
        try {
            const updatedProduct = await productModel.findByIdAndUpdate(
              productId,
              updatedProductData,
              { new: true }
            );
            return updatedProduct;
          } catch (error) {
            console.error("error",error)
          }        
    }

    deleteProduct= async(productId)=>{
        try {
            const deletedProduct = await productModel.findByIdAndRemove(productId);
            return deletedProduct;
          } catch (error) {
            console.error("error",error)
          }
    }
}