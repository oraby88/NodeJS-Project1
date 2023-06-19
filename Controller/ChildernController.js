const ChildernSchema = require("./../Model/ChildModel");

exports.getAllChildern = (request,response,next) => {


    response.status(200).json({data:[{id:1,"fullName":"mostafa mohamed","age":8,"Level":"KG2","Adress":"Assuit"},{id:2,"fullName":"Ahmed mohamed","age":8,"Level":"KG2","Adress":"Assuit"},{id:3,"fullName":"Ali mohamed","age":8,"Level":"KG2","Adress":"Assuit"},{id:4,"fullName":"Rana mohamed","age":8,"Level":"KG2","Adress":"Assuit"}]});

    // console.log(request.query);

    // console.log(request.params);

}
exports.getChildernById = (request,response) =>{
    response.status(200).json({data:{id:request.params.id}})
}

exports.addChildern=(request,response,next)=>{
     
    //3- request httpbody
    console.log(request.body);
     // /code databse 
     response.status(201).json({data:"added"})
    }
 
exports.updateChildern=(request,response,next)=>{
       // /code databse 
        //3- request httpbody
    console.log(request.body);
     response.status(200).json({data:"update"})
    }
 
exports.deleteChildern=(request,response,next)=>{
       // /code databse 
     response.status(200).json({data:"deleted"})
    }
exports.getChildernInfoById=(request,response)=>{
    response.status(200).json({data:{id:request.params.id,"fullName":"mostafa mohamed","age":8,"Level":"KG2","Adress":"Assuit"}})
}


