const { MongoClient } = require('mongodb');

const uri = "mongodb://localhost:27017/";
const client = new MongoClient(uri);

let db;

async function connect() {
    if (!db) {
        try {
            await client.connect();
            db = client.db("User_Login");
            console.log("Connected to MongoDB");
        } catch (error) {
            console.error("Failed to connect to MongoDB", error);
            process.exit(1);
        }
    }
    return db;
}

async function getCollection(name) {
    const database = await connect();
    return database.collection(name);
}

module.exports = {
    getUsersCollection: async () => await getCollection("users"),
    getPostsCollection: async () => await getCollection("posts")
};
