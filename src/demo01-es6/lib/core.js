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