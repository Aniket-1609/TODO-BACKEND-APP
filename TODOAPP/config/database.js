const mongoose=require('mongoose');

//step1->install npm i dotenv
//step2->to load the .env data in process object
require('dotenv').config();

//when there is a call to this function,
// databse connectivity between nodejs and DB takes place
const dbConnect=() =>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(()=>{console.log("connection success")})
    .catch((error)=>{
        console.log("error in connection");
        console.error(error.message);

        //iska kya mtlb hai?
        process.exit(1);
    });
}

module.exports=dbConnect;