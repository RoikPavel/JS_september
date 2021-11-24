//- створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
let min = (a, b, c) => {
    if (a < b && a < c) {
        console.log(a);
    }else if (b < a && b < c) {
        console.log(b);
    } else {
        console.log(c);
    }
};
min(8,12,6);

//- створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

let max = (a, b, c) => {
    if (a > b && a > c) {
        console.log(a);
    }else if (b > a && b > c) {
        console.log(b);
    } else {
        console.log(c);
    }
};
max(20,12,18);

//- створити функцію яка повертає найбільше число з масиву
let maxArrNum = (arr) => {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max=arr[i]
        }
    }
    return max
};
console.log(maxArrNum([22, 33, 44, 55, 66, 77]));

//- створити функцію яка повертає найменьше число з масиву

let minArrNum = (arr) => {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min=arr[i]
        }
    }
    return min
};
console.log(minArrNum([11, 22, 33, 44, 55, 66, 77]));

//- створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let sumArrEl = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum+arr[i]
    }
    return sum;
};
console.log(sumArrEl([1,2,10]));

//- створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

let middleArr = (arr) => {
    let middle = 0;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
        middle = sum / (i+1);
    }

    return middle;
};
console.log(middleArr([10,20,60]));

//- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
let minMax = (num) => {
    let min = 0;
    let max = 0;
    for (let i = 0; i < num.length; i++) {
        if (min > num[i]) {
            min = num[i]
        }
        if (max < num[i]) {
            max = num[i];
        }}
        document.write(max);
        return min;
};
console.log(minMax([13, 15, -23, 66, 33, -35]));

//- створити функцію яка заповнює масив рандомними числами
//(цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
let randomArr = () => {
    let newArr = [];
    for (let i = 0; i < 15; i++) {
        newArr.push(Math.round(Math.random() * 100))
    }
    return newArr;
};
console.log(randomArr());

//- створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
let randomArrLim = (limit) => {
    let newArr = [];
    for (let i = 0; i < newArr.length; i++) {
        newArr.push(Math.round(Math.random() * limit));
    }
    return newArr;
}
console.log(randomArrLim(9));

//- Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
let reversArr = (arr) => {
    let revArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        revArr.push(arr[i]);
    }
    return revArr
};
console.log(reversArr([1, 2, 3, 4, 5, 6, 7, 8]))
