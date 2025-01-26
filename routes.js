const express = require("express");
const router = express.Router();
const AuthenticationRouter = require("./applicationLayer/routes/userAuthenticationRoutes");
const viewRouter = require("./applicationLayer/routes/viewRoutes");
const detaisPageRouter = require("./applicationLayer/routes/detailsPageRouter");
const hotelOwnerRoutes = require("./applicationLayer/routes/hotelOwnerRoutes");


router.use("/",AuthenticationRouter);
router.use("/home",viewRouter);
router.use("/details",detaisPageRouter);
router.use("/owner",hotelOwnerRoutes);

module.exports = router;
