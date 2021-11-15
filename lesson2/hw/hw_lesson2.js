/*- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
(в першу, другу, третю или четверту частину години).
 */
let time = +prompt('enter Time');
if (time >= 0 && time <= 15) {
    console.log('1 quarter')
} else if (time >= 16 && time <= 30) {
    console.log('2 quarter')
} else if (time >= 31 && time <= 45) {
    console.log('3 quarter')
} else if (time >= 46 && time <= 60) {
    console.log('4 quarter')
}

//- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = +prompt('enter number');
if (day >= 1 && day <= 10) {
    console.log('1 decade')
} else if (day >= 11 && day <= 20) {
    console.log('2 decade')
} else if (day >= 21 && day <= 31) {
    console.log('3 decade')}

/*- У нас є змінна test, якщо  не дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
    Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою) */

let test = confirm('data')? 'Неправильно' : 'Вірно';
console.log(test);

let test1 = confirm('data');
if (test1===true){
    console.log('Неправильно')
}else {console.log('Вірно')}

//- Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let a = +prompt('введіть число');
if (a===0){console.log('Невірно')}else {console.log('Вірно')}

//- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.

let dayWeek = '7';
switch (dayWeek){
    case '1':
        console.log('графік понеділок');
        break;
    case '2':
        console.log('графік вівторок');
        break;
    case '3':
        console.log('графік середа');
        break;
    case '4':
        console.log('графік четвер');
        break;
    case '5':
        console.log('графік пятниця');
        break;
    case '6':
        console.log('графік субота');
        break;
    case '7':
        console.log('графік неділя');
        break;
    default:
        console.log('напишіть день тижня')
}

//- Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.

let year = +prompt('enter year');
if ((year % 4) ===0){console.log('високосний рік')}else {console.log('рік не високосний')}


//- Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
//Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!

let name = prompt('Яка «офіційна» назва JavaScript?');
if (name==='ECMAScript'){console.log('Правильно!')}else {console.log('Не знаєте? ECMAScript!')}