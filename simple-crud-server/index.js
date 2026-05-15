const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

// middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Simple CRUD server');
});

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

        await client.connect();

        const database = client.db("simpleCRUD");
        const userCollection = database.collection("users");

        // get all users
        app.get('/users', async (req, res) => {

            const result = await userCollection.find().toArray();

            res.send(result);
        });

        // get single user
        app.get('/users/:id', async (req, res) => {

            const id = req.params.id;

            const query = {
                _id: new ObjectId(id)
            };

            const user = await userCollection.findOne(query);

            res.send(user);
        });

        // delete user
        app.delete('/users/:id', async (req, res) => {

            const id = req.params.id;

            const query = {
                _id: new ObjectId(id)
            };

            const result = await userCollection.deleteOne(query);

            res.send(result);
        });

        // create user
        app.post('/user', async (req, res) => {

            const newUser = req.body;

            console.log(newUser);

            const result = await userCollection.insertOne(newUser);

            res.send(result);
        });

        await client.db("admin").command({ ping: 1 });

        console.log("Connected to MongoDB");

    }
    catch (error) {

        console.log(error);
    }
}

run().catch(console.dir);

app.listen(port, () => {

    console.log(`Simple CRUD server running ${port}`);
});