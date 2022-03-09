import { config } from "dotenv";

//Load .env file
config();


//Exports .env Global Variables
const dotEnv= {
    MONGODB_URI:process.env.DB_CONN_STRING,
    PORT:process.env.PORT
}

export default dotEnv;