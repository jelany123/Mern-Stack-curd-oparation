const mongoose = require("mongoose");
require('dotenv').config();
const dbURL = process.env.MONGO_DB|| "mongodb://127.0.0.1:27017/test2MERN";

mongoose.connect(dbURL)
.then(()=>{
    console.log('MongoDB  is connected Suceessfully');
})
.catch((error)=>{
    console.log(error);
    process.exit(1);

});

