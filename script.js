setInterval ( ()=> {
let hours;
let minutes;
let seconds;  

let date = new Date();

let weekToday = [ "воскресенье",
                  "понедельник", 
                  "вторник", 
                  "среда", 
                  "четверг", 
                  "пятница", 
                  "суббота", 
                ];

let month = [ "января",
              "февраля", 
              "марта", 
              "апреля", 
              "мая", 
              "июня", 
              "июля", 
              "августа", 
              "сентября", 
              "октября", 
              "ноября", 
              "декабря"                   
            ];

let n = date.getDay();
let dayToday = weekToday[n];

let m = date.getMonth();
let tmonth = month[m];

let h = date.getHours();

let min = date.getMinutes();

let sec = date.getSeconds();

function chengeWords() {
  function chengeHour() {
    if (h == 1 || h == 21) {
      hours = "час";
    } else if ((h >= 2 && h <= 4) || (h >= 22 && h <= 24)){
      hours = "часа";
    } else if ((h >= 5 && h < 20) || (h == 0)) {
      hours = "часов";
    }
    }

  function chengeMinute() {
    min = Math.abs(min) % 100; 
    let min1 = min % 10;
    if (min > 10 && min < 20) { minutes = "минут"; }
    if (min1 > 1 && min1 < 5) { minutes = "минуты"; }
    if (min1 == 1) { minutes = "минута"; }
    minutes = "минут";
  }  

  function chengeSeconds() {
    sec = Math.abs(sec) % 100; 
    let sec1 = sec % 10;    
    if (sec > 10 && sec < 20 ) { seconds = "секунд"; }
    if (sec1 > 1 && sec1 < 5) { seconds = "секунды"; }
    if (sec1 == 1) { seconds = "секунда"; }
    seconds = "секунд";
  }

  chengeHour();
  chengeMinute();
  chengeSeconds();

}

chengeWords();

let time = `${h} ${hours} ${min} ${minutes} ${sec} ${seconds}`; 

let textA = `Сегодня ${dayToday}, ${date.getDate()} ${tmonth} ${date.getFullYear()} года, ${time}`;
let dateA = document.querySelector(".dateA");
dateA.textContent = textA;

let dateb = new Date();

function addZero() {
  let datebString;
  datebString = ('0' + dateb.getDate()).slice(-2) + 
  '.' + ('0' + (dateb.getMonth()+1)).slice(-2) + 
  '.' + dateb.getFullYear() +
  '-' + ('0' + dateb.getHours()).slice(-2) + 
  ':' + ('0' + dateb.getMinutes()).slice(-2) + 
  ':' + ('0' + dateb.getSeconds()).slice(-2);
  return datebString;
}

let textB = addZero();
let dateB = document.querySelector(".dateB");
dateB.textContent = textB;



});