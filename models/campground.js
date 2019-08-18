var mongoose = require('mongoose');
var campgroundSchema = new mongoose.Schema({
 name: "string",
 image: "string",
 description: "string",
});

module.exports = mongoose.model("campground", campgroundSchema);
