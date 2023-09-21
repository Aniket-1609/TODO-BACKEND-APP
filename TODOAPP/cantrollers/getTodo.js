//import the model
const Todo=require("../models/Todo");

//define route handler

exports.getTodo=async(req,res)=>{
    try{
        //fetch all the todos from databse
        const todos=await Todo.find({});

        //response
        res.status(200)
        .json({
            success:true,
            data:todos,
            message:"entire todos details fetched"
        });
    }
    catch(err){
        console.error(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:"server error",
        });
    }
}


exports.getTodoById=async(req,res)=>{
    try{
        //extract todo items basis on id
        const id=req.params.id;
        const todo=await Todo.findById({_id:id});  //_id is by default in DB


        //data for given id not found
        if(!todo){
            return res.status(404).json({
                success:false,
                message:"No data found with Given id"
            })
        }
      
        //data for given id found
        res.status(200).json({
            success:true,
            data:todo,
            message:`Todo ${id} data successfully fetched`,
        })
    }
    catch(err){
        console.error(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:"server error",
        });
    }
}