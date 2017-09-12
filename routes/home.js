var express=require("express");
var router=express.Router();

router.get("/", function(req, res){
	res.render("layout.ejs", { title : "Home Page" });
});
router.get("/james", function(req, res){
	res.send("JAMES");
});
module.exports = router;