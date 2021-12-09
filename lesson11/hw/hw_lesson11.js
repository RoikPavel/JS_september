/*-створити форму з інпутами для name та age.
    При відправці форми записати об'єкт в localstorage*/

let form = document.forms.form1;
let btn = document.getElementById('btn');
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
btn.onclick = function () {
       let users = new User(form.name.value, form.age.value);
       localStorage.setItem('user', JSON.stringify(users))
};

/*-створити форму з інпутами для model,type та volume автівки.
    при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.*/

let formAvto = document.forms.form2;
let btn1 = document.getElementById('btn1');
class Auto {
    constructor(model, type, volume) {
        this.model = model;
        this.type = type;
        this.volume = volume;
    }
}
btn1.onclick = function () {
    let autos = new Auto(formAvto.model.value, formAvto.type.value, formAvto.volume.value);
    localStorage.setItem('auto', JSON.stringify(autos))
};