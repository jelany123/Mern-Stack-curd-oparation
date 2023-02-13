const express = require("express");
require('dotenv').config();
require('./config/config.database');
const cors = require('cors');

const routes = require('./routes/api/route.book')

const app =express();
app.use(express.urlencoded({extended:true}));
app.use(express.json({extended:false}));
app.use(cors());
app.use('/api',routes);
const PORT = process.env.PORT||8000;


//What is Express URL-encoded ({ Extended True })?
// urlencoded() is a built-in middleware in Express. js.
//  The main objective of this method is to parse the incoming request with urlencoded payloads and is based upon the body-parser. 
// This method returns the middleware that parses all the urlencoded bodies









//route error
app.get('*',(req,res,next)=>{
    res.status(404).json({
        message: "route not found",
      });
})
// server error
app.get('*',(err, req, res, next) => {
    res.status(500).json(err.message);
  });
 
app.listen(PORT,()=>{
    console.log(`Server is Runnig at http://127.0.0.1:${PORT}`);
});