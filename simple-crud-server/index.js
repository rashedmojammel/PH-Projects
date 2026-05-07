const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

app.get('/',(req,res)=>{

    res.send('Simple CRUD server')
})
// const uri = `mongodb+srv://SimpleCRUD:WkHzixZ6ojdhWi7Z@cluster0.ne4uiou.mongodb.net/?appName=Cluster0`;
const uri = "mongodb://SimpleCRUD:WkHzixZ6ojdhWi7Z@ac-szdlkzg-shard-00-00.ne4uiou.mongodb.net:27017,ac-szdlkzg-shard-00-01.ne4uiou.mongodb.net:27017,ac-szdlkzg-shard-00-02.ne4uiou.mongodb.net:27017/?ssl=true&replicaSet=atlas-nqr74j-shard-0&authSource=admin&appName=Cluster0";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {


    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const database = client.db("simpleCRUD");
    const userCollection = database.collection("users");

    app.get('/users',async(req,res)=> {

        const cursor = userCollection.find();
        const result = await cursor.toArray();
        res.send(result);

    });
    app.get('/users/:id',async(req,res)=> {

        const id = req.params.id;
        const query = {
          _id : new ObjectId(id)

        }
        const user = await userCollection.findOne(query);
        console.log("user id :",id);
        // console.log(req.params);
        res.send(user);

    });
    
    

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
//    await client.close();
  }
}
run().catch(console.dir);

app.use(cors());
app.use(express.json());
app.listen(port, () =>
{
    console.log(`Simple CRUD server running ${port}`)
})