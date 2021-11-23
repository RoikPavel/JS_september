//- створити функцію яка обчислює та повертає площу прямокутника висотою
let area = (a, b) => a*b;
console.log(area(3, 5));

//- створити функцію яка обчислює та повертає площу кола
let s = (r) => Math.PI * Math.pow(r,2)*2;
console.log(s(4));

//- створити функцію яка обчислює та повертає площу циліндру
let sc = (r, h) => 2 * Math.PI * r * h;
console.log(sc(2, 3));

//- створити функцію яка приймає масив та виводить кожен його елемент
let arr1 = [1, 2, 3, 4, 5];
let arrEl = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
};
arrEl(arr1);

//- створити функцію яка  створює параграф з текстом. Текст задати через аргумент
let paragraph = (text) => {document.write(`<p>${text}</p>`)};
paragraph('Hello');

//- створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let list = (text) => {
    document.write(`<ul>`)
    document.write(`<li>${text}</li>`)
    document.write(`<li>${text}</li>`)
    document.write(`<li>${text}</li>`)
    document.write(`</ul>`)
};
list('item');

//- створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

let listNum = (text, num) => {
    document.write(`<ul>`)
    for (let i = 0; i < num; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
};
listNum('menu', 2);

//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let arr2 = [1, 'string', 2===4, 4<6, 5];
let arrMix = (arr) => {
    for (let arrElement of arr) {
        document.write(`<li>${arrElement}</li>`)
    }
    document.write(`</ul>`)
    };
arrMix(arr2);

//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let userArr = ['id', 'name', 'age'];
let user = (arr) => {
    for (let arrElement of arr) {
        document.write(`<div>${arrElement}</div>`)
    }
};
user(userArr);