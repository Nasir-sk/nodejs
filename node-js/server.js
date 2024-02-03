const http = require('http');
http.createServer((req,resp)=>{
    resp.write("<h1>Hello there!,  here Nasir Shaikh</h1>");
    resp.end();
}).listen(5000);

// Function

function dataControl(req,resp)
{
    resp.write("<h1>Helllo there,,! This is Naser</h1>");
    resp.end();
}
http.createServer(dataControl).listen(4500);

// function test(a)
// {
//     return a*10;
// }

//      or
// const test = (a) =>a*10