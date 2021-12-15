/*1.
Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
https://jsonplaceholder.typicode.com/users
    кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
    Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста*/

let wrap = document.createElement('div');
wrap.classList.add('wrapper');
let btn = document.createElement('button');
btn.innerText = 'posts';
fetch('https://jsonplaceholder.typicode.com/users').then(users => users.json()).then(users => {
        for (let user of users) {
            let userBox = document.createElement('div');
            userBox.classList.add('user-style');
            let descriptionDiv = document.createElement('div');
            let btnPost = document.createElement('button');
            btnPost.innerText = 'POSTS';
            let postsBox = document.createElement('div');
            postsBox.classList.add('post-style');
            let commentsBox = document.createElement('div');
            descriptionDiv.innerHTML = (`<h3>${user.id} ${user.name} </h3>
                                  <div>username - ${user.username}</div>
                                  <div> email - ${user.email}</div>
                                  <div> street - ${user.address.street} suite - ${user.address.suite} city - ${user.address.city} zipcode - ${user.address.zipcode}
                                  geo lat - ${user.address.geo.lat} geo lng - ${user.address.geo.lng} </div>
                                  <div> phone - ${user.phone}</div>
                                  <div> website - ${user.website}</div>
                                  <div> company: name ${user.company.name} catchPhrase ${user.company.catchPhrase} bs ${user.company.bs}</div>
                                  `);
            btnPost.onclick = function () {
                fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json()).then(posts => {
                    for (let post of posts) {
                        if (user.id === post.userId) {
                            let postCreater = document.createElement('div');
                            let btnComments = document.createElement('button');
                            btnComments.innerText = 'COMMENTS';
                            postCreater.innerHTML = (`<div>User ID - ${post.userId}</div>
                                  <div>ID - ${post.id}</div>
                                  <div> title - ${post.title}</div>
                                  <div> body - ${post.body}</div>
 <hr>`);

                            btnComments.onclick = function () {
                                fetch('https://jsonplaceholder.typicode.com/comments').then(response => response.json()).then(
                                    comments => {
                                        for (let comment of comments) {
                                            if (post.id === comment.postId) {
                                                let commentCreater = document.createElement('div');
                                                commentCreater.innerHTML = (
                                                    `<div>user ID - ${comment.postId}</div>
                                                           <div>name - ${comment.name}</div>
                                                           <div> email - ${comment.email}</div>
                                                           <div> body - ${comment.body}</div>
                                                           <hr>`);

                                                postCreater.append(commentCreater);
                                                postsBox.append(commentsBox)
                                            }
                                        }
                                    }
                                )

                            }
                            postsBox.append(postCreater, btnComments);
                        }
                    }
                })
            }
            wrap.append(userBox,);
            userBox.append(descriptionDiv, btnPost, postsBox);

        }
    }
)
document.body.appendChild(wrap);