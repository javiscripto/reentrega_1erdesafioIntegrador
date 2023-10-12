import { cartModel } from "../models/carts.model.js";
import productModel from "../models/product.model.js";

export default class CartManagerDb{
    constructor(){};


 

   createCart= async(productsArr)=> {
        let cart;
    
        if (productsArr.length > 0) {
            cart = await cartModel.create({ products: [] });
    
            for (const prod of productsArr) {
                let product = await productModel.findById(prod);
    
                if (product) {
                    cart.products.push({ item: product._id, quantity: product.quantity });
                }
            }
        } else {
            cart = await cartModel.create({ products: [] });
        }
    
        return cart;
    }
    

    getAll= async()=>{
        try {
            const carts=await cartModel.find().populate("products.item");
            return carts;
        } catch (error) {
            console.error("error: ",error)
        }
    }

    getById= async(cartId)=>{
        try {
            const cart= await cartModel.findById(cartId).populate("products.item");
            return cart
        } catch (error) {
            console.error("error: ",error)
        }
    }

    
}