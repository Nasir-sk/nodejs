// const mongoose = require('mongoose');

// //Schemas

//      mongoose.connect("mongodb://localhost:27017/e-comm");
//     const ProductSchema = new mongoose.Schema({
//         name: String,
//         price:Number,
//         brand:String,
//         category:String
//     });
    
// const saveInDB = async ()=>{
//     const Product = mongoose.model('products', ProductSchema);
//     let data = new Product({name:"Note Pro",price:1200, brand:"maxx", category:"mobile"});
//     let result =await data.save()
//     console.log(result)
// }
// // saveInDB();

//  const updateInDB = async ()=>{
//     const Product = mongoose.model('products', ProductSchema)
//      let data = await Product.updateMany({
//         name:'Note Pro'},{
//             $set:{price: 80}
//     })
//     console.log(data)
// }
// //updateInDB();

// const deleteInDB = async ()=>{
//     const Product = mongoose.model('products', ProductSchema)
//     let data = await Product.deleteOne({name:'m8'})
//     console.log(data)
// }
// // deleteInDB();

// const findInDB = async ()=>{
//     const Product = mongoose.model('products', ProductSchema)
//     let data = await Product.find({name:'Note Pro1'})
//     console.log(data)
// }
// findInDB();
const  express = require('express')
require('./config')
const Product = require('./product')

const app = express();
app.use(express.json())
app.post("/create", async (req, resp)=>{
    let data = new Product(req.body);
    let result = await data.save();
    console.log(req.body)
    resp.send("Done")
});

app.listen(5000);