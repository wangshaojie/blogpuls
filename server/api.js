const db = require('./db')

module.exports = function (app) {
  app.all("*", function(req, res, next) {
    // res.writeHead(200, { "Content-Type": "text/plain" })
    // db.init(next)
    next()
  });

  //登陆接口
  app.post('/api/user/login', function (req, res) {
    // 对发来的登录数据进行验证
    if (!req.body.name) {
      res.json({code: 600, msg:'name 不能为空！'})
      return
    }
    if (!req.body.password) {
      res.json({code: 600, msg:'pwd 不能为空！'})
      return
    }
    db.User.findOne({name: req.body.name}, function(err, doc){
      if (err) {
        console.log('查询出错：' + err);
      } else {
        if (!doc) {
          res.json({code: 700, msg:'不存在该用户名：' + req.body.name})
          return
        } else {
          if (req.body.password != doc.password) {
            res.json({code: 700, msg:'密码不正确！'})
            return
          } else {
            res.json({code: 700, status:1,msg:'密码正确，登录成功',token:'3abed356b2f309294f5b91e1d23944da4409b30d'});

            return
          }
        }

      }
    })

  });
  //发表文章接口
  app.post('/api/addarticle',function(req, res){
    db.List.create({title: req.body.title,date:req.body.date,desc:req.body.desc}, function(err, doc){
      if (err) {
        console.log('查询出错：' + err);
      } else {
          if (req.body.title == '') {
            res.json({status: 0, msg:'输入标题'})
            return
          } else if(req.body.date == '') {
            res.json({status: 0, msg:'输入时间'});
            return
          }else if(req.body.desc == '') {
            res.json({status: 0, msg:'输入详情'});
            return
          }else{
            res.json({status: 1, msg:'发表成功'});
            return
          }
      }
    })
  });
  //文章列表接口
  app.get('/api/list', function (req, res) {

    db.List.find({}, function(err, doc){
      if (err) {
        console.log('查询出错：' + err);
      } else {
            res.json({status: 1, data:doc});
            return
      }
    })
  });


  app.get('*', function(req, res){
    res.end('404')
  })
}
