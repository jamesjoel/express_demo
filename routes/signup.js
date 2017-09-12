var express=require("express");
var router=express.Router();
var MongoClient=require("mongodb").MongoClient;
var url="mongodb://localhost:27017/anjali_db";

router.get("/", function(req, res){
	var pagetdata={ title : 'Signup Page', pagename : 'signup/index.ejs' };
	res.render("layout.ejs", pagetdata);
});
router.post("/", function(req, res){
	MongoClient.connect(url, function(err, db){
		var collection=db.collection('user');
		collection.insert(req.body);
		
		res.redirect('/login');
	});
	//console.log(req.body);
});

module.exports=router;