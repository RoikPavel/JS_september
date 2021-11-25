//- Знайти та вивести довижину настипних стрінгових значень
//'hello world', 'lorem ipsum', 'javascript is cool'
let str1  = 'hello world';
console.log(str1.length);
let str2  = 'lorem ipsum';
console.log(str2.length);
let str3  = 'javascript is cool';
console.log(str3.length);

//- Перевести до великого регістру наступні стрінгові значення
//'hello world', 'lorem ipsum', 'javascript is cool'
let str1UpperCase = str1.toUpperCase();
console.log(str1UpperCase);
let str2UpperCase = str2.toUpperCase();
console.log(str2UpperCase);
let str3UpperCase = str3.toUpperCase();
console.log(str3UpperCase);

//- Перевести до нижнього регістру настипні стрінгові значення
//'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let str1LowerCase = str1UpperCase.toLowerCase();
console.log(str1LowerCase);
let str2LowerCase = str2UpperCase.toLowerCase();
console.log(str2LowerCase);
let str3LowerCase = str3UpperCase.toLowerCase();
console.log(str3LowerCase);

//- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str4 = ' dirty string   ';
let strClean = str4.trim();
console.log(strClean);

//- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//    let str5 = 'Каждый охотник желает знать';
//let arr = stringToarray(str);
//document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

let stringToArray = (str5) => {
    let arr = str5.split(' ');
    document.write(arr);
    console.log(arr);
};
let str5 = 'Каждый охотник желает знать';
stringToArray(str5);


//- Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//    let str = 'Каждый охотник желает знать';
//document.writeln(delete_characters(str, 7)); // Каждый

let delete_characters = (str6, length) => {
    document.write(str6.substring(0, length));
    console.log(str6.substring(0, length))
};
let str6 = 'Каждый охотник желает знать';
delete_characters(str6, 10);

//- Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//    let str = "HTML JavaScript PHP";
//document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
let insert_dash = (str7) => {
    let result = str7.toUpperCase().replaceAll(' ','-');
    document.write(`<div>${result}</div>`);
};
let str7 = "HTML JavaScript PHP";
insert_dash(str7);

//- Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
let upPer = (someString) => {
let newString = someString[0].toUpperCase()+someString.substring(1);
console.log(newString)
};
upPer('hello');

//- Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
let capitalize = (someText) => {
        let a = someText.split(' ')
                        .map (text => (text.charAt(0).toUpperCase())+text.slice(1))

console.log(a)
}

let someText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque deserunt distinctio ducimus facere illum ipsum minima quisquam quod tempora voluptatum?';
capitalize(someText)