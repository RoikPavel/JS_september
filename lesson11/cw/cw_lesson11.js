//є масив -
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
/*створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє до масиву
favorites улюблених обраних об'єктів в локальному сховищі.
Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.*/
let favorites = [];
for (let user of users) {
    let divElement = document.createElement('div');
    divElement.classList.add('block');
    let btnElement =document.createElement('button');
    btnElement.classList.add('btn');
    btnElement.innerText = 'додати до улюблених';
    btnElement.onclick = function () {
        favorites.push(user);
        localStorage.setItem('favorite', JSON.stringify(favorites))
    }

    for (let userKey in user) {
let pElement = document.createElement('p');
pElement.innerText = `${userKey} ${user[userKey]}`;
        divElement.append(pElement);
    }
    document.body.append(divElement, btnElement);
}

console.log(location);