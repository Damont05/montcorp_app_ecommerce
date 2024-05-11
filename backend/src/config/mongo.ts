import "dotenv/config";
import { connect } from "mongoose";

async function dbConnect(): Promise<void> {
    const DB_URI = <string>process.env.DB_URI;
    const dbName = <string>process.env.DBNAME;
    await connect(DB_URI,{dbName});
}

export default dbConnect;