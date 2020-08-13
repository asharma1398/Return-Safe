const router = require("express").Router();
const checkinController = require("../../controllers/checkinControllers");

router.route("/")
    .post(checkinController.create)
    .get(checkinController.find);

router.route("/:date")
    .get(checkinController.findbyDate);
    
module.exports = router;