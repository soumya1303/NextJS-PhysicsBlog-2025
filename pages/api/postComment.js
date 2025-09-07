import { MongoClient } from "mongodb";

const handle=async (req, res)=>{

    const uri="mongodb+srv://db-user:password0@cluster0.9sys7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

    const client=new MongoClient(uri);

    try {
        const conn=await client.connect();    
        
        const _db=conn.db("fs25DB");

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