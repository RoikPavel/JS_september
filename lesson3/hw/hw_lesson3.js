//--створити масив з:
//    - з 5 числових значень
//- з 5 стічкових значень
//- з 5 значень стрічкового, числового та булевого типу
//- та вивести його в консоль

let array = [12, 13, 14, 15, 16];
for (let i=0; i<=4; i++) {
    console.log(array[i])
}

let array1 = ['abcd', 'efg', 'hijk', 'lmnop', 'qrs'];
for (let i=0; i<=4; i++) {
    console.log(array1[i])
}

let arrayMix = [12, 'abcd', 5<6, 34, false];
for (let i=0; i<=4; i++){
console.log(arrayMix[i])
}


//-- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

let user = [];
user[0] = 'true';
user[1] = 'abc';
user[3] = 20;
user[4] = 'false';
for (let i=0; i<user.length; i++){
    console.log(`${user[i]}`)
}

//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

for (let i=0; i<11; i++){
    document.write(`<div>item_for</div>`)
}

for (let i=0; i<11; i++){
    document.write(`<div>item_for ${i}</div>`)
}

let i=0;
while (i < 20) {
    document.write(`<h1>item_while</h1>`);
    i++;
}

let a=0;
while (a < 20) {
    document.write(`<h1>item_while${a}</h1>`);
    a++;
}

//- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
//- Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
//- Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
//- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
//- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
//- Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

let arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < arrayNumbers.length; i++) {
    console.log(arrayNumbers[i])
}

let arrayString = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
for (let i = 0; i < 10; i++) {
    console.log(arrayString[i])
}

let arrayMegamix = [1, 'one', true, 22, 'two', 6!==9 , 5<6, 333, 'four', 5===0 ];
for (let i = 0; i < 10; i++) {
    console.log(arrayMegamix[i])
}

let arrayMegamix1 = [1, 'one', true, 22, 'two', 6 !== 9, 5 < 6, 333, 'four', 5 === 0];
for (let i = 0; i < 10; i++) {
    if (typeof arrayMegamix1[i] === "boolean") {
        console.log(arrayMegamix1[i])
    }
}

let arrayMegamix2 = [1, 'one', true, 22, 'two', 6 !== 9, 5 < 6, 333, 'four', 5 === 0];
for (let i = 0; i < 10; i++) {
    if (typeof arrayMegamix2[i] === "number") {
        console.log(arrayMegamix2[i])
    }
}

let arrayMegamix3 = [1, 'one', true, 22, 'two', 6 !== 9, 5 < 6, 333, 'four', 5 === 0];
for (let i = 0; i < 10; i++) {
    if (typeof arrayMegamix3[i] === "string") {
        console.log(arrayMegamix3[i])
    }
}

//- Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
//- Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
//- Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
//- Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
//- Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
//- Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

let b = [];
b[0] = 111;
b[1] = 222;
b[2] = 333;
b[3] = 'one';
b[4] = 'two';
b[5] = 'three';
b[6] = 1===1;
b[7] = 1>1;
b[8] = 1<1;
b[9] = 1!==1;
for (let i = 0; i < 10; i++) {
    console.log(b[i])
}

for (let i = 0; i < 10; i++) {
    console.log(i);
    document.write(i)
}

for (let i = 0; i < 100; i++) {
    console.log(i);
    document.write(i)
}


for (let i = 0; i <= 100; i+=2) {
    console.log(i);
    document.write(i)
}

for (let d = 0; d < 100; d++) {
    if (d % 2 === 0) {
        console.log(d);
        document.write(d);
    }

}

for (let d = 0; d < 100; d++) {
    if (d % 2 !== 0) {
        console.log(d);
        document.write(d);
    }

}

