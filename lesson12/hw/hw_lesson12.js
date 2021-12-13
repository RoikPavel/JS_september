/*1.
Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css,
щоб отримати 5 елементів в рядку.
Для кожного елементу свій блок div.post
Всі характеристики повинні мати свої блоки всередені div.post
https://jsonplaceholder.typicode.com/posts*/

fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((posts) => {
        let wrap = document.createElement('div');
        wrap.classList.add('wrap');
            for (const post of posts){
                console.log(post);
                let divElement = document.createElement('div');
                divElement.classList.add('post');
                let headingElement = document.createElement('h3');
                headingElement.innerText = `id${post.id} title - ${post.title}`;
                let paragraphElement = document.createElement('p');
                paragraphElement.innerText = post.body;

                document.body.append(wrap);
                wrap.append(divElement);
                divElement.append(headingElement, paragraphElement);
            }
        }
    );



