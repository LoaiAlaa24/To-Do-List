var express = require('express');
var jwt = require('jsonwebtoken');
var sLinkCtrl = require('../controllers/user.controller');

var router = express.Router();

//------------------------------- User Routes---------------------------------
router.post('/user/login',  sLinkCtrl.login);
router.get('/user/getToDo/:username', sLinkCtrl.getToDo);
router.post('/user/postToDo', sLinkCtrl.postToDo);
router.patch('/user/doneToDo', sLinkCtrl.doneToDo);


module.exports = router;
