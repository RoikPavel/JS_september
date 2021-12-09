let item = localStorage.getItem('favorite');
let jsItems = JSON.parse(item);


for (let jsItem of jsItems) {
    let div = document.createElement('div');
    div.classList.add('divStyle')
    for (let key in jsItem) {
        let p = document.createElement('p');
        p.innerText = (`${key} ${jsItem[key]}`);

        div.appendChild(p);
    }
    document.body.appendChild(div);
}