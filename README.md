# blog

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

1.mongod运行
 直接在mondodb下运行 mongod.exe;
 在运行momgo.exe;
use blog;定义新的数据库名
show dbs； 还没真正建立起来，只是在使用
db.users.save({name:"nana",password:'123456'})  定义一个collection,名为“users”,然后插入数据



db.User.findOne({name: req.body.name}, function(err, doc){ User})




2.node服务开启
node app

3.vue 执行  在blog下
  npm run dev


4,vue使用axios post传data时json数据格式问题

var params = new URLSearchParams();
params.append('param1', 'value1');
params.append('param2', 'value2');
axios.post('/foo', params);

参考 ： https://segmentfault.com/q/1010000008763077/a-1020000008763397

