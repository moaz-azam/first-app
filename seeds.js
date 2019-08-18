var mongoose = require('mongoose');
var campground = require("./models/campground");

function seedDB(){
    campground.remove({}, function(err){
        if (err){
            console.log("err");
        }else {
            console.log("remove campground?");
        }
    });
}

module.exports = seedDB;
