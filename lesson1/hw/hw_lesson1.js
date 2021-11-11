// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
let a1 = 'hello';
let b1 = 'owu';
let c1 = 'com';
let d1 = 'ua';
let e1 = 1;
let f1 = 10;
let g1 = -999;
let h1 = 123;
let i1 = 3.14;
let j1 = 2.7;
let k1 = 16;
let l1 = !!1;
let m1 = !!0

// Вивести кожну змінну за допомогою: console.log , alert, document.write
console.log(a1);
// alert(a1);
document.write(a1);
console.log(b1);
// alert(b1);
document.write(b1)
console.log(c1);
// alert(c1);
document.write(c1);
console.log(d1);
// alert(d1);
document.write(d1);
console.log(e1);
// alert(e1);
document.write(e1);
console.log(f1);
// alert(f1);
document.write(f1);
console.log(g1);
// alert(g1);
document.write(g1);
console.log(h1);
// alert(h1);
document.write(h1);
console.log(i1);
// alert(i1);
document.write(i1);
console.log(j1);
// alert(j1);
document.write(j1);
console.log(k1);
// alert(k1);
document.write(k1);
console.log(l1);
// alert(l1);
document.write(l1);
console.log(m1);
// alert(m1);
document.write(m1);

// - Переприсвоїти кожній змінній з завдання значення на довільне.
a1 = 'owu';
b1 = 'course';
c1 = 'in';
d1 = 'pl';
e1 = 10;
f1 = 100;
g1 = -1000;
h1 = 246;
i1 = 6.28;
j1 = 5.4;
k1 = 32;
l1 = !!10;
m1 = !!null;

// Вивести кожну змінну за допомогою: console.log , alert, document.write
console.log(a1);
// alert(a1);
document.write(a1);
console.log(b1);
// alert(b1);
document.write(b1)
console.log(c1);
// alert(c1);
document.write(c1);
console.log(d1);
// alert(d1);
document.write(d1);
console.log(e1);
// alert(e1);
document.write(e1);
console.log(f1);
// alert(f1);
document.write(f1);
console.log(g1);
// alert(g1);
document.write(g1);
console.log(h1);
// alert(h1);
document.write(h1);
console.log(i1);
// alert(i1);
document.write(i1);
console.log(j1);
// alert(j1);
document.write(j1);
console.log(k1);
// alert(k1);
document.write(k1);
console.log(l1);
// alert(l1);
document.write(l1);
console.log(m1);
// alert(m1);
document.write(m1);

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)
let firstName;
firstName = 'Pavlo';
let middleName;
middleName = 'Romanovych';
let lastName;
lastName = 'Royik';
let person = firstName+' '+middleName+' '+lastName ;
console.log(person)

// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
// let name = prompt('name');
// let middlename = prompt('middleName');
// let age = prompt('your age');

// Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
let age = 31;
console.log('Вітаю '+firstName+' '+middleName+'. Тобі '+age+' років.')

// За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
let a = 100;
console.log(typeof a);
let b = '100';
console.log(typeof b);
let c = true;
console.log(c);

// // - Визначити відповідний оператор в виразах що б вийшов відповідний результат.
// //     В однакових виразах не використовувати однакові оператори!!!
//     5 < 6 -> true
// 5 > 6 -> false
// 5 => 6 -> false
// 5 == 6 -> false
// 10 === 10 -> true
// 10 == 10 -> true
// 10 < 10 -> false
// 10 > 10 -> false
// 10 => 10 -> false
// 123 === '123' -> false
// 123 == '123' -> true

// - Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
let str = "20";
let a2 = 5;
document.write(str + a2 + "<br/>");   //205 тому, що 'str' String , a2 став String
document.write(str - a2 + "<br/>");   //15 тому, що string, порівнює праву і ліву частини та виконує дію
document.write(str * "2" + "<br/>");   //40 тому, що string, порівнює праву і ліву частини та виконує дію
document.write(str / 2 + "<br/>");     //10 тому, що string, порівнює праву і ліву частини та виконує дію