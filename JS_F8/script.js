var myString = "Alo mn oi mn  ";

// 1. Length
// console.log(myString.length);

// 2. Find index
// console.log(myString.indexOf('mn'));
// console.log(myString.indexOf('mn', 6));
// console.log(myString.lastIndexOf('mn'));
// console.log(myString.search('mn'));

// 3. Cut
// console.log(myString.slice(3, 5));

// 4. Replace
// console.log(myString.replace('mn', 'alo'));
// console.log(myString.replace(/mn/g, 'alo'));

// 5. Convert to upper case
// console.log(myString.toUpperCase());

// 6. Convert to Lower case
// console.log(myString.toLowerCase());

// 7.Trim
// console.log(myString.trim());

// 8. Split
// var languages = 'Javascript, PHP, Rupy';

// console.log(languages.split(', '));

// 9. Get a character by index

// const myString2 = "Le Dat";
// console.log(myString.charAt(5));

// Number.isFinite(2 / 0); // false
// Number.isFinite(20 / 5); // true
// Number.isFinite(0 / 0); // false

// Number.isInteger(999999999); // true
// Number.isInteger(0.2);       // false
// Number.isInteger(Math.PI);   // false

// Number.parseFloat('10') // 10
// Number.parseFloat('10.00') // 10
// Number.parseFloat('238,21') // 238
// Number.parseFloat('237.22') // 237.22
// Number.parseFloat('34 56 78') // 34
// Number.parseFloat(' 37 ') // 37
// Number.parseFloat('18 is my age') // 18

// Number.parseInt('10') // 10
// Number.parseInt('10.00') // 10
// Number.parseInt('238,21') // 238
// Number.parseInt('237.22') // 237
// Number.parseInt('34 56 78') // 34
// Number.parseInt(' 37 ') // 37
// Number.parseInt('18 is my age') // 18

// var numberObject = 1234.56789;

// numberObject.toFixed(); // '1235'
// numberObject.toFixed(1); // '1234.6'
// numberObject.toFixed(6); // '1234.567890'

// (11).toString();    // '11'
// (18).toString();     // '18'
// (17.3).toString();   // '17.3'

/*
    Lam viec voi Array
    1.to string
    2.join
    3.pop
    4.push
    5.shift
    6.unshift
    7.splicing
    8.concat
    9.slicing
*/
var aString = ["abc", "def", "xyz"];
// 1.to string
// console.log(aString.toString());

// 2.join
// console.log(aString.join('-'));
// console.log(aString.indexOf('mn'));

// 3.pop
// Xoa phan tu cuoi cung
// console.log(aString.pop());
// console.log(aString.pop());
// console.log(aString);

// 4.push
// them phan tu vao cuoi
// console.log(aString.push('a'));
// console.log(aString.push('b'));
// console.log(aString);

// 5.shift

// Xoa phan tu dau mang
// console.log(aString.shift());
// console.log(aString.shift());
// console.log(aString);

// 6.unshift
// them phan tu vao dau mang
// console.log(aString.unshift('a'));
// console.log(aString.unshift('b'));
// console.log(aString);

// 7.splicing
// Xoa phan tu lua chon
// console.log(aString.splice(0, 1));

// Them phan tu vao vi tri lua chon
// console.log(aString.splice(0, 0, 'a'));

// console.log(aString);

// 8.concat
// noi mang
// var bString = ['5', '6']

// console.log(aString.concat(bString));

// 9.slicing
// cut mang tu a den b
// console.log(aString.slice(0, 2));

// Làm bài tập tại đây

// function checkExistIdol(a, b) {
//     a.join('-');
//     if (a.indexOf(b) == -1) {
//         return false;
//     } else {
//         return true;
//     }
// }
// // console.log(aString.join('-'));
// // console.log(aString.indexOf('mn'));
// checkExistIdol(['Nguyen Van A', 'Tran Van B'], 'Megu Fujiure')

// Object
// var myInfo = {
//     name: 'Le dat',
//     age: 22,
//     address: 'Ha noi',
//     getName: function () {
//         return this.name;
//     }
// };

