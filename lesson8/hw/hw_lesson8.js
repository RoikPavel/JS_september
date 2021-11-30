/*- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
-- отримує текст з параграфа з id "content"*/
console.log(document.getElementById('content'));

//-- отримує текст з блоку з id "rules"
console.log(document.getElementById('rules'));

//-- замініть текст параграфа з id 'content' на будь-який інший
let newIdContent = document.getElementById('content');
newIdContent.innerText = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam aspernatur consequatur,
    consequuntur cumque dolor est, eveniet ex ipsa non officiis optio, quasi rem sapiente ut vel voluptates. Culpa, id?`
console.log(newIdContent);

//-- замініть текст параграфа з id 'rules' на будь-який інший
let newIdRules = document.getElementById('rules');
newIdRules.innerText = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos eligendi fugit incidunt nam nihil. Corporis.`
console.log(newIdRules);

//-- змініть кожному елементу колір фону на червоний
let allElememtsRed = document.body.children;
for (let element of allElememtsRed) {
    element.style.background = 'red'
}

//-- змініть кожному елементу колір тексту на синій
let allElememtsBlue = document.body.children;
for (let element of allElememtsBlue) {
    element.style.color = 'blue'
}
//-- отримати весь список класів елемента з id=rules і вивести їх в console.log
console.log(document.getElementById('rules').classList);

//-- поміняти колір тексту у всіх елементів fc_rules на червоний*/
let changeClassFcRules = document.getElementsByClassName('fc_rules');
for (let fcRule of changeClassFcRules) {
    fcRule.style.color = 'red'
}

