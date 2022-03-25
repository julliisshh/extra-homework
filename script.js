//1) Создать переменную num со значением 266219 (тип данных число)
let num = 266219;
//2) Вывести в консоль произведение (умножение) цифр этого числа
let array = (''+ num).split('');
let product = array[0];
for (var i=1; i<array.length; ++i){
    product *= array[i];
}
//Полученный результат возвести в степень 3, используя только 1 оператор
product **= 3;
//Вывести в консоль первые 2 цифры полученного числа
let number = product.toString();
console.log(number.substring(0, 2));