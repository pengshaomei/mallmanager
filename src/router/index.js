import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/views/login.vue'
import Home from '@/views/home.vue'
import Users from '@/views/users.vue'
import Rights from '@/views/rights.vue'
import Role from '@/views/role.vue'
import Cateparams from '@/views/cateparams'
import Goodscate from '@/views/goodscate'
import Goodslist from '@/views/goodslist'
import GoodsAdd from '@/views/goodsadd'


Vue.use(Router)

const router = new Router({
    routes: [{
        name: 'home',
        path: '/',
        component: Home,
        children: [
            { name: 'users', path: '/users', component: Users },
            { name: 'rights', path: '/rights', component: Rights },
            { name: 'roles', path: '/roles', component: Role },
            { name: 'cateparams', path: '/params', component: Cateparams },
            { name: 'goodscate', path: '/categories', component: Goodscate },
            { name: 'goodslist', path: '/goods', component: Goodslist },
            {
                name: 'goodsadd',
                path: '/goods/add',
                component: GoodsAdd
            }
        ]
    }, {
        name: 'login',
        path: '/login',
        component: Login
    }]
});

// 导航守卫
router.beforeEach((to, from, next) => {
    if (to.path === '/login') {
        next();
    } else {
        const token = sessionStorage.getItem('token');
        if (!token) {
            router.push('/login');
            return
        }
        next()
    }
});
export default router;