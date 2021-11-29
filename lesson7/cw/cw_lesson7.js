/*- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
-- changeYear (newValue) - змінює рік випуску на значення newValue
-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car*/



class Car {
    constructor(модель, виробник, рік_випуску, максимальна_швидкість, обєм_двигуна, driver) {
        this.модель = модель;
        this.виробник = виробник;
        this.рік_випуску = рік_випуску;
        this.максимальна_швидкість = максимальна_швидкість;
        this.обєм_двигуна = обєм_двигуна;
        this.driver = driver;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.максимальна_швидкість} на годину`)
    };

    info() {
        console.log(`модель - ${this.модель}`, `виробник - ${this.виробник}`, `рік_випуску - ${this.рік_випуску}`,
                    `максимальна_швидкість - ${this.максимальна_швидкість}`, `обєм_двигуна - ${this.обєм_двигуна}`)
    };

    increaseMaxSpeed (newSpeed){
        let newMaxSpeed = newSpeed + this.максимальна_швидкість;
                                console.log(newMaxSpeed)};

    changeYear (newValue){
        this.рік_випуску = newValue;
        console.log(this.рік_випуску = newValue)};

    addDriver(drivers_info) {
        console.log(this.driver = {drivers_info})

    }
}
let avto = new Car('camry', 'toyota', 2012, 240, 2.5);
console.log(avto);
avto.drive();
avto.info();
avto.increaseMaxSpeed(30);
avto.changeYear(2015);
avto.addDriver('ghngn, hihi');


function Cars(модель, виробник, рік_випуску, максимальна_швидкість, обєм_двигуна, driver) {
    this.модель = модель;
    this.виробник = виробник;
    this.рік_випуску = рік_випуску;
    this.максимальна_швидкість = максимальна_швидкість;
    this.обєм_двигуна = обєм_двигуна;
    this.driver = driver;

    this.drive = function (){
    console.log(`їдемо зі швидкістю ${this.максимальна_швидкість} на годину`)
}
    this.info = function () {
    console.log(`модель - ${this.модель}`, `виробник - ${this.виробник}`, `рік_випуску - ${this.рік_випуску}`,
        `максимальна_швидкість - ${this.максимальна_швидкість}`, `обєм_двигуна - ${this.обєм_двигуна}`)
}
    this.increaseMaxSpeed = function  (newSpeed){
    let newMaxSpeed = newSpeed + this.максимальна_швидкість;
    console.log(newMaxSpeed)}

    this.changeYear = function  (newValue){
    this.рік_випуску = newValue;
    console.log(this.рік_випуску = newValue)}

    this.addDriver = function (drivers_info) {
    console.log(this.driver = {drivers_info})

}
}
let avto1 = new Cars('passat', 'vw', 2013, 260, 2.4);
console.log(avto1);
avto1.drive();
avto1.info();
avto1.increaseMaxSpeed(40);
avto1.changeYear(2020);
avto1.addDriver('gkukyuk')


/*-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
    За допомоги циклу знайти яка попелюшка повинна бути з принцом.
    Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку*/

class Popelyuschka {

    constructor(name, age, size) {
        this.name = name;
        this.age = age;
        this.size = size;
    }
}
let pop1 = new Popelyuschka(20,20, 20);
let pop2 = new Popelyuschka(21,21, 21);
let pop3 = new Popelyuschka(22,22, 22);
let pop4 = new Popelyuschka(23,23, 23);
let pop5 = new Popelyuschka(24,24, 24);
let pop6 = new Popelyuschka(25,25, 25);
let pop7 = new Popelyuschka(26,26, 26);
let pop8 = new Popelyuschka(27,27, 27);
let pop9 = new Popelyuschka(28,28, 28);
let pop10 = new Popelyuschka(29,29, 29);

let popArr = [pop1, pop2, pop3, pop4, pop5, pop6, pop7, pop8, pop9, pop10];

class Prince {
    constructor(name, age, size) {
        this.name = name;
        this.age = age;
        this.size = size;
    }
}
let prince = new Prince(20, 20, 23);
let trueSize = function (popArr, prince) {
    for (let element of popArr) {
        if (element.size === prince.size){console.log(element)}
    }
}
trueSize(popArr, prince)

let truePop = popArr.find(person=>person.size===prince.size);
console.log(truePop)