// // function:phuong thuc
// // others: thuoc tinh
// myInfo.email = 'ledat241299@gmail.com';
// console.log(myInfo.getName());

// object constructor

// function User(firstName, lastName, avatar) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.avatar = avatar;
// }
// var author = new User('Dat', 'Le', 'Avatar1');
// var user = new User('Pham', 'Tieu', 'Avatar2');
// author.title = 'Alo mn oi';
// user.comment = 'Comment dao';
// User.prototype.className="F8";
// User.prototype.getClassName = function(){
//     return this.className;
// }

// console.log(author);
// console.log(user.className);

// Doi tuong date

// var date = new Date();
// var year = date.getFullYear();
// var month = date.getMonth()+1;
// var day = date.getDate();

// console.log(`${day}/${month}/${year}`);

// Cau lenh re nhanh - If else

// var date = 2;

// if(date===2){
//     console.log('Hom nay la thu 2');
// }else if(date===3){
//     console.log('Hom nay la thu 3');
// }else if(date===4){
//     console.log('Hom nay la thu 4');
// }else{
//     console.log('Khong biet')
// }

// Switch
// var date = 9;

// switch(date){
//     case 2 :
//         console.log('Hom nay la thu 2');
//         break;
//     case 3 :
//         console.log('Hom nay la thu 3');
//         break;
//     case 4 :
//         console.log('Hom nay la thu 4');
//         break;
//     default:
//         console.log('Khong biet');
// }

// Toan tu 3 ngoi

// var course = {
//     name:'Javascript',
//     coin:0
// };

// if(course.coin>0){
//     console.log(`${course.coin} Coins`);
// }else{
//     console.log('Mien phi')
// }

// result = course.coin>0 ? `${course.coin} Coins` : 'Mien phi';

// console.log(result);

// function run(a) {
//     if(Number.isInteger(a)){
//         return a;
//     }else{
//         return parseInt(a);
//     }
// }

// console.log(run(7.2));

// For loop

// var myArray = [
//     'Javascript',
//     'PHP',
//     'Java'
// ];

// console.log(myArray[0]);

// for (var i =1; i<=1000; i++){
//     console.log(i);
// }

// var myInfo = {
//     name: 'Le dat',
//     age: 22,
//     address: 'Ha noi',

// };

// for (var value of Object.values(myInfo)){
//     console.log(value);
// }

// var myArray = [
//     [1,2],
//     [3,4],
//     [5,6]
// ];

// for (var i=0; i<myArray.length;i++){
//     for (var j = 0; j<myArray[i].length;j++){
//         console.log(myArray[i][j]);
//     }
// }

/**
 * forEach()
 * every()
 * some()
 * find()
 */

// var courses = [
//     {
//         id:1,
//         name:'Javascript',
//         coin:1
//     },
//     {
//         id:2,
//         name:'HTML,CSS',
//         coin:1
//     },
//     {
//         id:3,
//         name:'Ruby',
//         coin:0
//     },
//     {
//         id:4,
//         name:'PHP',
//         coin:0
//     },
//     {
//         id:5,
//         name:'Ruby',
//         coin:1
//     }
// ];

// Duyet tat ca
// courses.forEach(function(course,index){
//     console.log(index, course);
// });

// Dung de kiem tra tat ca phan tu trong mang deu phai dung
// var isFree = courses.every(function(course,index){
//     console.log(index)
//     return course.coin===0;
// });

// console.log(isFree);

// Chi can 1 phan tu trong mang dung
// var isFree = courses.some(function(course,index){
//     console.log(index)
//     return course.coin===0;
// });

// Tim m kiem dau tien
// var listCourse = courses.find(function(course,index){
//     return course.name==='Ruby';
// });
// Tim kiem tat ca trong mang
// var listCourse = courses.filter(function(course,index){
//     return course.name==='Ruby';
// });

// console.log(listCourse);

// Bai 1
// var formValues= [
//     { field: 'name', value: 'Sơn Đặng' },
//     { field: 'age', value: 18 },
//     { field: 'address', value: 'Hà Nội' },
// ]

