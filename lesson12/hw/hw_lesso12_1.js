/*2.
Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
    Для кожного елементу свій блок div.comment
Всі характеристики повинні мати свої блоки всередені div.comment
https://jsonplaceholder.typicode.com/comments*/

fetch('https://jsonplaceholder.typicode.com/comments').then(response => response.json())
    .then(comments => {
        let wrap = document.createElement('div');
        for (let comment of comments) {
            let commentDiv = document.createElement('div');
            let postIdDiv = document.createElement('div');
            postIdDiv.innerText = `postId  ${comment.postId}`;
            let idDiv = document.createElement('div');
            idDiv.innerText = ` id ${comment.id}`;
            let nameDiv = document.createElement('div');
            nameDiv.innerText = `name ${comment.name}`;
            let emailDiv = document.createElement('div');
            emailDiv.innerText = comment.email;
            let bodyP = document.createElement('p');
            bodyP.innerText = comment.body;


            wrap.appendChild(commentDiv);
            commentDiv.append(postIdDiv, idDiv, nameDiv, emailDiv, bodyP);
        }
        document.body.appendChild(wrap);
    })