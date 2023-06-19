const express=require("express");
const controller=require("./../Controller/ChildernController");

const router = express.Router();

router.route("/childern")
      .get(controller.getAllChildern)
      .post(controller.addChildern)
      .patch(controller.updateChildern)


router.route("/childern/:id?")
       .get(controller.getChildernById)
       .delete(controller.deleteChildern)

module.exports = router;
