import { Router } from "express";

const route=Router();

//import managers
import CartManagerDb from "../../DAO/managers/cartManagerDb.js";
import CartManagerFs from "../../DAO/managers/cartManagerFs.js";

const cartMfs= new CartManagerFs();
const cartMdb= new CartManagerDb();




route.post("/api/carts/",async(req,res)=>{
    const products=req.body;

    try {
        let cart= await cartMdb.createCart(products);
        await cartMfs.writecart(cart)
        res.status(200).json({result:"success", payload:cart})
    } catch (error) {
        console.error("error:",error);
        res.status(500).json({error: error})
    }
});




//get all carts
route.get("/api/carts/", async(req, res)=>{
    try {
        let result = await cartMdb.getAll();
        await cartMfs.getAll();
        res.status(200).json({result: "success", payload: result})
    } catch (error) {
        console.error("error:",error);
        res.status(500).json({message:"error al cargar los carritos"})
    }
})

// get cart by id 
route.get("/api/carts/:cid/", async(req,res)=>{
    try {
        const cid=req.params.cid;
        const dbCart= await cartMdb.getById(cid);
        const fsCart= await cartMfs.getById(cid);
        res.status(200).json({result: "success", payload:{dbCart,fsCart}})
    } catch (error) {
        res.status(500).json({result:"error", message:error.message})
    }
})



export default route;
