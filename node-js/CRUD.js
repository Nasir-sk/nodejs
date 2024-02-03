const fs = require('fs');
const path = require('path');
const dirPath=path.join(__dirname,'./cr/crud7');
const filePath=`${dirPath}/apple12.txt`;

//fs.writeFileSync(filePath,"This is a simple text file ");         to create a file in the created folder

// fs.readFile(filePath,'utf8',(err,item)=>{
//     console.log(item);
// })               to read a file


// fs.appendFile(filePath,'and file name is apple.txt',(err)=>{
//     if(!err) console.log("file is updated")  //if ! there is no error then itll exc console
// })

// fs.rename(filePath,`${dirPath}/fruit.txt`,(err)=>{
//     if(!err)    console.log("file name is updated")
// })       rename a present file as fruit.txt


fs.unlinkSync(`${dirPath}/fruit.txt`)