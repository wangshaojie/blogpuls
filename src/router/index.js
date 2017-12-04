import Vue from 'vue'
import Router from 'vue-router'
import Login from '../pages/login.vue'
import Report from '../pages/report.vue'
import List from '../pages/list.vue'
import Detail from '../pages/detail.vue'
import index from '../pages/index.vue'

Vue.use(Router);

const routes = [
    {
      path: '',
      name: 'index',
      component: index
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/report',
      name: 'report',
      component: Report,
      meta : {
        requireAuth : true  //添加该字段，表示进入这个路由是需要登录的
      }
    },
    {
      path: '/list',
      name: 'list',
      component: List
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    },
  ];

  const router = new Router({
      routes
  });

  router.beforeEach((to, from, next) => {
    console.log(to.matched)
    if (to.matched.some(r => r.meta.requireAuth)) {
        if (localStorage.token) {
            next();
        }
        else {
            next({
                path: '/login',
                query: {redirect: to.fullPath}
            })
        }
    }
    else {
        next();
    }
  });

export default router;
