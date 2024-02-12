var express = require('express');
var router = express.Router();
var collection=require('./users')

/* GET home page. */
router.post('/', function(req, res, next) {
  var {name,amount}=req.body;
  
  collection.create(
    {
      name:name,
      amount:amount
    }
  )
  res.json({
    'success':true
  })
});
router.get('/',async function(req, res, next) {
  var allData=await collection.find({})

  res.json(allData)
});
router.post('/delete', async function(req, res) {
  try {
    var itemId = req.body._id;
    console.log(itemId)
    var result = await collection.findByIdAndDelete(itemId);
    if(result){
      res.json({
        delete: true,
        complete: true
      });
    } else {
      res.json({
        delete: false,
        complete: false
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

module.exports = router;
