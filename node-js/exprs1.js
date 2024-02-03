const express=require('express')
const app = express();
app.get('',(req, res)=>{
   // console.log("data sent by browser =>> ",req.query.name)
    res.send(`<h1>WELCOME, TO HOME PAGE</h1><a href="/about"/>Go to About Page</a>`)
});


app.get('/about',(req, res)=>{
    res.send(`
    <input type="text" placeholder="User name" value="${req.query.name}"/>
    <button>Click Me</button>
    <a href="/"/>Go to About Page</a>
    `);
});

app.get('/help',(req, res)=>{
    res.send([
        {
        name:'Naser',
        email:'naser@test.com'
    },   {
        name:'Naser',
        email:'naser@test.com'
    }
]);
});


app.listen(5000);