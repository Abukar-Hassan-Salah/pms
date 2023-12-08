// this is where we start and run our server
const express=require("express");
const app=express();//this creating new instance 

//this is the middleware that we use to parse the data
app.use(express.json());
const PORT =5000;
// importing the other folders
const projectrouter=require("./src/routes/projects")



//TODO : Define the routes here

app.use("/projects",projectrouter)
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})