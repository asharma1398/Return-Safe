const router = require("express").Router();
const GeolocationController = require("../../controllers/GeolocateController");


router.route("/")
    .post(GeolocationController.create);
router
    .route("/:date")
    .get(GeolocationController.findAll)
router
    .route("/:id")  
    .post(GeolocationController.boxProps)
module.exports = router;