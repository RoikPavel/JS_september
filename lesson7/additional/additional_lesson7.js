/*- Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
    id: 1,
        name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
    street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874',
        geo: {
        lat: '-37.3159',
            lng: '81.1496'
    }
},
    phone: '1-770-736-8031 x56442',
        website: 'hildegard.org',
    company: {
    name: 'Romaguera-Crona',
        catchPhrase: 'Multi-layered client-server neural-net',
        bs: 'harness real-time e-markets'
}
}*/
class ObjConst {

    constructor(id, name, userName, email, addressStreet, addressSuite, addressCity, addressZipcode, geoLat, geoLng, phone, website, companyName, companyCatchPhrase, companyBs) {
        this.id = id;
        this.name = name;
        this.userName = userName;
        this.email = email;
        this.address = {
            street: addressStreet,
            suite: addressSuite,
            city: addressCity,
            zipcode: addressZipcode,
            geo: geoLat,
            geoLng
        };
        this.phone = phone;
        this.website = website;
        this.company = {name: companyName, catchPhrase: companyCatchPhrase, bs: companyBs}
    }
}

let newObject = new ObjConst(1, 'Leanne Graham', 'Bret', 'Sincere@april.biz', 'Kulas Light',
    'Apt. 556', 'Gwenborough', '92998-3874', '-37.3159', '81.1496', '1-770-736-8031 x56442',
    'hildegard.org', 'Romaguera-Crona', 'Multi-layered client-server neural-net',
    'harness real-time e-markets')
console.log(newObject);

/*-  Створити функцію конструктор / клас  який описує об'єкт тегу
Поля :
    -назва тегу ()
- опис його дій
- масив з атрибутами (2-3 атрибути максимум)
Кожен атрибут описати як окремий який буде містити
-назву атрибуту
-опис дії атрибуту
інформацію брати з htmlbook.ru

Таким чином описати теги
-a
-div
-h1
-span
-input
-form
-option
-select
Приклад результуючого об'єкту
{
    titleOfTag: 'area',
        action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
    attrs: [
    {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
 //   {/*some props and values*///
//   {/*...*/},
//    {/*...*/},*/

class TagDescription {
    constructor(titleOfTag, action, attrs) {
        this.titleOfTag = titleOfTag;
        this.action = action;
        this.attrs = attrs;
    }
}

let tagA = new TagDescription('a', 'устанавливает ссылку или якорь.', [{
    titleOfAttr: 'accesskey',
    actionOfAttr: 'Активация ссылки с помощью комбинации клавиш'
}, {titleOfAttr: 'coords', actionOfAttr: 'Устанавливает координаты активной области.'}]);
console.log(tagA);
let tagDiv = new TagDescription('div', 'предназначен для выделения фрагмента документа с целью изменения вида содержимого', [{
    titleOfAttr: 'align',
    actionOfAttr: 'Задает выравнивание содержимого тега.'
}, {
    titleOfAttr: 'title',
    actionOfAttr: 'Добавляет всплывающую подсказку к содержимому.'
}]);
console.log(tagDiv);
let tagH1 = new TagDescription('h1', 'представляет собой наиболее важный заголовок первого уровня.', {
    titleOfAttr: 'align',
    actionOfAttr: 'Определяет выравнивание заголовка'
});
console.log(tagH1);
let tagSpan = new TagDescription('span', 'предназначен для определения строчных элементов документа.', [{
    titleOfAttr: 'class',
    actionOfAttr: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'
}, {
    titleOfAttr: 'contenteditable',
    actionOfAttr: 'Сообщает, что элемент доступен для редактирования пользователем.'
}]);
console.log(tagSpan);
let tagInput = new TagDescription('input', 'позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.', [{
    titleOfAttr: 'accept',
    actionOfAttr: 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.'
}, {
    titleOfAttr: 'alt',
    actionOfAttr: 'Альтернативный текст для кнопки с изображением.'
}]);
console.log(tagInput);
let tagForm = new TagDescription('form', 'устанавливает форму на веб-странице.', [{
    titleOfAttr: 'accept-charset',
    actionOfAttr: 'Устанавливает кодировку, в которой сервер может принимать и обрабатывать данные.'
}, {
    titleOfAttr: 'action',
    actionOfAttr: 'Адрес программы или документа, который обрабатывает данные формы.'
}]);
console.log(tagForm);
let tagOption = new TagDescription('option', 'определяет отдельные пункты списка.', [{
    titleOfAttr: 'disabled',
    actionOfAttr: 'Заблокировать для доступа элемент списка.'
}, {
    titleOfAttr: 'label',
    actionOfAttr: 'Указание метки пункта списка.'
}]);
console.log(tagOption);
let tagSelect = new TagDescription('select', 'позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором', [{
    titleOfAttr: 'multiple',
    actionOfAttr: 'Позволяет одновременно выбирать сразу несколько элементов списка.'
}, {
    titleOfAttr: 'name',
    actionOfAttr: 'Имя элемента для отправки на сервер или обращения через скрипты.'
}]);
console.log(tagSelect);

