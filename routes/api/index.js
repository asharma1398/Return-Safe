const router = require("express").Router();
const userRoutes = require("./users");
const checkinRoutes = require("./checkins");

router.use("/users", userRoutes);
router.use("/checkins", checkinRoutes);

module.exports = router;