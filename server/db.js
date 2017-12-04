const mongoose = require('mongoose')
const Schema = mongoose.Schema


mongoose.connect('mongodb://localhost:32768/blog')



mongoose.connection.on('error', function(error){
  console.log('数据库blog连接失败：' + error)
  return
})
mongoose.connection.once('open', function(){
  console.log('数据库blog连接成功')
  // callback()
})


//用来定义 userSchema 骨架
const userSchema = mongoose.Schema({
  name: {type: String},
  password: {type: String},
})

const listSchema = mongoose.Schema({
  title: {type: String},
  date: {type: Date,default: Date.now },
  desc: {type: String},
})



var db = {
  User : mongoose.model('users', userSchema),
  List : mongoose.model('list', listSchema),
}

module.exports = db
