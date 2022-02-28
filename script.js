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

DomElement.prototype.move = function() {
  
  console.log(this.position);
  
};

let DomElement2 = new DomElement('#divdiv', '50px', '300px', 'tomato', '24px');
DomElement2.createElement();

/*
let square = new DomElement('.squaer', '100px', '100px', 'pink', '');
square.position = 'absolute';
square.element = () => {
  this.element = document.createElement('p');
      this.element.className = this.selector;
      this.element.textContent = "абзац p";
      this.element.style.cssText = `height: ${this.height}; 
                         width: ${this.width};
                         background-color: ${this.bg};
                         font-size: ${this.fontSize};`;
      document.body.append(this.element);  
};
square.createElement();
square.move();
console.log(square);
*/











