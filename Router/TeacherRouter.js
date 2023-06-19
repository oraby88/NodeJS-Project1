const express=require("express");
const controller=require("./../Controller/TeacherController.");
const controller1 = require("./../Controller/ChildernController");
const router=express.Router();

router.route("/teacher")
      .get(controller.getAllTeachers)
      .post(controller.addTeacher)
      .patch(controller.updateTeacher)
      

router.route("/teacher/:id?")
      .get(controller.getTeacherById)
      .delete(controller.deleteTeacher)
      
router.route("/teacher/Childern/:id?")
      .get(controller1.getChildernInfoById)
module.exports=router;