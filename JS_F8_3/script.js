// 1. Let, Const

// 2. Template Literals
// 3. Multi-line String
// const courseName = 'Javascript';
// const description = `Course name: ${courseName}`;
// console.log(description);

// const lines = 'Line 1\n'
//     +'Line 2\n'
//     +'Line 3\n'
//     +'Line 4\n'
// console.log(lines);

// const lines = `Line1
// Line2
// Line3`
// console.log(lines);

// 4. Arrow function
// const logger = (log)=>{
//     console.log(log);
// }

// const sum = (a, b)=>{
//     return a + b;
// }

// const sum = (a, b)=>(a + b);

// const course = {
//     name: 'Course',
//     age: 30,
//     description: 'Course description',
//     getName: function(){
//         return this.age;
//     }
// }
// console.log(course.getName());

// const course = function(name, price){
//     this.names = name;
//     this.prices = price;
// }

// const jsCourse = new course('Javascript', 1000);
// console.log(jsCourse);
// 5.Classes
// const course = function(name, price){
//     this.names = name;
//     this.prices = price;
// }
// class course {
//     constructor(name, price){
//         this.name = name;
//         this.price = price;
//     }
//     getName(){
//         return this.name;
//     }
//     getPrice(){
//         return this.price;
//     }
//     run(){
//         const isSuccess = false;

//         if(...){
//             isSuccess = true;
//         }
//     }
// }

// const jsCourse = new course('Javascript', 1000);
// const phpCourse = new course('PHP', 2000);

// console.log(jsCourse);
// console.log(phpCourse);


// 6. Default parameter values

// function logger(log='Default parameter values') {
//     console.log(log); 
// }
// logger('alo');

// function logger(log, type = 'log') {
//     console[type](log);
// }

// logger('Mess','error')
// 7.Enhanced object literals
// var name = 'Javascript';
// var price = 1000;
// var course = {
//     name,
//     price,
//     getName(){
//         return name;
//     }
// }

// console.log(course.getName());
// 8. Destructuring
// var array = ['Javascript', 'PHP','Ruby'];

// var [a,b,...rest] = array;

// console.log(rest);

// var course = {
//     name:'Javascript',
//     price:1000,
//     description:'alo',
//     image:'image-address',
//     children:{
//         name:'ReactJS'
//     }
// };

// var {name: parentName, children:{name: childrenName}} = course;

// console.log(parentName);
// console.log(childrenName);

// 9. Rest parameters
// function sum(...params) {
//     console.log(params)
// }

// sum(1,2,3,4);
// 10. Spread
// var array1 =['Javascript', 'PHP;']
// var array2 =['ReactJS', 'PHP'];
// var array3 =[...array1,...array2];

// var array =['Javascript','PHP','ReactJS'];

// function logger(...rest){
//     for(var i=0; i<rest.length; i++){
//         console.log(rest[i]);
//     }
// }

// logger(...array);
// console.log(array3);
// 11. Tagged template literals
function highlight(...rest){
    console.log(rest);
}

var brand = 'F8';
var course = 'Javascript';

highlight`Hoc lap trinh ${course} tai ${brand}`;

// 12. Modules