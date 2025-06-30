const router = require("express").Router();
const atoresRoutes = require("./atoresRoutes");

router.use("/", atoresRoutes);

module.exports = router;