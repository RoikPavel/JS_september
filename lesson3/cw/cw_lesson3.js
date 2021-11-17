//зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:

let arr = [2, 17, 13, 6, 22, 31, 45, 66,100, -18];

//1. перебрати його циклом while

let i=0;
while (i <= arr.length-1) {
    console.log(arr[i]);
    i++
}

//2. перебрати його циклом for

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

//3. перебрати циклом while та вивести  числа тільки з непарним індексом

let a=0;
while (a <= arr.length-1) {
    if ([a] % 2 !==0) {
        console.log(arr[a])
    }
    a++
}

//4. перебрати циклом for та вивести  числа тільки з непарним індексом

for (let i = 0; i < arr.length; i++) {
    if ([i] % 2 !==0) {
        console.log(arr[i])
    }
}

//5. перебрати циклом while та вивести  числа тільки парні  значення

let b = 0;
while (b <= arr.length-1) {
    if (arr[b] % 2 ===0) {
        console.log(arr[b])
    }
    b++
}

//6. перебрати циклом for та вивести  числа тільки парні  значення

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 ===0) {
        console.log(arr[i])
    }
}

//7. замінити кожне число кратне 3 на слово "okten"

for (let x = 0; x < arr.length; x++) {
    if (arr[x] % 3 === 0) {
        console.log(arr[x] = "okten");
    } else {
        console.log(arr[x]);
    }
}

//8. вивести масив в зворотньому порядку.

for (let c = arr.length-1; c>=0; c--) {
    console.log(arr[c])
}

//9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

for (let y = arr.length-1; y >=0; y--) {
    if (arr[y] % 3 === 0) {
        console.log(arr[y] = "okten");
    } else {
        console.log(arr[y]);
    }
}

for (let i = arr.length-1; i >=0; i--) {
    if (arr[i] % 2 ===0) {
        console.log(arr[i])
    }
}

let b1 = arr.length-1;
while (b1 >= 0) {
    if (arr[b1] % 2 ===0) {
        console.log(arr[b1])
    }
    b1--
}

for (let i = arr.length-1; i >=0; i--) {
    if (arr[i] % 2 !==0) {
        console.log(arr[i])
    }
}

let a1=arr.length-1;
while (a1 >= 0) {
    if (arr[a1] % 2 !==0) {
        console.log(arr[a1])
    }
    a1--
}

for (let i = arr.length-1; i >=0; i--) {
    console.log(arr[i])
}

let i1=arr.length-1;
while (i1 >=0) {
    console.log(arr[i1]);
    i1--
}