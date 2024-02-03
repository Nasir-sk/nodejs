const mysql = require("mysql");

const con = mysql.createConnection({
    host:'localhost',
    user:"root",
    password:"",
    database:"test1"
});
con.connect((err, result)=>{
    if(err){
    console.warn("error");
    }
})

module.exports = con;