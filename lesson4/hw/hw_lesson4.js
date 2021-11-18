//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function area(a, b) {
    return  a*b;
}
console.log(area(4, 5));

//- створити функцію яка обчислює та повертає площу кола з радіусом r

function areaCircle(radius) {
    return 3.14*Math.pow(radius, 2)
}
console.log(areaCircle(3));

//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function areaCylinder(h, r) {
    return  2*3.14*r*h
}
console.log(areaCylinder(3, 2));

//- створити функцію яка приймає масив та виводить кожен його елемент

let array = [1, 2, 3, 4, 6, 'hkh'];

function arrayElements(arrayName) {
    for (let i = 0; i < arrayName.length; i++) {
        let arrayElement = arrayName[i];
        console.log(`${arrayElement}`)
    }
}
arrayElements(array);

//- створити функцію яка створює параграф з текстом. Текст задати через аргумент

function paragraph(text) {
document.write(`<p>${text}</p>`)
}
paragraph('wegegewgw');

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function unordList3(text) {
    document.write(`<ul>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`</ul>`);
}
unordList3('wfwef');

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function unordList(text, liNav) {
    document.write(`<ul>`);
    for (let i=0; i<liNav; i++){
        let i = liNav;
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}
unordList('wgrgrwgt', 3);

//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

function arrayMix(arrayName) {
    document.write(`<ul>`);
    for (let i = 0; i < arrayName.length; i++) {
        let arrayNameElement = arrayName[i];
        document.write(`<li>${arrayNameElement}</li>`);
    }
    document.write(`</ul>`);
}
let array1 = [1, 'abc', true, 5<4, 567, 4!=5]
arrayMix(array1);

//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

function usersID(arrayName) {
    for (let i = 0; i < arrayName.length; i++) {
        let arrayNameElement = arrayName[i];
        for (let ElementKey in arrayNameElement) {
            document.write(`<div>${ElementKey}, ${arrayNameElement[ElementKey]}</div>`)
        }
    }
}

let array2 = [{'id' : 1, name : 'Vasya', age : 30}, {id : 2, name : 'Petya', age : 20}, {id : 3, name : 'Ira', age : 25}];

usersID(array2);




