function getString(str) {
  if (typeof str !== typeof '') {
    console.log("Это не строка");
  } else {
    str = str.trim();
    if (str.length < 31) {
      return str;
    } else {      
      str = str.slice(0, 30) + "...";
      return str;
    }
  }
}

