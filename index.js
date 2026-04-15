//  Создание объекта
const myFavoriteBook = {
    title: "Мастер и Маргарита",
    pages: 480
};

console.log("Объект книги:", myFavoriteBook);


// Массив внутри объекта
myFavoriteBook.quotes = [
    "Рукописи не горят",
    "Никогда и ничего не просите!"
];

console.log("Цитаты:", myFavoriteBook.quotes);


// Связанные объекты
const author = {
    firstName: "Михаил",
    lastName: "Булгаков"
};

myFavoriteBook.author = author;


// Работа с вложенными объектами
console.log(
    "Автор:",
    myFavoriteBook.author.firstName + " " + myFavoriteBook.author.lastName
);


// Доступ к свойствам разными способами
console.log("Через точку:", myFavoriteBook.title);
console.log("Через скобки:", myFavoriteBook["title"]);


// Изменение объекта
myFavoriteBook.pages = 500;
console.log("Новое количество страниц:", myFavoriteBook.pages);


// Преобразование в JSON
const text = JSON.stringify(myFavoriteBook);
console.log("JSON строка:", text);


// Восстановление объекта, посл.задание
const newBook = JSON.parse(text);

// вывод всех свойств
for (let key in newBook) {
    console.log("Свойство:", key);
}