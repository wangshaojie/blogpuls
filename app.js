//起一个node服务

const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const index = require('./server/routes/index.js');


app.use(bodyParser.urlencoded({extended:true}));


global.rootServPath = path.resolve(__dirname, 'server');
//global.appConfig = grtUtils.properties(global.rootServPath);


// view engine setup
app.set('views', path.join(__dirname, 'server','views'));
app.set('view engine', 'jade');

//设置静态文件访问路径 例子： static/1.jpg
app.use('/static', express.static('./src/assets'))

//var session = require("express-session");
//var index = require(global.rootServPath+'/routes/index');

const api = require('./server/api')

// app.get('/',function(req,res){
//   res.sendFile(path.join(__dirname + '/server/views/index.jade'));
// })



//app.use('/', report);
app.listen(8889,function(){
  console.log('服务已启动')
})


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', index);

api(app)

module.exports = app;

