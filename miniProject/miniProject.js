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
            let userDiv = document.createElement('div');
            userDiv.classList.add('user-style')
            let userMain = document.createElement('div');
            userMain.innerHTML = `<h3>${user.id} ${user.name}</h3>`;
            let userBtn = document.createElement('button');
            userBtn.innerText = 'user-details';

            // userBtn.addEventListener("click", function () {
            //     // посилання на сторінку user-details.html
            //     window.open('user-details.html');
            // });

            userBtn.addEventListener("click", function () {
                //передати інфо в локал стораже

                for (let userKey in user) {
                    if (typeof userKey !== 'object') {
                        console.log(`${userKey} ${user[userKey]}`);
                    }else{

                            console.log('key');

                    }
                }


            });
            wrap.append(userDiv);
            userDiv.append(userMain, userBtn);
        }
    }
)
document.body.appendChild(wrap);