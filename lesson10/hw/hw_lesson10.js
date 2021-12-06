/*- Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так,
чтобы при клике на кнопку исчезал элемент с id="text".*/
let p = document.getElementById('text');
let btn1 = document.getElementById('btn1');
btn1.onclick = function () {
    p.style.display = 'none';
}

// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
let btn2 = document.getElementById('btn2');
btn2.onclick = function () {
    this.style.display = `none`
}

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку
// зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
let inputAge = document.getElementsByName('age')[0];
inputAge.style.marginBottom =  '20px';
let btn3 = document.getElementById('btn3');
inputAge.oninput = function (e) {
}
btn3.onclick = function () {
    if (inputAge.value < 18 && inputAge.value >= 0) {
        alert('менше 18')
    } else if (inputAge.value >= 18&& inputAge.value <=100){
        alert('ok')
    }else {alert('enter your age')}
};

// - Создайте меню, которое раскрывается/сворачивается при клике
let btn4 = document.getElementById('btn4');
let menuUl = document.getElementById('menu');
btn4.onclick = function () {
    if (menuUl.style.visibility === 'visible' ){
        menuUl.style.visibility = 'hidden'
    }else ( menuUl.style.visibility = 'visible')
};



/*- Создать список комментариев , пример объекта коментария - .
    Вывести список комментариев в документ, каждый в своем блоке.
    Добавьте каждому комментарию по кнопке для сворачивания его body.*/



comments = [{name : 'vasya', description:'lorem ipsum dolo sit ameti'},
            {name : 'petya', description:'lorem ipsum dolo sit ameti'}];


for (let comment of comments) {
    let div = document.createElement('div');
let h2 = document.createElement('h2');
h2.innerText = comment.name;
let description = document.createElement('p');
description.innerText = comment.description;
let hr = document.createElement('hr');
let btn5 = document.createElement('button');
btn5.innerText = 'delete';
btn5.onclick = function () {
    div.style.visibility = 'hidden';
}


    document.body.appendChild(div);
    div.append(h2, description, btn5, hr);
}







