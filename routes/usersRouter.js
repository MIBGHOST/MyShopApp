const express = require('express');
const router = express.Router();
const isLoggedIn = require("../middleware/isLoggedIn");
const { 
    registerUser, 
    loginUser, 
    logoutUser, 
}= require('../controllers/authController');
const { route } = require('./ownerRouter');


router.get("/", function(req, res){
    res.send("its working");
});

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/logout", logoutUser);


module.exports = router;