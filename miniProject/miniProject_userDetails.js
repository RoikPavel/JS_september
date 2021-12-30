//На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html,
//  которая имеет детальную информацию про текущий пост.


//get selected user
let userDirty = localStorage.getItem('selectedUser');
let userInfo = JSON.parse(userDirty);

//структура
let wrapperDiv = document.createElement('div');
wrapperDiv.classList.add('wrapper');
let descriptionDiv = document.createElement('div');
let btnPost = document.createElement('button');
btnPost.classList.add('post');
btnPost.innerText = 'post of current user';
let postPromo = document.createElement('div');
postPromo.classList.add('promoPostWrapper');

//about selected user
for (let user in userInfo) {
    if (typeof userInfo[user] !== 'object') {
        let div1 = document.createElement('div');
        div1.innerText = `${user} - ${userInfo[user]}`;
        descriptionDiv.append(div1);
    }
    if (typeof userInfo[user] === 'object') {
        for (let userKey in userInfo[user]) {
            if (typeof userInfo[user][userKey] !== 'object') {
                let div2 = document.createElement('div');
                div2.innerText = `${userKey} - ${userInfo[user][userKey]}`;
                descriptionDiv.append(div2);
            }
            if (typeof userInfo[user][userKey] === 'object') {
                for (let userDeepKey in userInfo[user][userKey]) {
                    console.log(userInfo[user][userKey][userDeepKey]);
                    let div3 = document.createElement('div');
                    div3.innerText = `${userDeepKey}${userInfo[user][userKey][userDeepKey]}`;
                    descriptionDiv.append(div3);
                }
            }
        }
    }
}
document.body.append(descriptionDiv);
//btn + post title
btnPost.addEventListener('click', function () {
    fetch('https://jsonplaceholder.typicode.com/posts/').then(response => response.json()).then(
        posts => {
            for (let post of posts) {
                if (userInfo.id === post.userId) {
                    let promoP = document.createElement('p');
                    promoP.innerHTML = post.title;
                    promoP.classList.add('promoBox');
                    // button PostDetails
                    let btnPostDetails = document.createElement('button');
                    btnPostDetails.classList.add('postDetails');
                    btnPostDetails.innerText = 'post-details';
                    btnPostDetails.addEventListener('click', function () {
                        window.open('post-details.html');
                    });
                    //збереження в localStorage обраного post
                    btnPostDetails.addEventListener('click', function () {
                        localStorage.setItem('selectedPost', JSON.stringify(post))
                    });

                    promoP.append(btnPostDetails)
                    postPromo.append(promoP);

                }

            }
        }
    )
})

document.body.appendChild(wrapperDiv);
wrapperDiv.append(descriptionDiv, btnPost, postPromo);
