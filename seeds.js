var mongoose = require('mongoose');
var campground = require("./models/campground");
var comment = require("./models/comments");

var data = [
    {
        name: "hunza",
        image: "https://images.unsplash.com/photo-1564435150-149bb1667a60?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        description: "jkcdvsjvsjkzscjcjksckjskkskjsk"
    },
    {
        name: "karachi",
        image: "https://images.unsplash.com/photo-1564425230164-1e63b4922d3f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        description: "jkcdvsjvsjkzscjcjksckjskkskjsk"
    },
    {
        name: "hunza",
        image: "https://images.unsplash.com/photo-1564574662330-73fb2940ff5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        description: "jkcdvsjvsjkzscjcjksckjskkskjsk"
    },
]

function seedDB(){
    campground.remove({}, function(err){
        if (err){
            console.log("err");
        }else {
            console.log("remove campground?");
        }
        data.forEach(function(seed){
                campground.create(seed, function(err,  campground){
                    if (err){
                        console.log("err");
                    } else {
                        console.log("added campground");
                        comment.create(
                            {
                                text: "kvdvdvkkvjdvkjbvjavkvkvjhbkdvkavkakjvjkvshvhvhabvkxiweufweii",
                                author: "baby",
                            }, function(err, comment){
                                if (err){
                                    console.log("err");
                                } else {
                                    campground.comments.push(comment);
                                    campground.save();
                                }
                            });
                    }
                });
        });
    });
}

module.exports = seedDB;
