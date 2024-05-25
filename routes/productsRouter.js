const express = require('express');
const router = express.Router();

router.get("/", function (req, res) {
    res.send("product section is also working great!");
});

module.exports = router;