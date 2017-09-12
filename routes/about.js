var express=require("express");
var router=express.Router();

router.get("/", function(req, res){
	var pagetdata={ title : 'About Page', pagename : 'about/index.ejs' };
	res.render("layout.ejs", pagetdata);
});

module.exports=router;