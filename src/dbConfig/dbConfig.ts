import { error } from "console";
import mongoose from "mongoose";

export async function connect() {
    try {
               mongoose.connect(process.env.MONGO_URI!);

               const connection = mongoose.connection;
               connection.on('connected', () => {
                   console.log(`MongoDB connected`);

               });

               connection.on('error', (err)=> {
                console.log("Error connecting to MongoDB, please make sure db in up to running :" + err);
                process.exit()
               })
           } catch (error) {
               console.log('Something went wrong connecting to the database');
               console.log(error);
           }
       }