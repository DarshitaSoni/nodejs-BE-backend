const { MongoClient } = require('mongodb');

let client;
let collection;
const dbUrl = process.env.MONGODB_URL;

async function connectToDatabase() {
    if (!client) {
        // client = await MongoClient.connect(config.dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });
        client = new MongoClient(dbUrl);
    }
    collection = client.db('BE_Backend').collection('list_email_domains');
}

const getListOfEmailDomains = async () => {
    connectToDatabase()
    console.log('collection', collection)
    try {
        const data = await collection.find({}).toArray();
        console.log("data", data)
        return data;
    } catch (e) {
        console.log(e)
    }
}

module.exports = {
    getListOfEmailDomains
}