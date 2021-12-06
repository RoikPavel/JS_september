
/*- створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та
    виводиться на консоль інформація з цих 2х форм.
    Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
    Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.*/


let form1 = document.forms.form1;
let form2 = document.forms.form2;
let btn = document.getElementById('btn');
btn.onclick = function () {
    console.log(form1.input1.value + form1.input2.value + form2.input3.value + form2.input4.value);
};

/*- Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
    При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
(Додатковачастина для завдання)*/
let wrap = document.createElement('div');
wrap.style.marginTop = '30px';
let in1 = document.createElement('input');
let in2 = document.createElement('input');
let in3 = document.createElement('input');
let btn1 = document.createElement('button');
btn1.innerText = 'create';

btn1.onclick = function () {
    let table = document.createElement('table');
    table.style.width = '100%';
    for (let i = 0; i < in1.value; i++) {
        let tr = document.createElement('tr');

    for (let i = 0; i < in2.value; i++) {
        let td = document.createElement('td');
        td.innerText = in3.value;

        tr.appendChild(td);
        table.appendChild(tr);
    } }
    wrap.appendChild(table);

}

document.body.appendChild(wrap);
wrap.append(in1, in2, in3, btn1);

/*- Сворити масив не цензцрних слів.
    Сворити інпут текстового типу.
    Якщо людина вводить слово і воно міститься в масиві не цензурних слів
кинути алерт з попередженням.
    Перевірку робити при натисканні на кнопку*/
let badWords = ['дурак', 'осел', 'баран', 'гад', 'редіска'];
let input = document.createElement('input');
let btn2 = document.createElement('button')
btn2.innerText = 'check word';
btn2.onclick = function () {
    for (let word of badWords) {
        if(word===input.value){
            alert('BAD WORD!!!')
        }else {console.log(input.value)}
    }
};
document.body.append(input, btn2);

/*- Сворити масив не цензцрних слів.
    Сворити інпут текстового типу.
    Потрібно перевіряти чи не містить ціле речення в собі погані слова.
    Кинути алерт з попередженням у випадку якщо містить.
    Перевірку робити при натисканні на кнопку*/

let badWordsArr = ['дурак', 'осел', 'баран', 'гад', 'редіска'];
let input1 = document.createElement('input');
let btn3 = document.createElement('button')
btn3.innerText = 'check all';
btn3.onclick = function () {
    for (let word of badWordsArr) {
        if(input1.value.includes(word)){
            alert('BAD WORD!!!')
        }else {console.log(input1.value)}
    }
};
document.body.append(input1, btn3);


