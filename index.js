const express = require("express");
const mongoose = require("mongoose");
const Teacher = require("./Router/TeacherRouter");
const Childern = require("./Router/ChildernRouter");
const Class = require("./Router/ClassRouter");

const morgan = require("morgan");

const server = express();

server.use(morgan('combined'));



mongoose.connect("mongodb://127.0.0.1:27017/SchoolDBSystem")
    .then(()=>{
        console.log("Connected to MongoDB");
        server.listen(process.env.PORT||8081,()=>{
        console.log("I am listening...");
        });
    })
    .catch((error)=>{
        console.log("Error Connecting to MongoDB"+error);
    })

//authentication

server.use(express.json());

server.use(Teacher);
server.use(Childern);
server.use(Class);

server.use((request,response,next)=>{
    console.log("authenticated MW");
    next();
})

server.use((request,response,next)=>{
    response.status(404).json({message:"page no found"});
})


server.use((error,request,response,next)=>{
    response.status(500).json({message:error+""});
})

