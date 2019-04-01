var express = require('express');
var router = express.Router();
var mongo=require('mongodb-curd');

var db="lmj";
var week="zk";

/* GET home page. */
router.get('/getData', function(req, res, next) {
 mongo.find(db,week,{},function(result){
   if(!result){
     res.json({code:0,msg:"查询失败"})
   }else{
      res.json({code:1,msg:"查询成功",data:result})
   }
 })
});  //渲染


router.get('/getUsr', function(req, res, next) {
 mongo.find(db,week,{},function(result){
   if(!result){
     res.json({code:0,msg:"查询失败"})
   }else{
      res.json({code:1,msg:"查询成功",data:result})
   }
 })
});
module.exports = router;
