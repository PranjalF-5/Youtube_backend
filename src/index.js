// import mongoose from "mongoose"
// import {DB_NAME} from "./constants"
// import { Express } from "express"
// const app = express()

// //always comnnect the database with iffe and ry catch as there are several chances that the database connection might fail
// ( async()=> {
//     try{
//         await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`)
//     } catch(error){
//         console.log("Error",error);
//         throw error
//     }
// })()



//The above method is good but its better approach to make a new db file, connect database there and import it in index and execute it

import dotenv from 'dotenv'
import connectDB from './db/index.js';


dotenv.config({
    path : './env'
})

connectDB()