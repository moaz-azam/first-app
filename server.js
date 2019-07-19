var express = require('express');
var app = express();

app.use(express.static("public"))

app.get("/", function(req, res){
 res.send("hi tere");
});


app.listen(process.env.PORT || 8080, () => console.log("all is ok"))
