var express = require('express');
var app = express();

app.set("veiw engine", "ejs");

app.get("/", function(req, res){
 res.render("home");
});

app.get('*' , function(req, res ){
 res.send("you are a star");
});

app.listen(process.env.PORT ,process.env.ip || 8080, () => console.log("yelpcamp server has sarted"));
