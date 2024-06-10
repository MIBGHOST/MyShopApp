const mongoose = require('mongoose');
require('dotenv').config();

const mongoURI = process.env.MONGODB_URI;

if (!mongoURI) {
    console.error("MONGODB_URI is not defined. Please check your .env file.");
    process.exit(1);
}
console.log("MONGODB_URI:", mongoURI);

async function testConnection() {
    try {
        await mongoose.connect(mongoURI, {
            serverSelectionTimeoutMS: 30000,
        });
        console.log("Connected to MongoDB");
        mongoose.connection.close();
    } catch (err) {
        console.error("Failed to connect to MongoDB:", err.message);
    }
}

testConnection();
