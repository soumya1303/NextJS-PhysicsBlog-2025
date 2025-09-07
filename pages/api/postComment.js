import { MongoClient } from "mongodb";

const handle=async (req, res)=>{

    const uri=`${process.env.mongo_conn_str}`

    const client=new MongoClient(uri);

    try {
        const conn=await client.connect();    
        
        const _db=conn.db(`${process.env.mongo_schema}`);

        const _collection=_db.collection("techblogcomment");

        const comment={
            emailId:req.body.userE,
            name:req.body.userN,
            comment:req.body.userC
        }

        const resp=await _collection.insertOne({...comment});

        res.status(200).json({message:"Comment inserted successfully"})

        conn.close();

    } catch (error) {
        console.log(error.message);
        res.status(500).json({error:error.message})
    }

}

export default handle;