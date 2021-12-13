/*Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
https://jsonplaceholder.typicode.com/posts
    зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі
    поточного поста*/

fetch('https://jsonplaceholder.typicode.com/posts').then(response=>response.json())
    .then(posts=>{
        let div = document.createElement('div');
        for (let post of posts) {
            console.log(post);
        let userId = document.createElement('div');
        userId.innerText = `userID: ${post.userId}`;
            let id = document.createElement('div');
            id.innerText = `ID: ${post.id}`;
            let title = document.createElement('h3');
            title.innerText = post.title;
            let body = document.createElement('p');
            body.innerText = post.body;
            let btn = document.createElement('button');
            btn.innerText = 'show post';
            btn.onclick = function (){{
                fetch('https://jsonplaceholder.typicode.com/comments')
                    .then(response => response.json())
                    .then(comments => {
                        for (const comment of comments) {
                            if (post.id === comment.id) {
                                body.innerText = comment.body;
                            }
                        }
                    })
            }
                body.style.display = 'block';
            };
            let hr = document.createElement('hr')
            div.append(userId, id, title, btn, body, hr);
        }
        document.body.appendChild(div);

    })