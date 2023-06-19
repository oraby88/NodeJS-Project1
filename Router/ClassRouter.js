const express=require("express");
const controller=require("./../Controller/ClassController");
const controller1 = require("./../Controller/TeacherController.");
const router = express.Router();

router.route("/class")
      .get(controller.getAllClasses)
      .post(controller.addClass)
      .patch(controller.updateClass)
      

router.route("/class/:id?")
      .get(controller.getClassById)
      .delete(controller.deleteClass)
      
router.route("/class/teacher/:id?")
      .get(controller1.getTeacherById);

module.exports=router;