var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var videoSchema = new Schema({
   
    title : {type:String, require:true},
    url: {type:String, require:true},
    description:{type:String, require:true},
    creation_dt:{type:Date, require:true}
});



module.exports = mongoose.model('video', videoSchema, 'videos');