import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import bookRoute from "./route/book.route.js";
import cors from "cors";
import userRoute from "./route/user.route.js";
const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = 'mongodb+srv://rs504787:Hello@cluster0.5vrr4at.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

//Coonect to MongoDB 
try{
    mongoose.connect(URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("Connect to mongodb");
}catch(error){
    console.log("Error:", error);
}

app.get('/', (req, res) => {
  res.send('rohit')
})

//defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})