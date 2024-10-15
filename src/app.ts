import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

// configure dotenv 
dotenv.config();

// set up app 
const app = express();

// middleware set up
app.use(express.json({limit: '30 mb'}));
app.use(express.urlencoded({extended: true}));
app.use(morgan("dev"));
app.use(cors());

// set up .env variables
const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL;

// set up mongodb connection

const startServer = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    
    console.log("MONGODB connected successfully");
    
    app.listen(PORT, () => {
      console.log(`Server is running on PORT ${PORT}`);
    });
  } catch (err) {
    console.log (err);
  }
};

startServer();