//链接数据库 建表，字段

const mongoose = require('mongoose')

const Schema = mongoose.Schema

const database = mongoose.connect('mongodb://localhost:27017/blog');



mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
mongoose.connection.once('open', function(err,db) {
  console.log('success---------------------------')
  console.log(db)
});

/*var Data = function(){

}

Data.User =  mongoose.model('User',{
  name:{type:'string'},
  password:{type:'string'}
})*/

const userSchema = new Schema({
  name: {type: String},
  password: {type: String},
})

const db = {
  // init: init,
  userModel: database.model('userModel', userSchema)
}

module.exports = db;