// function getRequestBodyFromValues(formValues) {

//     var list={};
//     formValues.forEach(function(item){
//         list[item.field] = item.value;
//     });
//     return list;
// }

// Bai 2
// var numbers= [1,2,3]
// function checkPositiveNumbers(numbers) {

//     check = numbers.every(function(item){
//         return item>0;
//     });
//     return check;
// }

// console.log(checkPositiveNumbers(numbers));

// var monsters=[
//     {
//         name: 'Cá heo',
//         attack: 150,
//         speed: 100,
//         hitpoint: 100,
//     },
//     {
//         name: 'Khủng long',
//         attack: 100,
//         speed: 80,
//         hitpoint: 180,
//     },
// ]

// function findAMonsterByAttack(monsters) {

//     check = monsters.find(function(monster,index){
//         return monster.attack===150;
//     });

//     if(check){
//         return check;
//     }else{
//         return null;
//     }
// }
// console.log(findAMonsterByAttack(monsters));

// Làm bài tập tại đây

// var keyword = 'PHP';
// var strings = ['Javascript', 'PHP']
// function findStringsInArrayByKeyword(keyword, strings) {

//     var list = strings.filter(function(item){
//         return item.indexOf(keyword) != -1;
//     });
//     return list;
// }

// console.log(findStringsInArrayByKeyword(keyword,strings));

// var courses = [
//     {
//         id:1,
//         name:'Javascript',
//         coin:1
//     },
//     {
//         id:2,
//         name:'HTML,CSS',
//         coin:1
//     },
//     {
//         id:3,
//         name:'Ruby',
//         coin:0
//     },
//     {
//         id:4,
//         name:'PHP',
//         coin:0
//     },
//     {
//         id:5,
//         name:'Ruby',
//         coin:1
//     }
// ];

// var newCourse = courses.map(function(course,index,originArray){
//     return {
//         id: course.id,
//         name:`Khoa hoc:${course.name}`,
//         coin: course.coin,
//         coinText: `Gia: ${course.coin}`,
//         index: index,
//         originArray: courses,
//     }
// });

// console.log(newCourse);
// var inputs = [1, 20, -8, 0, 16];
// function convertToBoolean(inputs) {

//     var newInput = inputs.map(function(input){
//         return (input).toString();
//     });
//     return newInput;
// }

// console.log(convertToBoolean(inputs));

// var courses = [
//     {
//         id:1,
//         name:'Javascript',
//         coin:100
//     },
//     {
//         id:2,
//         name:'HTML,CSS',
//         coin:150
//     },
//     {
//         id:3,
//         name:'Ruby',
//         coin:200
//     },
//     {
//         id:4,
//         name:'PHP',
//         coin:100
//     },
//     {
//         id:5,
//         name:'Ruby',
//         coin:120
//     }
// ];

// var i=0;
// function coinHandler(accumulator, currentValue, currentIndex, originArray){
//     i++;
//     var total = accumulator + currentValue.coin;

//     console.table({
//         'Luot chay: ': i,
//         'Bien tich tru: ': accumulator,
//         'Gia tri khoa hoc: ': currentValue.coin,
//         'Tich tru duoc: ': total,
//         currentIndex,originArray
//     });
//     return total;
// }

// var totalCoin = courses.reduce(coinHandler,0);

// console.log(totalCoin);

// var inputs =[1, 2, function() {}, NaN];

// function sumNumbers(inputs) {
//     function numberHandler (accumulator, currentValue) {
//         if(typeof currentValue ==='number' && isNaN(currentValue) ===false){
//             return accumulator + currentValue;
//         }else{
//             return accumulator;
//         }
//     }
//     var totalNumber = inputs.reduce(numberHandler, 0);
//     return totalNumber ;
// }

// console.log(sumNumbers(inputs));

// var courses = [
//     {
//         id:1,
//         name:'Javascript',
//         coin:100
//     },
//     {
//         id:2,
//         name:'HTML,CSS',
//         coin:150
//     },
//     {
//         id:3,
//         name:'Ruby',
//         coin:200
//     },
//     {
//         id:4,
//         name:'PHP',
//         coin:100
//     },
//     {
//         id:5,
//         name:'Ruby',
//         coin:120
//     }
// ];

