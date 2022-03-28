'use strict';

const DomElement = function (selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;  
  this.element = '';
  this.createElement = function() {
    
    if (this.selector[0] == '.') {
      this.element = document.createElement('div');
      this.element.className = this.selector;
      this.element.textContent = "блок div";
      this.element.style.cssText = `height: ${this.height}; 
                           width: ${this.width};
                           background-color: ${this.bg};
                           font-size: ${this.fontSize};`;
      document.body.append(this.element);
            
    } else if (this.selector[0] == '#') {
      this.element = document.createElement('p');
      this.element.id = this.selector;
      this.element.textContent = "абзац p";
      this.element.style.cssText = `height: ${this.height}; 
                         width: ${this.width};
                         background-color: ${this.bg};
                         font-size: ${this.fontSize};`;
      document.body.append(this.element);      
    }
  };
};

let DomElement2 = new DomElement('#divdiv', '50px', '300px', 'tomato', '24px');
DomElement2.createElement();


let square = new DomElement('.squaer', '100px', '100px', 'pink', '');
square.createElement();
let squaerElement = square.element;

squaerElement.style.position = "absolute";

console.log(square.element);

document.addEventListener( "keydown", (e) => {

    let  cs = window.getComputedStyle(squaerElement);     
    let  left = parseInt(cs.marginLeft);
    let  top = parseInt(cs.marginTop);
     
    switch(e.key){         
      case "ArrowLeft":  
        if (left > 0)
          { squaerElement.style.marginLeft = left - 10 + "px"; }
        break;
      case "ArrowUp": 
        if (top > 0)
          { squaerElement.style.marginTop = top - 10 + "px"; }
        break;
      case "ArrowRight":   
        if (left < document.documentElement.clientWidth - 100)
          { squaerElement.style.marginLeft = left + 10 + "px"; }
        break;
      case "ArrowDown":  
        if (top < document.documentElement.clientHeight - 100)
          { squaerElement.style.marginTop = top + 10 + "px"; }
        break;
    }
  
});












