"use strict";

const getData = () => {
  fetch("db.json")  
    .then(response => response.json())
    .then(data => {
      console.log(data);
      sendData(data);
    })
    .catch((errorMess) => console.log(errorMess));
};

const sendData = (data) => {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then(response => response.json())
    .then(data => console.log(data));
    
};

getData();
