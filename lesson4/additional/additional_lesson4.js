//- створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.

function f(a, b) {
    if (b===undefined){
        document.write(a)
    }else {document.write(a, b)}
}
f(3, 'kjik')

//- створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//    EXAMPLE:
//[1,2,3,4]
//    [2,3,4,5]
//результат
//    [3,5,7,9]

function sumArr(arrA, arrB) {
    let arrNew = [];
    for (let i = 0, j = 0; i < arrA.length, j< arrB.length; i++, j++) {
        let arrNew = arrA[i]+arrB[j];
    document.write(`<div>${arrNew}</div>`)
    }
}
sumArr([2, 11, 6, 9], [6, 8, 5, 565])

//- Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
//EXAMPLE:
//    [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

a = [{name: 'Dima', age: 13}, {model: 'Camry'}];

function keyArr(arr) {
    let keys = [];
    for (let i = 0; i < arr.length; i++) {
        for (let key in arr[i]) {
           keys.push(key)
        }
    }
        return keys
}
console.log(keyArr(a))

//- Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
//EXAMPLE:
//    [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

function keyArrAll(arr) {
    let keys = [];
    for (let arrElement of arr) {
        for (let arrElementKey in arrElement) {
            keys.push(arrElement[arrElementKey]);
        }
    }
    console.log(keys)
    }

keyArrAll(a)