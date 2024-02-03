const dbConnect = require('./mongodb');

const updateData=async()=>{
    let data = await dbConnect();
    let result =await data.updateMany({brand:'macromax'},{$set: {brand:'max pro 4',price:909}});
    console.warn(result)
}

updateData();