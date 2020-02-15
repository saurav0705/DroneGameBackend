var express = require('express');
var router = express.Router();
var Mission = require('../models/mission');

var bodyParser = require('body-parser');

router.use(bodyParser.json());

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/mission',(req,res,next)=>{
  res.statusCode=200;
  res.setHeader('Content-type','application/json');
  Mission.create(req.body)
  .then((mission)=>{
    res.json({'status':'ok','mission':mission});
  },(err)=>next(err))
  .catch((err)=>next(err));  
})

router.get('/mission',(req,res,next)=>{
  res.statusCode=200;
  res.setHeader('Content-type','application/json');
  Mission.find({})
  .then((missions)=>{
    res.json({'status':'ok','mission':missions});
  },(err)=>next(err))
  .catch((err)=>next(err));

  
})

module.exports = router;
