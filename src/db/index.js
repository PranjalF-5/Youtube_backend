import mongoose from "mongoose";
import { YoutubeBackend } from "../constants.js";


const connectDB = async () => {

    try {
       const connectionInstance =   await mongoose.connect(`${process.env.MONGO_URL}/${YoutubeBackend}`)
       console.log(`Mongo Db connected Successfully. DB Host ${connectionInstance.connection.host}`);
    }
    catch(error)
    {
        console.log("mongo db connection error", error);
        process.exit(1);
    }
}


export default connectDB