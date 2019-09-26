'use strict'
let startMesuringBtn = document.getElementById('start'),
    budgetValue = document.querySelector('.budget-value'),
    dayBudgetValue = document.querySelector('.daybudget-value'),
    expensesValue = document.querySelector('.expenses-value'),
    optionalExpensesValue = document.querySelector('.optionalexpenses-value'),
    monthSavingsValue = document.querySelector('.monthsavings-value'),
    yearSavingsValue = document.querySelector('.yearsavings-value'),
    expensesItemInput = document.getElementsByClassName('expenses-item'),
    btn = document.querySelectorAll('button'),
    approveBtn1 = btn[0],
    approveBtn2 = btn[1],
    calculateBtn = btn[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    chooseIncome = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('.checksavings'),
    chooseSum = document.querySelector('.choose-sum'),
    choosePercent = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value'),
    logo = document.querySelector('.title'),
    levelValue = document.querySelector(".level-value"),
    incomeValue = document.querySelector(".income-value");

    let money, time;

    function btnProblem(a, b) {
        btn.forEach(function(item, i, btns){
            item.disabled = a;
            item.style.color = b;
            }); 
    }

    function beforeEverething() {
        btnProblem(true, "gray");
        startMesuringBtn.disabled = false; 
        startMesuringBtn.style.color = "white";

    }
    
    beforeEverething();

    startMesuringBtn.addEventListener('click', function() {
        btnProblem(false, "white");
        time = prompt("Введите дату в формате YYYY-MM-DD");
        money = +prompt("Ваш бюджет на месяц?");

        while(isNaN(money) || money == ' ' || money == null) {
            money = +prompt("Ваш бюджет на месяц?");
    
        }
        appData.budjet = money;
        appData.timeData = time;
        budgetValue.textContent = money.toFixed();
        yearValue.value = new Date(Date.parse(time)).getFullYear();
        monthValue.value = new Date(Date.parse(time)).getMonth()+1;
        dayValue.value = new Date(Date.parse(time)).getDate();
    });
    
    approveBtn1.addEventListener('click', function() {
        let sum = 0;
        for (let i=0; i< expensesItemInput.length; i++){
            let a = expensesItemInput[i].value,
                b = expensesItemInput[++i].value;
            if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null 
            && a != '' && b != '' && a.length < 50) {
                appData.expenses[a] = b;
                sum += +b;
                } else {
                    i--;
                }
        }
        expensesValue.textContent = sum;
    });

    approveBtn2.addEventListener('click', function() {
        let sum = 0;
        for (let i=0; i< optionalExpensesItem.length; i++){
            let opt = optionalExpensesItem[i].value;
                appData.optionalExpenses[i] = opt;
                optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
        }
    });

    calculateBtn.addEventListener('click', function() {
        if (appData.budjet != undefined) {
            appData.moneyPerDay = ((appData.budjet - expensesValue.textContent) / 30).toFixed();
        dayBudgetValue.textContent = appData.moneyPerDay;
        
        if (appData.moneyPerDay < 100) {
            levelValue.textContent = "Минимальный уровень достатка";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = "Средний уровень достатка";
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = "Высокий уровень достатка";
        } 
        } else {
            dayBudgetValue.textContent = "Произошла ошибка";
        }
        
    });

    chooseIncome.addEventListener('input', function() {
            let items = chooseIncome.value;      
            appData.income = items.split(', ');
            incomeValue.textContent = appData.income;
    });

    checkSavings.addEventListener('click', function() {
        if (appData.savings == true) {
            appData.savings = false;
        } else {
            appData.savings = true;

        }
    });

    chooseSum.addEventListener('input', function() {
        if (appData.savings == true) {
            let sum = chooseSum.value,
                percent = choosePercent.value;
            appData.monthIncome = sum/100/12*percent;
            appData.yearIncome = sum/100*percent;
            monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
            yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
        }
    });

    choosePercent.addEventListener('input', function() {
        if (appData.savings == true) {
            let sum = chooseSum.value,
                percent = choosePercent.value;
            appData.monthIncome = sum/100/12*percent;
            appData.yearIncome = sum/100*percent;
            monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
            yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
        }
    });

    let appData = {
        budjet : money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: false
    };