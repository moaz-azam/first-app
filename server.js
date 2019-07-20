var express = require('express');
var app = express();
var bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({extended: true}));

//app.use(express.static("public"));
app.set('view engine', 'ejs');


app.get("/", function(req , res){
  res.render("home");
});

app.get("/campgrounds", function(req , res){
  var campgrounds = [
   {name: "hunza", image: "https://pixabay.com/get/57e8dc414e5ba814f6da8c7dda793f7f1636dfe2564c704c732c7fdd9048c45d_340.jpg"},
   {name: "murreee", image: "https://pixabay.com/get/57e1d3404e53a514f6da8c7dda793f7f1636dfe2564c704c732c7fdd9048c45d_340.jpg"},
   {name: "sakardu", image: "https://pixabay.com/get/54e8d7464b5bab14f6da8c7dda793f7f1636dfe2564c704c732c7fdd9048c45d_340.jpg"},
   {name: "swat", image: "https://pixabay.com/get/54e8d7464b5bab14f6da8c7dda793f7f1636dfe2564c704c732c7fdd9048c45d_340.jpg"},
 ];
 res.render("campgrounds",{campgrounds:campgrounds});
});

app.post("/campgrounds", function(req, res){
 res.send("cjjcjdncdjcdjn")
});

app.get("/campgrounds/new", function(req, res){
 app.render("new.ejs")
});

app.listen(process.env.PORT ,process.env.IP || 8080, () => console.log("yelpcamp server has sarted"));
