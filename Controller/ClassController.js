const ClassModel = require("./../Model/ClassModel");

exports.getAllClasses = (request,response,next) => {


    response.status(200).json({data:[{id:1,"Name":"class1","supervisor":1,"children":[]},{id:2,"Name":"class2","supervisor":2,"children":[]},{id:3,"Name":"class3","supervisor":3,"children":[]},{id:4,"Name":"class4","supervisor":4,"children":[]}]});

    // console.log(request.query);

    // console.log(request.params);

}
exports.getClassById = (request,response) =>{
    response.status(200).json({data:{id:request.params.id}})
}

exports.addClass=(request,response,next)=>{
     
    //3- request httpbody
    console.log(request.body);
     // /code databse 
     response.status(201).json({data:"added"})
    }
 
exports.updateClass=(request,response,next)=>{
       // /code databse 
        //3- request httpbody
    console.log(request.body);
     response.status(200).json({data:"update"})
    }
 
exports.deleteClass=(request,response,next)=>{
       // /code databse 
     response.status(200).json({data:"deleted"})
    }
exports.getClassInfoById=(request,response)=>{
    response.status(200).json({data:{id:request.params.id}});
}


