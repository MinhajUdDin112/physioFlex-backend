const express = require('express');
const colors = require('colors');
var morgan = require("morgan");
var cors = require("cors");
const connectDB = require('./src/config/db'); 
const cookieparser = require('cookie-parser');
const dotenv = require('dotenv');
dotenv.config();

//rest object
const app = express();
app.use(
    cors({
      origin: "*",
    })
  );
//Database Conectionl
connectDB();

app.use(express.json());
app.use(cookieparser());
app.use(morgan("dev"));
//routes
app.use("/api/auth", require('./src/routes/AuthRoutes'));
app.use("/api", require('./src/routes/categoryRoute'))
app.use("/api", require('./src/routes/subCategoryRoutes'))
app.use("/api", require('./src/routes/productRoutes'))


//listen port
const port = process.env.PORT || 8080
app.listen(port, ()=>{
    console.log(`Listning to server on port ${process.env.PORT}`.bgCyan.white)
})