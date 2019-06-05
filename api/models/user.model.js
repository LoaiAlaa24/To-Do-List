var mongoose = require('mongoose');
var renameIdPlugin = require('mongoose-rename-id');
 

var userSchema = mongoose.Schema({
  username: {
    type: Object,
    unique:true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  toDoList:{

    type:Array

  }
});
mongoose.model('User', userSchema);
