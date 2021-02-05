var mongoose= require('mongoose');

var Schema =mongoose.Schema;

var ContactSchema= new Schema({
name:String,
mobile:Number,
email:String,
password:String,
gender:String,
service:String,
date:Date,
time:String
});


module.exports = mongoose.model('contact',ContactSchema);