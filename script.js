'use strict';

// var leftBorderWidth = 1;
// let second = 2;
// const pi = 3.14;

// console.log(second);

// let person = {
//     name: "Azamat",
//     age: 23,
//     isMarried: false
// };

// console.log(person.name);

// let mas = ['apple.png', 'orange.jpg', 'peach.bpm'];
// console.log(mas[2]);
// // alert("Game Over");
// // let answer = confirm("Are you sure?");
// // console.log(answer);
// let answer = +prompt("Are you over 18", "Yes");
// console.log(typeof(answer));

// let incr = 10,
//     decr = 10;

// incr++;
// decr--;
// console.log(++incr,decr--);
// console.log(typeof(52));

// let odin = true,
//     dva = true;
// console.log(odin && dva);
// var num = 50;
// if (num < 49) {
//     console.log("Неверно!")
// } else if (num > 100) {
//     console.log("Много!")
// } else {
//     console.log("Верно!")
// }
// (num == 50) ? console.log("Верно") : console.log('Неверно');  

// switch (num) {
//     case num < 49:
//         console.log("Неверно!");
//         break;
//     case num > 100:
//         console.log("Много!");
//         break;
//     case num > 80:
//         console.log("Все еще много!");
//         break;
//     case 50:
//         console.log("Верно!");
//         break;
//     default:
//         console.log("Что-то пошло не так(((");
//         break;
// }
// do {
//     console.log(num);
//     num++;
// }   
// while (num < 55);

// for (let i = 1; i < 8; i++) {
//     if (i == 6) {
//         continue;
//     }
//     console.log(i);
// }
// while (num != 12) {
//     num--;
//     console.log(num);
// }

// function showFirstMessage (text) {
// alert(text);
// num = 12;
// }

// showFirstMessage("Fuck Off");
// console.log(num);


// let calc = function (a,b) {
//     return(a + b);
// }

// let calc = (a,b) => a +b;

// console.log(calc(3,4));
// console.log(calc(8,4));

// function retVar () {
//     let num = 50;
//     return num;
// }

// let anotherNum = retVar();
// console.log(anotherNum);

// let str = "azamat";
// // console.log(str.length);
// console.log(str[0].toUpperCase());

// let twelve = "12.2px";
// // console.log(Math.round(twelve));
// console.log(parseFloat(twelve));
// for (let char of "Hello") {
//     alert(char); // H,e,l,l,o (char — сначала "H", потом "e", потом "l" и т. д.)
//   }

// function doHomework(subject, callback) {
//     console.log(`Starting my ${subject} homework.`);
//     callback();
//   }
  
//   doHomework('math', function() {
//     console.log('Finished my homework');
//   });
// var obj = {a:1, b:2, c:3};
    
// for (var prop in obj) {
//   console.log(`obj.${prop} = ${obj[prop]}`);
// }
// let arr = [1,2,3,4,5,6];
// arr.pop();
// arr.push(6,7);
// arr.shift();
// arr.unshift("zero",1);
// console.log(arr.length);

// // for (let i=0; i<arr.length; i++) {
// //   console.log(arr[i]);
// // }

// arr.forEach(function(item, i, mass) {
//   console.log(`${i}: ${item} (массив: ${mass})`);
// });

// let mas = [1,2,3,4,5];

// for (let key of mas){
//   console.log(key);
// }

// let ans = prompt("","");
// let arr = [];
// arr = ans.split(',');
// alert(arr);

// let arr = ["aza", "mat", " super ", "macho!"];
// let i = arr.join('XY');
// console.log(i);

let arr = [3,15,6,2,24,1];
let i = arr.sort(compareNum);

function compareNum(a,b) {
return a-b;
}

console.log(arr);