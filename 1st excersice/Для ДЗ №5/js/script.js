'use strict'
let menuItem = document.getElementsByClassName('menu-item'),
    menu = document.querySelector('.menu'),
    title = document.getElementById('title'),
    adv = document.getElementsByClassName('adv'),
    column = document.querySelectorAll('.column'),
    mess = document.getElementById('prompt');


menu.insertBefore(menuItem[2] ,menuItem[1]);
document.body.style.background = "url('img/apple_true.jpg') center no-repeat";
title.textContent ='Мы продаем только подлинную технику Apple';
column[1].removeChild(adv[0]);
mess.textContent = prompt('Ваше отношение к технике apple?');
console.log(menuItem[2]);