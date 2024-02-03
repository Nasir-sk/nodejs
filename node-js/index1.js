console.log('sub');
var a=10;
var b=20;
var c=30;
console.warn(a+b+c);

//Interview question ??
//console.log and console.warn  are different
// writtem in js to debug in major project

var d = '20';
//for(i=0;i<10;i++)
for(i=0;i<=10;i++)
{
    console.log(i);
}

// Array
//import {x} from '.\app.js'  // it can be used in JavaScript but not in nodejs
const app = require('./app.js')
//var x='20';
const arr=[2,4,7,1,3,8,3,8];
//console.log(arr[0]);
console.log(app)
console.log(app.x);
console.log(app.y);
console.log(app.z());
// pick a value  from an arr1
// const arr1=[2,4,7,1,3,8,3,8];
// console.log(arr1[0]);

//pick a specific value  by using fiter

// arr.filter((item)=>{
//     console.log(item)
// })

// let result = arr.filter((item)=>{
//     return item<=7; // item<,>,<=,>= ,digit
// })
// console.warn(result);

