module.exports=reqFilter = (req, resp, next)=>{

// const express=require('express');
// const app=express();
// Application Level MiddleWare

// const reqFilter=(req,resp,next)=>{
    // console.log('reqFilter');
    if(!req.query.age){
        resp.send("Please provide age")
    }else if(req.query.age<18){
        resp.send("You can not access this Page")    
    }
    else{
        next();
    }
}

// app.use(reqFilter);

// app.get('/',(req, resp)=>{
//     resp.send('Welcome to Home Page')
// })

// app.get('/user',(req, resp)=>{
//     resp.send('Welcome to User Page')
// })

// app.listen(5000);