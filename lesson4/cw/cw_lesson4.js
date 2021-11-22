//- створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
function minNum(a, b, c) {
    if (a < b && a < c){console.log(a)}else if (b < a && b < c){console.log(b)}else{console.log(c)}
}
minNum(67, 33, 25)

//- створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
function maxNum(a, b, c) {
    if (a > b && a > c){console.log(a)}else if (b > a && b > c){console.log(b)}else{console.log(c)}
}
maxNum(112, 33, 44)

//- створити функцію яка повертає найбільше число з масиву

function maxNumAr(array) {
    let max = array[0];
    for (let number of array) {
        if (number > max) {
            max=number}
    }
        return max;
}

let ar1 = [10, 2000, 58, 40, 657];
console.log(maxNumAr(ar1));

//- створити функцію яка повертає найменьше число з масиву
function minNumAr(array) {
    let min = array[0];
    for (let number of array) {
        if (number < min) {
            min = number}
    }
    return min;
}
let ar2 = [10, 2000, 58, 40, 1];
console.log(minNumAr(ar2));

//- створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
function sumArray(numbers) {
    let sum = 0;
    for (let number of numbers) {
        sum = sum + number
    }
return sum;
}
let b = [16,3,3];
console.log(sumArray(b));

//- створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
function middleAr(numbers) {
    let sum = 0;
    for (let number of numbers) {
        sum = sum + number
    }
    return sum/numbers.length;
}
let b1 = [6,10,10];
console.log(middleAr(b1));

//- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
function minMax(nums) {
    let min = nums[0];
    let max = nums[0];
    for (let num of nums) {
        if (num<min) {
            min = num;
        }
        if (num > max) {
            max = num;
        }
    }
    console.log(max);
    return min;
}
let c = [2,3,5,6];
minMax(c);
console.log(minMax(c));

//- створити функцію яка заповнює масив рандомними числами
//(цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
function randomArr(element) {
    for (let i = 0; i < 5; i++) {
        element[i] = Math.round(Math.random()*100);
    }
    return element;
}

//- створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
function randomArrLimit(length, limit) {
    let emptiArr = [];
    for (let i = 0; i < length; i++) {
        emptiArr.push(Math.round(Math.random()*limit));
    }
    return emptiArr;
}
document.write(randomArrLimit(3, 30));

//- Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
function reversArr(array) {
    let newArr = [];
    for (let i = array.length-1; i>=0;  i--){
        newArr.push(array[i]);
    }
    return newArr
}
    let asd = [2, 5, 5, 3, 6, 3, 9];
console.log(reversArr(asd));

