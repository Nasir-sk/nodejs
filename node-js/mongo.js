const dbConnect = require('./mongodb');


// BELOW CODE THAT IS DB CONNECTION THAT IS IN ANOTHER FILE CALLED {mongodb}
// const { response } = require('express');
// const {MongoClient} = require('mongodb');
// const url='mongodb://localhost:27017';
// const database='e-comm'
// const client = new MongoClient(url);

// async function dbConnect(){
//     let result = await client.connect();
//     let db = result.db(database);
//     return db.collection('products')
    // let response = await collection.find({name:'nord'}).toArray();
    // console.log(response)
// }
// dbConnect().then((resp)=>{
//     resp.find().toArray().then((data)=>{
//         console.warn(data)
//     })
// })


// console.warn(dbConnect())
// dbConnect();


const main= async()=>{
    let data = await dbConnect();
    data=await data.find().toArray();
    console.log(data);
}
// it's easy to use that is latest
main();