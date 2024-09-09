require("dotenv").config();

const mongoUri = process.env.MONGO_URI
const port = process.env.PORT || 5000

module.exports = {mongoUri: process.env.MONGO_URI, PORT:port}