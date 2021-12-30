/*В index.html
1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html,
 которая имеет детальную информацию про объект на который кликнули*/

let wrap = document.createElement('div');
wrap.classList.add('wrapper');

fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(
    users => {
        for (let user of users) {
            let detailsMain = document.createElement('div');
            detailsMain.innerHTML = `<h3>${user.id} ${user.name}</h3>`;
            detailsMain.classList.add('user-style');
            let btnDetails = document.createElement('button');
            btnDetails.innerText = 'details';
            btnDetails.addEventListener("click", function () {
                //посилання на сторінку user-details.html
                window.open('user-details.html');
            });
            //збереження в localStorage обраного user
            btnDetails.addEventListener('click', function () {
                localStorage.setItem('selectedUser', JSON.stringify(user))
            })
            wrap.appendChild(detailsMain);
            detailsMain.appendChild(btnDetails);
        }
    }
)
document.body.appendChild(wrap);

