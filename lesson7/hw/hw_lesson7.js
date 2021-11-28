/*- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
створити пустий масив, наповнити його 10 об'єктами new User(....)*/
function User(id, name, surname , email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let user1 = new User(1, 'name1', 'surname1', 'asd1@as.eu', 981111111)
let user2 = new User(2, 'name2', 'surname2', 'asd2@as.eu', 982222222)
let user3 = new User(3, 'name3', 'surname3', 'asd3@as.eu', 983333333)
let user4 = new User(4, 'name4', 'surname4', 'asd4@as.eu', 984333333)
let user5 = new User(5, 'name5', 'surname5', 'asd5@as.eu', 985333333)
let user6 = new User(6, 'name6', 'surname6', 'asd6@as.eu', 986333333)
let user7 = new User(7, 'name7', 'surname7', 'asd7@as.eu', 987333333)
let user8 = new User(8, 'name8', 'surname8', 'asd8@as.eu', 988333333)
let user9 = new User(9, 'name9', 'surname9', 'asd9@as.eu', 989333333)
let user10 = new User(10, 'name10', 'surname10', 'asd10@as.eu', 981033333)
let users = [user1, user2, user3, user4, user5, user6, user7, user8, user9, user10];
console.log(users);

//- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let usersFilter = users.filter(value => value.id % 2 === 0);
console.log(usersFilter);

//- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let usersSort = users.sort((a, b) => a.id-b.id);
console.log(usersSort);

/*- створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
створити пустий масив, наповнити його 10 об'єктами Client*/


class Client {
    constructor(id, name, surname, email, phone, order ) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
let client1 = new Client(1, 'name1', 'surname1', 'name1@i.ua', 630000001, ['milk', 'bread']);
let client2 = new Client(2, 'name2', 'surname2', 'name2@i.ua', 630000002, ['milk', 'bread', 'butter']);
let client3 = new Client(3, 'name3', 'surname3', 'name3@i.ua', 630000003, ['milk', 'bread', 'butter', 'water']);
let client4 = new Client(4, 'name4', 'surname4', 'name4@i.ua', 630000004, ['milk', 'bread', 'butter', 'water', 'juice']);
let client5 = new Client(5, 'name5', 'surname5', 'name5@i.ua', 630000005, ['milk', 'bread', 'butter', 'water']);
let client6 = new Client(6, 'name6', 'surname6', 'name6@i.ua', 630000006, ['milk', 'bread']);
let client7 = new Client(7, 'name7', 'surname7', 'name7@i.ua', 630000007, ['milk', 'bread', 'butter', 'water', 'juice']);
let client8 = new Client(8, 'name8', 'surname8', 'name8@i.ua', 630000012, ['milk', 'bread']);
let client9 = new Client(1, 'name9', 'surname9', 'name9@i.ua', 630000013, ['milk', 'bread', 'butter']);
let client10 = new Client(1, 'name10', 'surname10', 'name10@i.ua', 630000010, ['milk', 'bread']);
let arrClients = [client1, client2, client3, client4, client5, client6, client7, client8, client9, client10];
console.log(arrClients);


//- Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let sortClientProduct = arrClients.sort((a, b) => a.order.length - b.order.length);
console.log(sortClientProduct)