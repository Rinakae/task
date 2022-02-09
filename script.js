'use strict';

let week = ["понедельник", 
            "вторник", 
            "среда", 
            "четверг", 
            "пятница", 
            "суббота", 
            "воскресенье"];

let weekToday = [ "воскресенье",
                  "понедельник", 
                  "вторник", 
                  "среда", 
                  "четверг", 
                  "пятница", 
                  "суббота", 
                ];

let d = new Date();
let n = d.getDay();
let dayToday = weekToday[n];

for (let i = 0; i < week.length; i++) {
  
  let p = document.createElement("p");	

  p.innerText = week[i];		
  p.style.margin = "0";

  document.body.appendChild(p); 
    
    if ((week[i] == dayToday && i > 4)) {
      p.style.fontWeight = "bold";
      p.style.fontStyle = "italic";
    } else if ((week[i] == dayToday && i < 5)){
       p.style.fontWeight = "bold";
    } else if (i > 4){
      p.style.fontStyle = "italic";
    } else {
      p.style.fontStyle = "normal";
    }
}






  

