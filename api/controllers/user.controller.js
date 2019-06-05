var mongoose = require('mongoose');
var moment = require('moment');
var Validations = require('../utils/validations');

var User = mongoose.model('User');

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//USER FUNCTIONS
module.exports.login = function(req, res, next) {
  User.findOne({username:req.body.username, password:req.body.password}).exec(function(err, user) {
    if (err) {
      return next(err);
    }
    if (!user) {
      var valid =
      req.body.username &&
   Validations.isString(req.body.username) &&
   req.body.password &&
   Validations.isString(req.body.password);
    
   if (!valid) {
    return res.status(422).json({
      err: null,
      msg: 'username and password are required fields.',
      data: null
    });
  }
  
  User.create(req.body, function(err, sLink) {
    if (err) {
      if (err.name === 'MongoError' && err.code === 11000) {
  
        return res.status(422).json({ err: null, msg: 'Username already exist!' , data:null });
      }
    return res.status(500).json({
      err:null,
      msg:"Other error",
      data:null
  
    })
    }if(!sLink){
  return  res.status(402).json({
        err: null,
        msg: 'Not successful',
        data: null});
      }
    else{
   return res.status(201).json({
      err: null,
      msg: '',
      data: sLink});
    }
    }
  
    );

    }

else{
    res.status(200).json({
      err: null,
      msg: 'User retrieved successfully.',
      data: user
    }); }
  });

}

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//T0DO LIST FUNCTIONS
module.exports.getToDo = function(req, res, next) {
 User.findOne({username:req.params.username}).exec(function(err, toDo) {
    if (err) {
      return next(err);
    }
    if (!toDo) {
      return res
        .status(404)
        .json({ err: null, msg: 'No list found', data: null });
    }

else{
    res.status(200).json({
      err: null,
      msg: 'List retrieved successfully.',
      data: toDo
  });

}})}

module.exports.doneToDo = function(req, res, next) {
  User.update(({username:req.body.username}),{$pull:{toDoList:req.body.item}}).exec(function(err, toDo) {
     if (err) {
       return next(err);
     }
     if (!toDo) {
       return res
         .status(404)
         .json({ err: null, msg: 'No list found', data: null });
     }
 
 else{
     res.status(200).json({
       err: null,
       msg: 'List updated successfully.',
       data: toDo
   });
 
 }})}
 

module.exports.postToDo = function(req, res, next) {
 
var valid =
req.body.dataEntered &&
Validations.isString(req.body.dataEntered);

var array=[];


if (!valid) {
return res.status(422).json({
err: null,
msg: 'data is a required field.',
data: null
});
}

User.findOne({username:req.body.username}).exec(function(err, toDo) {
if(toDo){

array=toDo.toDoList;

}

array.push(req.body.dataEntered);
console.log(array);

User.findOneAndUpdate(({username:req.body.username}),{$set:{toDoList:array}}).exec(function(err, toDo) {


  if (err) {
  
  
  return res.status(500).json({
  err:null,
  msg:"Other error",
  data:null
  
  })
  }if(!toDo){
  
  return  res.status(402).json({
    err: null,
    msg: 'Not successful',
    data: null});
  
  
  }
  else{
  return res.status(201).json({
  err: null,
  msg: 'data was created successfully.',
  data: toDo});
  }
  }
  
  );

});




}


