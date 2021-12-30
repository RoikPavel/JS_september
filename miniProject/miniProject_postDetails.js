// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

//get localstorage
let postDirty = localStorage.getItem('selectedPost');
let postInfo = JSON.parse(postDirty);

//структура
let wrapperDiv = document.createElement('div');
wrapperDiv.classList.add('wrapper');
let selectedPostDiv = document.createElement('div');
selectedPostDiv.classList.add('postMainStyle');
let selectedCommentsDiv = document.createElement('div');
selectedCommentsDiv.classList.add('commentsWrapper');


//інфо про обраний post
for (let post in postInfo) {
    selectedPostDiv.innerHTML = `<div>
                                             <p>postId - ${postInfo.userId}</p>
                                             <p>id - ${postInfo.id}</p>
                                             <h2>${postInfo.title}</h2>
                                             <p>${postInfo.body}</p>
                                             <hr>
                                             </div>`
}
//коменти до поста
fetch('https://jsonplaceholder.typicode.com/comments/').then(response => response.json()).then(
    comments => {
        for (let comment of comments) {
            if (postInfo.id === comment.postId) {
                console.log(comment);
                let commentItem = document.createElement('div');
                commentItem.classList.add('commentItem');
                commentItem.innerHTML = `<div>
                                             <p>postId - ${comment.postId}</p>
                                             <p>id - ${comment.id}</p>
                                             <h4>${comment.name}</h4>
                                             <h4>${comment.email}</h4>
                                             <p>${comment.body}</p>
                                             
                                             </div>`;

                commentItem.classList.add('commentItem');
                selectedCommentsDiv.appendChild(commentItem);

            }
        }
    })
wrapperDiv.append(selectedPostDiv, selectedCommentsDiv);

document.body.appendChild(wrapperDiv);