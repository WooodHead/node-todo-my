var mongoose=require('mongoose');

var TodoSchema=mongoose.Schema({
  text:String
});

module.exports=mongoose.model('Todo',TodoSchema,'todos');
