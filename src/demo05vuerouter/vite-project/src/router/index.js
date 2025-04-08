import Home from "../components/views/Home.vue";
import Hello from "../components/views/Hello.vue";
// 都可以导入组件，但是这种形式是懒加载的形式，可以减少初始化页面加载时间
import {createRouter, createWebHashHistory, createWebHistory} from "vue-router";
import User from "../components/users/User.vue";
import UserProfile from "../components/users/UserProfile.vue";
import UserPosts from "../components/users/UserPosts.vue";

// 1.定义路由表
const routes = [
    {path: "/", component: Home},
    {path: "/Hello", name: "Hello", component: Hello},
    // 使用路径参数，跳转时传递数据
    {
        path: "/HaHa/:id/:name/:age",
        name: "Haha",
        component: () => import("../components/views/HaHa.vue")},
    // 路由嵌套
    {
        path: "/user/:id",
        component: User,
        name: "User",
        children: [
            {path: "profile", component: UserProfile, name: "UserProfile"},
            {path: "posts", component: UserPosts},
        ]
    }
]
// 2.创建路由器
const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

router.beforeEach(async (to, from) => {
    console.log("to", to);
    console.log("from", from);


    // 1.返回true继续导航
    // 2.返回false取消导航
    // 3.返回一个'' 会被认为是一个路径，跳到该路径

    // await fetch()
    // 通常做权限验证，未登录跳转到首页登录
    if (to.path === "/hello") {
        console.log("禁止访问");
        return "/";
    }

    return true;
})


// 3.导出路由器
export default router;

// 4.vue实例使用路由器