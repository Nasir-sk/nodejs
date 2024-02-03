const express=require('express');
const path = require('path')        // TO ecess the folder's or files's path

const app = express();
const publicPath=path.join(__dirname,'public');     //access the folder

app.set('view engine','ejs');


// use is a middleware
app.get('/home', (_, resp)=>{
    resp.sendFile(`${publicPath}/home.html`)
})

// 
app.get('/profile', (_, resp)=>{
    const user={
        name:'naser shaikh',
        email:'nasir@test.com',
        city:'Ballari',
        skills:['php','js','c++']
    }
    resp.render('profile',{user});
})

app.get('/login',(_,resp)=>{
    resp.render('login')
})

app.get('/about', (_, resp)=>{
    resp.sendFile(`${publicPath}/about.html`)
})

app.get('/help', (_, resp)=>{
    resp.sendFile(`${publicPath}/help.html`)
})

app.get('*', (_, resp)=>{
    resp.sendFile(`${publicPath}/404page.html`)
})


// app.use(express.static(publicPath));        // reload the static pages
app.listen(5000);