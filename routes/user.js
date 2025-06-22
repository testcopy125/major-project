const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const e = require("connect-flash");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const userController = require("../controller/user.js");

// Sign-Up
router.route("/signup")
    .get(userController.renderSignupForm)
    .post(wrapAsync(userController.signup));

// Log-in
router.route("/login")
    .get(userController.renderLoginForm)
    .post(
        saveRedirectUrl, 
        passport.authenticate('local', { 
            failureRedirect: "/login", 
            failureFlash: true 
        }), 
        userController.login
    );

// Logout
router.get("/logout", userController.logout);

module.exports = router;