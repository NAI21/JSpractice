'use strict'

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD");

    while(isNaN(money) || money == ' ' || money == null) {
        money = +prompt("Ваш бюджет на месяц?");

    }
}

start();

let appData = {
    budjet : money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function() {
        for (let i=0; i< 2; i++){
            let a = prompt("Введите обязательную статью расходов в этом месяце"),
                b = prompt("Во сколько обойдется?");
            if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null 
            && a != '' && b != '' && a.length < 50) {
                appData.expenses[a] = b;
                } else {
                    i--;
                }
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budjet / 30).toFixed();
        alert("Бюджет на 1 день:" + appData.moneyPerDay);
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка");
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент");
    
            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        for (let i=0; i< 3; i++){
            let a = prompt("Статья необязательных расходов?");
            if ((typeof(a)) === 'string' && (typeof(a)) != null
             && a != '' && a.length < 50) {
                appData.optionalExpenses[i+1] = a;
                } else {
                    i--;
                }
        }
    },
    chooseIncome: function() {
        for (let i=0; i<1;i++) {  
            let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');      
            if ((typeof(items)) === 'string' && (typeof(items)) != null && items != '') {
            appData.income = items.split(', ');
        } else {
            i--;
        }
    } 
        appData.income.push(prompt('Может что-то еще?'));
        appData.income.sort();
        appData.income.forEach((item,i) => alert(`Способы доп. заработка: ${i+1} - ${item}`));
    }
};
let list = function(arr) {
    for (let item in arr) {
        alert(`Наша программа включает в себя данные: ${item}`);
    }
}

list(appData);
// appData.chooseExpenses();

// appData.detectDayBudget();

// appData.detectLevel();

// appData.checkSavings();

// appData.chooseOptExpenses();


// 
//////////Use while//////////
// 
// let i=0;
// while (i< 2) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце"),
//         b = prompt("Во сколько обойдется?");
//     if ((typeof(a)) === 'string' && (typeof(a)) != null 
//     && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
//     appData.expenses[a] = b;
//     } else {
//         i--;
//     }
//     i++;
// }
// 
//////////Use do while//////////
// 
// let i=0;
// do {
//     let a = prompt("Введите обязательную статью расходов в этом месяце"),
//         b = prompt("Во сколько обойдется?");
//     if ((typeof(a)) === 'string' && (typeof(a)) != null && 
//     (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
//     appData.expenses[a] = b;
//     } else {
//         i--;
//     }
//     i++;
// } 
// while (i<2);