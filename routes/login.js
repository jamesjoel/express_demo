var express=require("express");
var router=express.Router();

router.get("/", function(req, res){
	var pagetdata={ title : 'Login Page', pagename : 'login/index.ejs' };
	res.render("layout.ejs", pagetdata);
});

module.exports=router;