/*1. Створити пустий масив та :
    a. заповнити його 50 парними числами за допомоги циклу.
    b. заповнити його 50 непарними числами за допомоги циклу.
    c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)*/

let arrA = [];
for (let i = 0, j = 2; i < 50; i++, j+=2) {
    arrA[i] = j;
}
console.log(arrA);

let arrB = [];
for (let i = 0, j = 1; i < 50; i++, j+=2) {
    arrB[i] = j;
}
console.log(arrB);

let arrC = [];
for (let i = 0; i < 20; i++) {
    arrC[i] = Math.floor(Math.random()*100);
}
console.log(arrC);

let arrD = [];
for (let i = 0; i < 20; i++) {
        arrD[i] = Math.floor(Math.random()*731)+8;
    }
console.log(arrD);
