/**
 * Created by nana on 2017/8/26.
 */
var express = require('express');
var router = express.Router();
//var edit = require('./edit');

router.get('/', function(req, res, next){
	res.render('index', {title : '首页'})
});


router.get('/edit', function(req, res, next){
	res.render('edit/edit', {title : '编辑页'})
});


module.exports = router;
