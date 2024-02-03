const http=require('http');
const data1=require('./data1');
http.createServer((req,resp)=>{
resp.writeHead(200,{'Content-Type':'application\json'});
// resp.write(JSON.stringify({name:'Naser Shaikh',email:'naser@test.com'}));
resp.write(JSON.stringify(data1));   //for import the data
resp.end();
}).listen(4500);