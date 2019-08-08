'use strict';
let money = prompt("What is your month budget?", "12000");
let time = prompt("Введите дату в формате YYYY-MM-DD", "2019-08-08");
let expenseItem = prompt("Введите обязательную статью расходов в этом месяце", "");
let cost = prompt("Во сколько обойдется?", "");

let expenses = {
    expenseItem : cost
};
let appData = {
  "budget": money,
  "timeData": time,
  "expenses ": expenses,
  "optionalExpenses": null,
  "income": [],
  "savings": false 
};
alert("Бюджет на 1 день составляет " + appData.budget/30);