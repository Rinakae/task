// задание 1
let arr = ["254", "44", "189", "328", "6", "28", "49"];
for (let i = 0; i < arr.length; i++) {
  let firstNum = arr[i][0];
  
  if (firstNum == 2 || firstNum == 4) {
    let num = arr[i];
    console.log(num);
  }
}

// задание 2
let num = 100;
nextNum:
  for (let i = 2; i <= num; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        continue nextNum;
      }
    }
    console.log(`${i} делители этого числа: 1 и ${i}`);
  }

