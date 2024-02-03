//console.log("Sub");
// var a=12;
// var b=11;
// var c=13;
// console.log(a+b+c);

// const app = require('./app');
// //console.log(app.z());
// //var x = '20';

// const arr=[2,4,7,1,3,8,3];

// let result = arr.filter((item)=>{
//     //    console.log(item);
//     //return item===3;
//     return item>4;
// })
// console.log(result);

// Core module
//Global module

//const fs = require('fs'); //non-global
// console.log('Full-Stack Developer'); //global
// fs.writeFileSync('hello.txt','code Front-backend developer');
//console.log("-->",__dirname);
//console.log("-->",__filename);

// //                  or
// console.log("-->",__filename);  //not neceessery before or after the import module
// const fs = require('fs'); 
// fs.writeFileSync('hello2.txt','Some code');

//                          or

// const fs = require('fs').writeFileSync;
// fs("hello2.txt","ab na alnaj s");
// fs("hello2.txt","ab na alnaj s NNNNN"); // it will update the current text after override 


// it will work if u change the module name when u assigning like ::  const gs = require('fs'); where in the parameter must be correct

//                                  SERVER   HTTP
// const http = require('http'); // it will handle the reuest and response in nodejs server

// http.createServer((req,resp)=>{
//     resp.write("<h>Hello this is Nasir</h1>");
//     resp.end();
// }).listen(4500);   //IT EILL TAKE function as parameter that are first must be reuest and response


//                      OR using Arrow function 

// const http = require('http'); // it will handle the reuest and response in nodejs server

// function dataControl(re, resp)
// {
//     resp.write("<h1>Hello this is Nasir</h1>");
//     resp.end();
// }
// http.createServer(dataControl).listen(4500);

//                        Easiest method using arrow function

// function test(a){
//     return a*10;
// }
//      or
//const test =(a)=>a*100

//                      Package.json

//console.log("Package.json");
// Just adding modules in json
//That are :
// 1: npm i colors
// 2: npm i simple-node-logger
//const colors = require('colors');
//console.log("hello".red);
//console.log("package.json".cyan);

//                  Nodemon Package : it will run automatically after saving the folder

// console.log("Try Nodemon with node js...");
// installation of Nodemon :    npm i nodemon -g(it means globally installed) if u installed in desktop it can be access globally under folders.

// console.log(100+20);


//                      API

// const http= require('http');
// const data = require('./data');
// http.createServer((req,resp)=>{
//     resp.writeHead(200,{'Content-Type':'application\json'});
//     resp.write(JSON.stringify(data));
//     resp.end();
// }).listen(5000);

//          Input from command Line

//console.log(process.argv[2]);// argv means arguments vector

// creating file with input

// const fs = require('fs');

// const input = process.argv;
// fs.writeFileSync(input[2],input[3]); // it'll run after compilation to continue the process
//node .\index.js apple.txt 'This is a text file
 //or 
const fs = require('fs');
const input = process.argv;
if(input[2]=='add'){
    fs.writeFileSync(input[3],input[4]);
}else if(input[2]=='remove'){
    fs.unlinkSync(input[3])
}else{
    console.log("Invalid Intput");
}

//'node .\index.js add orange.txt(default is text file)  'This is a second text file'

//     To remove a file
// node .\index.js remove apple.txt OR node index.js remove apple.txt