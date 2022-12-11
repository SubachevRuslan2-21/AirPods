var MongoClient = require('mongodb').MongoClient

const uri = "mongodb://127.0.0.1:27017/"
const client = new MongoClient(uri)
async function run() {
try {
await client.connect();
var database = client.db("airpods");
database.dropDatabase()
database = client.db("airpods");
const pods = database.collection("pods");
const result = await pods.insertOne({name:"наушники"});
console.log(`${result} documents were inserted`);
} finally {
await client.close();
}
}
run()