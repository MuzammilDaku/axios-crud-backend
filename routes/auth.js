var express = require('express');
// const { path } = require('../app');
var path = require('path')
var router = express.Router()

router.get('/login',function(req,res){
    res.sendFile(path.join(__dirname,'../views/login.html'))
})

router.get('/signup',function(req,res){
    res.sendFile(path.join(__dirname,'../views/signup.html'))
})

module.exports = router;