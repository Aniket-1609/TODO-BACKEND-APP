//create a todo object and insert it into the database

//import the todo model-->fetching the schema of todo
const Todo=require('../models/Todo');

//define route handler

//this is one more method to export object
//here we use async function bcoz we do not want our main code to wait until this func executes
exports.createTodo =async(req,res) => {
    try{
        //extract title and desc from request body
        const {title,description}=req.body;
        //create a new todo object and insert in DB
        const response=await Todo.create({title,description});
        //send a json response with a success flag
        res.status(200).json(
            {
                success:true,
                data:response,
                message:'Entry Created Successfully'
            }
        );
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500).json(
            {
                success:false,
                data:"internal server error",
                message:err.message,
            }
        )
    }
}


