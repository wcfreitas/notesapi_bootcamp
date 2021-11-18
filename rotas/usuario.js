const express = require("express");
const router = express.Router();

router.get("/", function (req, res){
    res.send("GET nota");
});

router.post("/",function(req, res){
    console.log(req.body);
    res.send("POST nota");
})
module.exports = router;
