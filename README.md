# blogpuls
===================

实现一个简单的blog

----------


1.启动数据库mongod
	Ps：为了玩docker，就用了下docker
	在docker上安装mongo看 http://www.jianshu.com/p/43f6c29d2cd8

	# 进入mongo容器，其中‘mongo-server'是mongo容器别名
	docker exec -it mongo-server bash
	# 启动mongo服务
	mongod 



2.后台（node）服务开启
node app

3.前端（vue）服务启动
  npm run dev


Documents
-------------

vue使用axios post传data时json数据格式问题

var params = new URLSearchParams();
params.append('param1', 'value1');
params.append('param2', 'value2');
axios.post('/foo', params);

参考 ： https://segmentfault.com/q/1010000008763077/a-1020000008763397

