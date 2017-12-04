var express = require('express');
var router = express.Router();

router.get('/edit', function(req, res, next){
	res.render('edit/edit', {title : '首页'}) 
});

module.exports = router;