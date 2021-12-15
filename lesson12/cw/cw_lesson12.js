/*Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
https://jsonplaceholder.typicode.com/posts
    зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі
    поточного поста*/

fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json())
    .then(posts => {
        let wrap = document.createElement('div');
        for (let post of posts) {
            let userId = document.createElement('div');
            userId.innerText = `USER ID - ${post.userId}`;
            let id = document.createElement('div');
            id.innerText = `ID - ${post.id}`;
            let title = document.createElement('div');
            title.innerText = `TITLE - ${post.title}`;
            let body = document.createElement('div');
            body.innerText = `BODY ${post.body}`;
            let btn = document.createElement('button');
            btn.innerText = 'comments';
            let allComments = document.createElement('div');
            let hr = document.createElement('hr');
            btn.onclick = function () {
                fetch('https://jsonplaceholder.typicode.com/comments').then(response => response.json())
                    .then(comments => {
                        for (const comment of comments) {
                            if (post.id === comment.postId) {
                                let aComment = document.createElement('div');
                                aComment.innerText = (`POST ID - ${comment.postId}\n ID - ${comment.id}\n TITLE - ${comment.title}\n BODY - ${comment.body}\n`);

                                allComments.appendChild(aComment);
                            }
                        }
                    });
            }
            wrap.append(userId, id, title, body, btn, allComments, hr);
        }
        document.body.appendChild(wrap);
    });