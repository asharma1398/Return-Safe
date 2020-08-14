const router = require("express").Router();
const userRoutes = require("./users");
const checkinRoutes = require("./checkins");
const location = require("./getLocation");


router.use("/mapping", location);
router.use("/users", userRoutes);
router.use("/checkins", checkinRoutes);

module.exports = router;