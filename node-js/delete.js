const dbConnect =  require('./mongodb')

const deleteData=async()=>{
    let data = await dbConnect();
    let result =await data.deleteMany({name:'max 3'})
    console.warn(result);
    if(result.acknowledged){
        console.log("recors Deleted");
    }
}

deleteData();