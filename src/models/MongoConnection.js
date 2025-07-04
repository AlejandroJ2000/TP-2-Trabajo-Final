import { MongoClient } from "mongodb"
import dotenv from "dotenv"

dotenv.config()

const client = new MongoClient(process.env.MONGO_URI)
await client.connect()

const db = client.db(process.env.MONGO_DB)

export default { db }