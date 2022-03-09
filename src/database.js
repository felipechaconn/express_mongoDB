/**
 * Import only connect module  from mongoose  to connect to MongoDB Db
 * Import only config module from dotenv
 */
import { connect } from "mongoose";
import dotEnv from './config'

console.log(dotEnv.MONGODB_URI);
(async () => {
  try {
    const db = await connect(dotEnv.MONGODB_URI);
    console.log("DB connected to ", db.connection.name);
  } catch (error) {
    console.log(error);
  }
})();
