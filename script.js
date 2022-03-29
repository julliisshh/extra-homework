'use strict';

let someString = prompt("Введите любую строку", "Поешь еще этих мягких французских булок");

const someFunct = function(str){
    if (typeof (str) != 'string'){
     return "Введите строковое значение";
 } else{
     str = str.trim();
     if (str.length > 30){
         return (str.substring(0,30) + '...');
     } else{
         return str;
     }
 }
};

console.log(someFunct(someString));