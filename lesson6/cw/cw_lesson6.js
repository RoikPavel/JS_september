//- Дано список імен.
//let n1 = 'Harry..Potter'
//let n2 = 'Ron---Whisley'
//let n3 = 'Hermione__Granger'
//Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
//let n1 = 'Harry Potter'
//let n2 = 'Ron Whisley'
//let n3 = 'Hermione Granger'
let normName = (n) => {
  let newName = n.replaceAll('..', ' ').replaceAll('---', ' ').replaceAll('__', ' ');
    console.log(newName)
};
let n1 = 'Harry..Potter';
let n2 = 'Ron---Whisley';
let n3 = 'Hermione__Granger';
normName(n1);
normName(n2);
normName(n3);

//- створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
function random(size) {
  let newRandomArr = [];
  for (let i = 0; i < size-1; i++) {
    newRandomArr[i] = Math.round(Math.random()*100)
  }
  return newRandomArr;
}
console.log(random(10));

//- створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// Відсортувати його за допомоги sort
let numbersSort = [22, 66, 33, 544, 325, 12, 32, 532, 4566, 324, 245];
numbersSort.sort((a, b) => {return a - b});
console.log(numbersSort);

//- створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// відфільтрувати  його за допомоги filter, залишивши тільки парні числа
let randomFilter = (size) => {
  let randomArr = [];
  for (let i = 0; i < size; i++) {
    randomArr.push(Math.round(Math.random()*100))
  }
  console.log(randomArr.filter(value => value % 2 === 0))
};
randomFilter(20, 90);

//- створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
let randomMap = (size) => {
  let randomArr = [];
  for (let i = 0; i < size; i++) {
    randomArr.push(Math.round(Math.random()*100));
  }
  console.log(randomArr.map(item => item+''))
};
randomMap(10);

//- створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
//    або навпаки в залежності від значення аргументу direction.
//sortNums('ascending') // [3,11,21]
//sortNums('descending') // [21,11,3]
let nums = [11,21,3];
let sortNums = (nums, direction) => {
    if (direction === 'ascending'){return nums.sort((a, b) => a-b)}else if (direction === 'descending') {
      return nums.sort((a, b) => b-a)}
};
console.log(sortNums(nums, 'descending'));


//-- відсортувати його за спаданням за monthDuration
//-- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//- є масив
let coursesAndDurationArray = [
  {title: 'JavaScript Complex', monthDuration: 5},
  {title: 'Java Complex', monthDuration: 6},
  {title: 'Python Complex', monthDuration: 6},
  {title: 'QA Complex', monthDuration: 4},
  {title: 'FullStack', monthDuration: 7},
  {title: 'Frontend', monthDuration: 4}
]
let newSortCourse = coursesAndDurationArray.sort((a, b) => a.monthDuration-b.monthDuration);
let filterMonth = newSortCourse.filter(value => {return value.monthDuration > 4});
console.log(filterMonth);



