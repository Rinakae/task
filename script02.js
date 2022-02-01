let num = 266219;
let str = String(num);
let multiNum = 1;

for (let i = 0; i < str.length; i++) {
  multiNum *= +str[i];
}

console.log(multiNum);

let exponent = multiNum ** 3;

console.log(exponent);

let twoFirstNum = +String(exponent).slice(0,2);

console.log(twoFirstNum);