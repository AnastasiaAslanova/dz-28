/*
Спочатку ми пишемо function — це ключове слово (keyword), яке дає зрозуміти комп’ютеру, що далі буде оголошення функції.
 Потім — назву функції і список її параметрів в дужках (розділені комою). Якщо параметрів немає, ми залишаємо пусті дужки.
 І нарешті, код функції, який також називають тілом функції між фігурними дужками.
 */
/*
Існує ще один простий та короткий синтаксис для створення функцій, який часто доцільніше використовувати замість
Функціонального Виразу.
Це так звані “стрілкові функції”, а виглядають вони ось так:
let func = (arg1, arg2, ..., argN) => expression;
 */
/*
Функціональний вираз  дозволяє створювати функцію всередині будь-якого виразу.
Наприклад: let sayHi = function() {
  alert( "Привіт" );
};
 */
// ---------------------------------------------------------------------------------------------------------------------
function calkArg (){
    return arguments.length;
}

console.log(`Кількість аргументів функції ${calkArg(2,2,2,2,2,2)}`);
//----------------------------------------------------------------------------------------------------------------------

function checkNumber(num1, num2) {
    if(num1 < num2) {
        console.log(`Перше число меньше за друге${-1}`);
    }
    if(num1 > num2) {
      console.log(`Друге число меньше за перше ${1}`);
    }
    if(num1 === num2) {
        console.log(`Надані числа рівні ${0}`);
    }
}
let num1;
let num2;

while (true) {
    num1 = +prompt(`Введіть саме число для перевірки`);
    if (num1 === null) {
        continue;
    }
    if (isNaN(num1)) {
        continue;
    }
    break;
}
while (true) {
    num2 = +prompt(`Введіть саме число для перевірки`);
    if (num2 === null) {
        continue;
    }
    if (isNaN(num2)) {
        continue;
    }
    break;
}

checkNumber(num1, num2);
//----------------------------------------------------------------------------------------------------------------------
function factorial(n) {
    return n ? n * factorial(n - 1) : 1;
}
let fac;
while (true) {
    fac = +prompt(`Введіть число для вирахування факторіалу`);
    if (fac === null) {
        continue;
    }
    if (isNaN(fac)) {
        continue;
    }
    if(fac < 0) {
        alert(`Введіть позитивне число`);
        continue;
    }
    break;
}
console.log(`Факторіал числа ${factorial(fac)}`);
//----------------------------------------------------------------------------------------------------------------------

function spliteNumber(numUser1, numUser2 ,numUser3) {
    numUser1 = numUser1.toString();
    numUser2 = numUser2.toString();
    numUser3 = numUser3.toString();
    return  numUser1+numUser2+numUser3;
}
let numUser1;
let numUser2;
let numUser3;

while (true) {
    numUser1 = +prompt(`Давайте збиремо циври, наче вагончики. Ввведіть перше число`);
    if (numUser1 === null) {
        continue;
    }
    if (isNaN(numUser1)) {
        continue;
    }
    break;
}

while (true) {
    numUser2 = +prompt(`Ввведіть друге число`);
    if (numUser2 === null) {
        continue;
    }
    if (isNaN(numUser2)) {
        continue;
    }
    break;
}

while (true) {
    numUser3 = +prompt(`Ввведіть третє число`);
    if (numUser3 === null) {
        continue;
    }
    if (isNaN(numUser3)) {
        continue;
    }
    break;
}
console.log(`Число що вийшло з тих що нам надали ${spliteNumber(numUser1, numUser2, numUser3)}`);
// ---------------------------------------------------------------------------------------------------------------------

function calkArea (length, width = length) {
    return length * width;
}
let length;
let width;
while (true) {
    length = +prompt(`Введіть довжину прямокутника`);
    if (length === null) {
        continue;
    }
    if (isNaN(length)) {
        continue;
    }
    if (length < 0) {
        alert(`Довжина не може бути негативним числом!`);
        continue;
    }
    if (length === 0) {
        alert(`Довжина завжди більша за нуль!`);
        continue;
    }
    break;
}
while (true) {
    width = +prompt(`Введіть ширину прямокутника`);
    if (width === null) {
        continue;
    }
    if (isNaN(width)) {
        continue;
    }
    if (width < 0) {
        alert(`Ширина не може бути негативним числом!`);
        continue;
    }
    if (width === 0) {
        alert(`Ширина завжди більша за нуль!`);
        continue;
    }
    break;
}
console.log(`Площа прямокутника ${calkArea(length, width)}`);