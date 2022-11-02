//1
// var x = 12;
// console.log(x,"Before funtion definition")
// function detail (){
//     console.log(x,"Before variable is defined");
//     var x = 10;
//     console.log(x,"After variable is defined")
// }
// console.log(x,"After funtion definition")
// detail();
// console.log(x,"After funtion call")


//Output
// 12 Before funtion definition
// 12 After funtion definition
// undefined Before variable is defined
// 10 After variable is defined
// 12 After funtion call


//2
// var x = 12;
// console.log(x,"Before funtion definition")
// function detail (){
//     console.log(x,"Before variable is defined");
//     x = 10;
//     console.log(x,"After variable is defined")
// }
// console.log(x,"After funtion definition")
// detail();
// console.log(x,"After funtion call")

//output
// 12 Before funtion definition
// 12 After funtion definition
// 12 Before variable is defined
// 10 After variable is defined
// 10 After funtion call

// let count = 0;
// (function printCount(){
//     if(count===0){
//         count = 1;
//         console.log(count);
//     }
//     console.log(count)
// })();

// for(let i=0; i<3; i++){
//     setTimeout(function log(){
//         console.log(i);
//     },1000)
// }

// function a(){
//     var x = 10;
//     function b(){
//         var y = 20;
//         console.log("x = " + x,"inside b")
//         console.log("y = " + y,"inside b")
//         //console.log("z = " + z,"inside b") not defined
//     }
//     function c(){
//         var z = 30;
//         console.log("x = " + x,"inside c")
//         //console.log("y = " + y,"inside c") not defined
//         console.log("z = " + z,"inside c")

//     }
//     b();
//     c();
//     console.log("x = " + x,"inside a")
//    // console.log("y = " + y,"inside a") not defined
//    // console.log("z = " + z,"inside a") not defined
// }
// a();



//without currying
// let sum = function(a,b,c){
//     return a+b+c;
// }
// console.log(sum(1,2,3));

//with currying
// let sum = function(a){
//     return function (b){
//         return function (c){
//             return a+b+c;
//         }
//     }
// }
// console.log(sum,"1")
// console.log(sum(),"2")
// console.log(sum(1),"3")
// console.log(sum(1)(2),"4")
// console.log(sum(1)(2)(3),"5") 

let user = {
    name:"adi",
    age: 27
}
// console.log(user)
// let res = JSON.stringify(user)
// console.log(res)
let admin ={ ad:"aditya",user}
console.log(admin)