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
var num = 50;
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
do {
    console.log(num);
    num++;
}   
while (num < 55);

for (let i = 1; i < 8; i++) {
    if (i == 6) {
        continue;
    }
    console.log(i);
}
while (num != 12) {
    num--;
    console.log(num);
}