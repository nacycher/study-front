import axios from "axios";
// 使用axios创建固定的请求地址
const http = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    // timeout: 1000,
    timeout: 1, // 模拟超时
    headers: {'X-Custom-Header': 'foobar'}
})

// 添加请求拦截器
http.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    console.log("请求错误",error);
    return Promise.reject(error);
})

// 添加响应拦截器
http.interceptors.request.use(function (response) {
    // 返回拦截器加工的data数据
    return response;
}, function (error) {
    console.log("响应错误",error);
    return Promise.reject(error);
})

export default http;