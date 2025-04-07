// 1.1 let
// let和const
// 推荐使用let，而不是var
// 使用var存在作用域问题。一个变量不应该跳出他的作用域，否则可能存在问题。
// {
//     let a = 1;
//     var b = 2;
// }
// console.log(a);
// console.log(b);

// 1.2 重复声明
// var 可以重复声明，而let不允许
// var a = 1;
// var a = "1";
// let b = 2;
// let b = 3;

// 1.3 变量提升
// 使用 var定义变量，即使在使用之后声明的变量，也会被自动提升到使用前声明
// console.log(a);
// var a = 1;
// console.log(b);
// let b = 1;

// 2.const
// 使用const声明常量，一但声明后，变量就不可更改
// const c = 10;
// c = 5;


// 3.1 解构
// ES提供的语法糖
let arr = [1,2,3];
let x = arr[0];
let  [u, v , w] = arr;
console.log(u, v , w);

// 3.2 对象结构
let person= {
    name: "zhangsan",
    age: 18,
    sex: "male",
    tel: "1234567890",
    email: "zhangsan@gmail.com",
}
// 快速声明获取对象的属性
let {name ,age} = person
console.log(name, age)
// 方法传参也可以结构
function hh({name, age, email}){
    console.log(name, age, email)
}
hh(person);

// 4.1 链判断，安全的取出对象属性
let message = {
    body: {
        user: {
            username: 'my name'
        }
    }
};
// 传统的判断, 每个对象都可能为null，导致报错
// console.log(message.body.user.username);
// console.log((message && body && user) || 'default');
let username = message?.body?.user?.username || 'default';
console.log(username);

// 5. 参数默认值
// 建议有默认值的参数，放在参数列表的最后
function add(a,b = 5) {
    // 以前的写法
    // b = b || 10;
    return a + b;
}
console.log(add(1));

// 6. 箭头函数
// 简化方法声明的语法糖
function print(a) {
    console.log(a);
}
let print1 = function (a) {
    console.log(a);
}
let print2 = (aug) => {
    console.log(aug);
}

print2("hello => method")

let sum = (a, b) => a + b;
console.log(sum(1, 2));

// 7. 模板字符串
// 取代之前拼字符串的方式，使用${}来拼接，使用反引号声明一个模板字符串
let warning = `${person.name}登录失败，请先检查验证码是否正确`;
console.log(warning);

// 8.promise
// 代表异步对象，用于处理异步操作
// 使用fetch方法获取数据
// promise 有三种状态
// 1. 成功状态
// 2. 失败状态
// 3. 等待状态
const url = "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json";
console.log(1);
let promise = fetch(url);
promise.then(resp => {
    // console.log("响应数据", resp);
    resp.json().then(data => {
        console.log(data);
    })
}).catch(error => console.log("远程抓取失败" ,error));
console.log(2);
// 操作成功后
// promise.then();
// 操作失败后
// promise.catch();

// 自定义promise对象
// new promise((resolve, reject) => {
//     // 异步操作
//     // 操作成功后
//     resolve(data);
//     // 操作失败后
//     reject(error);
// })
// // 改造以前的JQuery请求方法
// function get(url) {
//     return new Promise((resolve, reject) => {
//         $.ajax({
//             url: url,
//             type: "GET",
//             success: function (data) {
//                 resolve(data);
//             },
//             error: function (error) {
//                 reject(error);
//             }
//         })
//
//
//     });
// }
// get(url).then(rsp => {});