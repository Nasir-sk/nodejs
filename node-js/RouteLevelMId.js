// const express=require('express');
// const app=express();

// // Single Route-Level MiddleWare

// const reqFilter=(req,resp,next)=>{
//     // console.log('reqFilter');
//     if(!req.query.age){
//         resp.send("Please provide age")
//     }else if(req.query.age<18){
//         resp.send("You can not access this Page")    
//     }
//     else{
//         next();
//     }
// }

// // app.use(reqFilter);

// app.get('/',(req, resp)=>{
//     resp.send('Welcome to Home Page')
// })

// app.get('/user',reqFilter,(req, resp)=>{
//     resp.send('Welcome to User Page')
// })

// app.get('/about',(req, resp)=>{
//     resp.send('Welcome to Home Page')
// })

// app.listen(5000);


// Route level using ROute package

const express = require('express');
const reqFilter= require('./middleware')
const app = express();
const route = express.Router();

route.use(reqFilter);
app.get('/',(res, resp)=>{
    resp.send('Welcome to Home Page')
})

route.get('/user',(req, resp)=>{
        resp.send('Welcome to User Page')
    })

    app.get('/about',(req, resp)=>{
            resp.send('Welcome to About Page')
        })

    route.get('/contact',(req, resp)=>{
            resp.send('Welcome to Contact Page')
        })

    
    app.use('/',route);

    app.listen(5000);