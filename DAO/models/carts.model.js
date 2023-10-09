import mongoose from "mongoose";

const cartsCollection="carts"
const cartShema= new mongoose.Schema({
    products:[{
        item:{type:mongoose.Schema.types.objectId,ref:`Product`},
        quantity:{type:Number,default:1}
    }]
})


export const cartModel=mongoose.model(cartsCollection, cartShema);