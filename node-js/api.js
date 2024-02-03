const express = require('express')
const dbConnect = require('./mongodb')
const mongodb = require('mongodb')
const app = express();

app.use(express.json());

app.get('/', async(req, resp)=>{
    let data =await dbConnect();
    data = await data.find().toArray()
    console.log(data);
    resp.send(data)     //{name:'naser'}
});

app.post('/',async (req,resp)=>{
    let data = await dbConnect();
    let result = await data.insertOne(req.body)
    resp.send(result)
});


// Either
// app.put("/:name", async(req, resp)=>{
//     let data = await dbConnect();
//     let result = data.updateOne({name: req.params.name},{$set:req.body});
//     // console.log(req.body)
//     resp.send({result:"update"})
// })
//          OR
app.put("/", async(req, resp)=>{
    let data = await dbConnect();
    let result = data.updateOne({name: "mi 50"},{$set:{price:9000}});
    // console.log(req.body)
    resp.send({result:"update"})
})

app.delete("/:id",async (req, resp)=>{
    console.log(req.params.id)
    const data = await dbConnect()
    const result =await data.deleteOne({_id:new mongodb.ObjectId(req.params.id)})

    resp.send(result)
})

app.listen(5000)