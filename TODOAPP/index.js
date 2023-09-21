const express=require('express');
const app=express();

//load config from env file
require("dotenv").config();
const PORT=process.env.PORT || 4000;

//connect to the databse
const dbConnect=require("./config/database");
dbConnect();

//import routes for TODO API
const todoRoutes=require("./routes/todos");


//middleware to parse json request body (not using body parser)
app.use(express.json());


//mount the todo API routes
app.use("/api/v1",todoRoutes);

//start server
app.listen(PORT,()=>{
    console.log(`server started successfully at ${PORT}`);
})


//default route
app.get('/',(req,res)=>{
    res.send(`<h1>This is home page baby</h1>`)
})