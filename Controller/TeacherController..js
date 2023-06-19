const TeacherSchema = require("./../Model/TeacherModel");

exports.getAllTeachers=(requset,response,next)=>{
    TeacherSchema.find({})
    .then((data)=>{
        response.status(200).json({data:[{id:1,fullName:"Ahmed mohsen",Password:"Aa_123",Email:"ahmedmohsen@gamil.com",image:"img1"},{id:2,fullName:"mohamed mohsen",Password:"Aa_123",Email:"mohamedmohsen@gamil.com",image:"img2"},{id:3,fullName:"Ahmed Ali",Password:"Aa_123",Email:"ahmedali@gamil.com",image:"img3"},{id:4,fullName:"Mostafa Oraby",Password:"Oa_123",Email:"mostafaoraby@gamil.com",image:"img4"}]})
    })
    .catch((error)=>{next()})
}


exports.addTeacher=(request,response,next)=>{

    let newObject = new TeacherSchema({
        _id:request.body.id,
        fullName:request.body.fullName,
        Password:request.body.Password,
        Email:request.body.Email,
        image:request.body.image
    })

    newObject.save()
        .then((data)=>{
            response.status(201).json({data:"added",newObject:data})
        })
        .catch(error=>next(error))

}
exports.getTeacherById = (request,response) =>{
    response.status(200).json({data:{id:request.params.id}})
}
exports.updateTeacher = (request,response,next) =>{

    TeacherSchema.updateOne({
                    _id:request.params.id
                },{
                     $set:{fullName:request.body.fullName}
                })
                .then(
                    response.status(200).json({data:"updated"})
                )
                .catch(error=>next(error))

    
}
exports.deleteTeacher = (request,response)=>{
    response.status(200).json({data:"deleted"})
}

