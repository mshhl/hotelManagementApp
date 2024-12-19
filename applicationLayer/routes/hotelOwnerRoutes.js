const express = require("express");
const router = express.Router();
const {ownerDashboardLoad,loadDashboard} = require("../controllers/hotelOwnerControllers");


router.route("/registerHotel").get(ownerDashboardLoad);
router.route("/dashboard").get(loadDashboard)

module.exports = router;