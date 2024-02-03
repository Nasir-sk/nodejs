// console.log(process.argv[2]);
//node .\input_from_cmd_line.js hello Naser

const fs=require('fs');

const input=process.argv;
if(input[2]=='add')
{
    fs.writeFileSync(input[3],input[4])
    //              it'll fileName, & second one ll be your text or code
//      node .\input_from_cmd_line.js apple.txt 'This is your coder Naser'
}else if(input[2]=='remove'){
    fs.unlinkSync(input[3])
}else{
    console.log("Invalid Intput")
}

//node input_from_cmd_line.js add orange.txt 'This is one of the fruit'
// input_from_cmd_line.js remove orange.txt 
// node input_from_cmd_line.js remove orange  
