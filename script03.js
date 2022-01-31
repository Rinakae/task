// задание 1
let lang = "en";
let enWeek = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
let ruWeek = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

// задание 1, а
if (lang == "ru") {
  console.log(ruWeek);
} else {
  console.log(enWeek);
}

// задание 1, б
switch(lang) {
  case "ru":
    console.log(ruWeek);
    break;
  case "en":
    console.log(enWeek);
    break;
}

// задание 1, в
let arrWeek = {
  "ru": ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"],
  "en": ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]
};

 console.log(arrWeek[lang]);

 // задание 2
 let namePerson = "Александр";
 let userPerson = (namePerson == "Артем") ? "директор" : 
  (namePerson == "Александр") ? "преподаватель" : 
  "студент";

  console.log(userPerson);