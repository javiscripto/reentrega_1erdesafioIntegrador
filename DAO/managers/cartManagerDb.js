import { cartModel } from "../models/carts.model";
import productModel from "../models/product.model";

export default class CartManagerDb{
    constructor(){};


    create= async(cartData)=>{
        try {
            const cart= new cartModel(cartData);
            const savedCart= await cart.save();
            return savedCart;
        } catch (error) {
            console.error("error:",error)
        }
    }

    getAll= async()=>{
        try {
            const carts=await cartModel.find();
            return carts;
        } catch (error) {
            console.error("error: ",error)
        }
    }

    getById= async(cartId)=>{
        try {
            const cart= await cartModel.findById(cartId);
            return cart
        } catch (error) {
            console.error("error: ",error)
        }
    }

    updateCart= async(cartId, updatedCartData)=>{
        try {
            
            


        } catch (error) {
            console.error("error: ",error)
        }
    }
}