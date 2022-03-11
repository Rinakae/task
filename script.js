const inputDb = document.getElementById("inputDb");
const pDb = document.getElementById("pDb");

function onInput(event) {
  pDb.textContent = event.target.value;
}

let debounceOnInput = debounce(onInput);

inputDb.addEventListener("input", debounceOnInput);

function debounce(callback) {
  let timeout;

  return function(argument) {
    clearTimeout(timeout);
    timeout = setTimeout(callback, 300, argument);
  };
}