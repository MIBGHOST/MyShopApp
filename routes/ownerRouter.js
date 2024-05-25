const express = require('express');
const router = express.Router();
const ownerModel = require('../models/owner-model');

router.get("/", function(req, res){
    res.send("hello mibghost");
});

module.exports = router;