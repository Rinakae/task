// пункт 1
const books = document.querySelectorAll(".book");
const book1 = books[1];
const book2 = books[0];
const book3 = books[4];
const book4 = books[3];
const book5 = books[5];
const book6 = books[2];
book2.before(book1);
book5.before(book4);
book5.after(book6);

// пункт 2
const body = document.body;
body.style.backgroundImage = "url(./image/you-dont-know-js.jpg)";

// пункт 3
const titleBook3 = book3.querySelector("[target=_blank]");
titleBook3.textContent= "Книга 3. this и Прототипы Объектов";

// пункт 4
const advertising = document.querySelector(".adv");
advertising.remove();

// пункт 5
const itemsBook2 = book2.querySelectorAll("li");
const item1Book2 = itemsBook2[0];
const item2Book2 = itemsBook2[1];
const item3Book2 = itemsBook2[3];
const item4Book2 = itemsBook2[6];
const item5Book2 = itemsBook2[8];
const item6Book2 = itemsBook2[4];
const item7Book2 = itemsBook2[5];
const item8Book2 = itemsBook2[7];
const item9Book2 = itemsBook2[9];
const item10Book2 = itemsBook2[2];
const item11Book2 = itemsBook2[10];

item9Book2.after(item10Book2);
item9Book2.before(item8Book2);
item3Book2.after(item4Book2, item5Book2);

const itemsBook5 = book5.querySelectorAll("li");
const item1Book5 = itemsBook5[0];
const item2Book5 = itemsBook5[1];
const item3Book5 = itemsBook5[9];
const item4Book5 = itemsBook5[3];
const item5Book5 = itemsBook5[4];
const item6Book5 = itemsBook5[2];
const item7Book5 = itemsBook5[6];
const item8Book5 = itemsBook5[7];
const item9Book5 = itemsBook5[5];
const item10Book5 = itemsBook5[8];
const item11Book5 = itemsBook5[10];

item4Book5.before(item3Book5);
item5Book5.after(item6Book5);
item10Book5.before(item9Book5);

// пункт 6
const newCharper = document.createElement("li");
const listBook6 = book6.querySelector("ul");
const itemsBook6 = book6.querySelectorAll("li");

newCharper.textContent = "Глава 8: За пределами ES6";
itemsBook6[8].after(newCharper);
