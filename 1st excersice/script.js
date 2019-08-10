'use strict'

let answer1 = prompt("Ваш бюджет на месяц?");
let answer2 = prompt("Введите дату в формате YYYY-MM-DD");
prompt("Введите обязательную статью расходов в этом месяце");
prompt("Во сколько обойдется?");
let answer3 = prompt("Введите обязательную статью расходов в этом месяце");
let answer4 = prompt("Во сколько обойдется?");
let money = answer1;
let time = answer2;
let appData = {
    timeData: time,
    expenses: {
        answer3 : answer4
    },
    optionalExpenses: " ",
    income: " ",
    savings: false
};
alert("Бюджет на 1 день:" + answer1/30);
console.log(money);