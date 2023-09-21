const express=require('express');
const router=express.Router();

//import cantroller
const {createTodo} =require("../cantrollers/createTodo");
const {getTodo,getTodoById} =require("../cantrollers/getTodo");
const {updateTodo} =require("../cantrollers/updateTodo");
const {deleteTodo} =require("../cantrollers/deleteTodo");


//define API routes
router.post("/createTodo",createTodo);
router.get("/getTodos",getTodo);
router.get("/getTodos/:id",getTodoById);
router.put("/updateTodo/:id",updateTodo);
router.delete("/deleteTodo/:id",deleteTodo);

module.exports=router;