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
var name = 'Javascript';
var price = 1000;
var course = {
    name,
    price,
    getName(){
        return name;
    }
}

console.log(course.getName());
// 8. Destructuring
// 9. Rest parameters
// 10. Spread
// 11. Tagged template literals
// 12. Modules