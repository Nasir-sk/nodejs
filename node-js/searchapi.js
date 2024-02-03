
const  express = require('express')
require('./config')
const Product = require('./product')

const app = express();
app.use(express.json())

app.get("/search/:key",async (req, resp)=>{          //u can also write item/key
    console.log(req.params.key)
    let data = await Product.find(
        {"$or":[
            {"brand":{$regex:req.params.key}},
            {"name":{$regex:req.params.key}}
        ]}
    )
    resp.send(data)
})

app.listen(5000);