// var i = 0;

// var totalCoin = courses.reduce(function(total, course){
//     i++;

//     console.log(i,total,course);

//     return total + course.coin;
// },0);

// var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];

// var flatArray = depthArray.reduce(function(flatOutput, depthItem){
//     return flatOutput.concat(depthItem);
// },[]);

// console.log(flatArray);
// Tao phuong thuc reduce
// Array.prototype.reduce2 = function(callback,result){
//     let i=0
//     if(arguments.length<2) {
//         i=1
//         result = this[0]
//     }

//     for(; i < this.length; i++) {
//         result = callback(result, this[i],i,this)
//     }
//     return result
// }

// const numbers = [1, 2, 3, 4, 5, 6];

// const result =numbers.reduce((total, number) =>{
//     return total + number;
// },10);
// console.log(result);

// var title = 'Responsive web design';

// Tim kiem trong string va Array voi includes

// console.log(title.includes('Res'));

// const input = 'Học lập trình tại F8';

// function run(input) {
//     return input.includes('F8');
// }

// console.log(run(input))

/*
Math object
Math.PI
Math.round
Math.abs
Math.ceil
Math.floor
Math.random
Math.min
Math.max
 */

// console.log(Math.PI);
// console.log(Math.round(3.68)); //Lam tron
// console.log(Math.abs(-4)); //LAy gia tri tuyet doi
// console.log(Math.ceil(4.11)); //Lam tron tren
// console.log(Math.floor(4.999)); //Lam tron duoi
// console.log(Math.random());
// console.log(Math.min(1,5,9));
// console.log(Math.max(1,5,9));

// Call back

// function myFunction(param){
//     param('Hoc lap trinh')
// }

// function myCallback(value){
//     console.log('Value:',value);
// }

// myFunction(myCallback);

var courses = ["Javascript", "PHP", "Ruby"];

courses.map(function (course) {
    console.log(course);
});

// reduce2

// Array.prototype.reduce2 = function(callback,result){
//     let i=0
//     if(arguments.length<2) {
//         i=1
//         result = this[0]
//     }

//     for(; i < this.length; i++) {
//         result = callback(result, this[i],i,this)
//     }
//     return result
// }

// const numbers = [1, 2, 3, 4, 5, 6];

// const result =numbers.reduce((total, number) =>{
//     return total + number;
// },20);
// console.log(result);

// Array.prototype.map2 = function (callback) {
//     let newArr = [];
//     for (let i = 0; i < this.length; i++) {
//         newArr[i] = callback(this[i], i, this);
//     }
//     return newArr;
// };
// var domain = [2, 3, 4];

// console.log(
//     domain.map((item) => {
//         return item * 2;
//     })
// );

// Array.prototype.filter2 = function (callback) {
//     let newArr = [];
//     for (let i = 0; i < this.length; i++) {
//         if (callback(this[i], i, this)) {
//             newArr.push(this[i]);
//         }
//     }
//     return newArr;
// };
// var numbers = [5, 10, 20, 22, 60, 75, 90];

// var new_numbers = numbers.filter(function (item) {
//     return item % 2 == 0;
// });

// console.log(new_numbers);
// Array.prototype.find2 = function (callback) {
//     for (let i = 0; i < this.length; i++) {
//         if (callback(this[i], i, this)) {
//             return this[i];
//         }
//         console.log(i);
//     }
// };
// const ages = [3, 10, 28, 20];

// function checkAge(age) {
//     return age > 20;
// }

// let age = ages.find2(checkAge);
// console.log(age); // 28
// Array.prototype.some2 = function (callback) {
//     for (let i = 0; i < this.length; i++) {
//         if (callback(this[i], i, this)) return true;
//     }
//     return false;
// };

// Array.prototype.every2 = function (callback) {
//     for (let i = 0; i < this.length; i++) {
//         if (!callback(this[i], i, this)) return false;
//     }
//     return true;
// }; // Code hết luôn cho hiểu ae ạ
