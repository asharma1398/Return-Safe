const router = require("express").Router();
const checkinController = require("../../controllers/checkinControllers");

router.route("/")
    .post(checkinController.create)

router.route("/:id")
    .get(checkinController.find)
    .post(checkinController.create);

module.exports = router;