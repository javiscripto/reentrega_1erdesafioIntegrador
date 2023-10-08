import express,{json}from"express";
import mongoose from "mongoose";
const app= express();
const PORT = 8080;



//middlewares
app.use(json());

//import routes
import productRoute from "./routes/products.route.js"

app.use("/",productRoute)

//handlebars
// import { engine } from "express-handlebars";
// app.engine("handlebars", engine());
// app.set("view engine","handlebars")
// app.set("views",__dirname+`/views`);



///////////////////////////////////  set mongoose conection

mongoose.connect("mongodb+srv://javiermecker94:8GQVknO1JuiAQ920@ecomerce.9sqyqwu.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log("conectado a la base de datos")
})
.catch(error=>{console.log("error al conectar ")})



app.listen(PORT,()=>{
    console.log(`server on port ${PORT}`)
})



