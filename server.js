var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var campground = require("./models/campground");
var seedDB = require('./seeds');


seedDB();

const config = require('config');
//...

if (config.has('optionalFeature.detail')) {
  const detail = config.get('optionalFeature.detail');
  //...
}
mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://azamudin:moazazQW@cluster0-kmqrk.mongodb.net/test?retryWrites=true&w=majority");
app.use(bodyparser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

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
 var description =  req.body.description;
 var newcampground = {name: name, image: image, description:description, }
    campground.create(newcampground, function(err,newlycretead){
        if (err){
         console.log(err);
        }else {
          res.redirect("/campgrounds");
        }
    });
});

app.get("/campgrounds/new", function(req, res){
 res.render("new.ejs");
});

app.get("/campgrounds/:id", function(req, res){
  campground.findById(req.params.id, function(err, foundcampgroud){
      if (err){
        console.log(err);
      }else
         res.render("show", {campground: foundcampgroud});
   });
});

app.listen(process.env.PORT);
