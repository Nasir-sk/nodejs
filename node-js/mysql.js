// const mysql = require("mysql");

// const con = mysql.createConnection({
//     host:'localhost',
//     user:"root",
//     password:"",
//     database:"test"
// });
// con.connect((err)=>{
//     if(err){
//     console.warn("error")
//     }else{
//         console.warn("Connected")
//     };

// con.query("select * from users",(err, result)=>{
//     console.warn("result",result)
// })
// })



// after mysqlConfig.js
const express = require('express')
const con = require("./mysqlConfig")
const app = express();

app.use(express.json());        //json to pass the data dynamically it ll convert the request body to json formate

app.get("/", (req, resp)=>{
    // resp.send("route done");
    con.query("SELECT * FROM users", (err, result)=>{
        if(err){
            resp.send("error")
        }else{
            resp.send(result)
        }
    })
});

app.post("/", (req,resp)=>{
    const data = {name:"bhaskar",pass:'1202',user:"vist"};
    con.query('INSERT INTO users SET ?', data, (error,result,fields)=>{
        if(error) throw error;
        resp.send(result)
    })
});

// app.put("/", (req, resp)=>{
//     const data = ["tony",'0000',125,2];
//     con.query("UPDATE users SET name = ?, brand =?, price=? where id =?", data, (err, result,fields)=>{
//         if(err) throw error;
//         resp.send(result)
//     })
// })

app.put("/:id", (req, resp)=>{
    const data = [req.body.name,req.body.brand, req.body.price, req.params.id];
    con.query("UPDATE users SET name = ?, brand =?, price=? where id =?", data, (err, result,fields)=>{
        if(err) throw error;
        resp.send(result)
    })
})

app.delete("/:id", (req, resp)=>{
    con.query("DELETE FROM users WHERE id =" + req.params.id, (err, result)=>{
        if(err) throw error;
        resp.send(result)
    })
})
app.listen("5000");