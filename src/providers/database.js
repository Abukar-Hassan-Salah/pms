// all database task we use here
const {MongoClient} = require("mongodb");
const URI = "mongodb://127.0.0.1:27017";
const DATABASE = "pms";

// connect to the database
const client = new MongoClient(URI);
const connectDB =async (db) =>{
    await client.connect();
    return client.db(db || DATABASE)
}
module.exports=connectDB;
