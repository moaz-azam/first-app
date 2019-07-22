var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var mongoose = require('mongoose')

mongoose.connect("mongodb://localhost/yelp-camp")

app.use(bodyparser.urlencoded({extended: true}));

//app.use(express.static("public"));
app.set('view engine', 'ejs');

var campgroundSchema = new mongoose.Schema({
 name: "string",
 image: "string",
});

var campground = mongoose.model("campground",campgroundSchema);
campground.create(
 {
  name: "hunza",
  image: "https://pixabay.com/get/57e1d3404e53a514f6da8c7dda793f7f1636dfe2564c704c732c7dd4914fcd5e_340.jpg"
 }, function(err,campground){
  if(err){
  console.log(err);
 }else{
  console.log("newly create campground");
  console.log(campground);
 }
});

var campgrounds = [

];

app.get("/", function(req , res){
  res.render("home");
});

app.get("/campgrounds", function(req , res){
 campground.find({}, function (err, campgrounds){
  if(err){
   console.log(err);
  }else {
    res.render("campgrounds", {campgrounds:campgrounds});
  }
 });
});

app.post("/campgrounds", function(req, res){
 var name = req.body.name;
 var image = req.body.image;
 var newcampground = {name: name, image: image}
 campgrounds.push(newcampground);
 res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res){
 res.render("new.ejs");
});

//app.listen(process.env.PORT ,process.env.IP || 8080, () => console.log("yelpcamp server has sarted"));
socket = io.listen(process.env.PORT);
