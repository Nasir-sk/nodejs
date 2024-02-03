const dbConnect = require('./mongodb');


const insert=async ()=>{
    const db=await dbConnect();
    const result = await db.insertMany(
        [
        {name:'max 1', brand:'macromax', price:330,category:'mobile'},
        {name:'max 2', brand:'macromax', price:330,category:'mobile'},
        {name:'max 3', brand:'macromax', price:330,category:'mobile'}
        
    ]
    );
if(result.acknowledged){
    console.log("data INserted")
}
}

insert();