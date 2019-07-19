var express = require('express');
var app = express();

//app.use(express.static("public"))

app.get("/dog", function(req, res){
 res.send("hi tere");
});


app.listen(process.env.PORT ,process.env.ip || 8080, () => console.log("all is ok"));
