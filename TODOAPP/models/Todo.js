const mongoose=require('mongoose');

const todoScehma=new mongoose.Schema(
    {   //Scehma->description of data
        title:{
            type:String,
            required:true, //apne ko chahiye hi ye data
            maxLength:50,
        },
        description :{
            type:String,
            required:true,
            maxLength:50,
        },
        //kis time p data create hua hh
        createdAt:{
            type:Date,
            required:true,
            default:Date.now(),  //default value provided in case of absence of required value
        },
        updatedAt:{
            type:Date,
            required:true,
            default:Date.now()
        }

    }
)

module.exports=mongoose.model("Todo",todoScehma);