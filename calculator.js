var calculator = document.getElementById('calculator');
var screen = document.getElementById('screen');

//Numbers

var one = document.getElementById('1');
var two = document.getElementById('2');
var three = document.getElementById('3');
var four = document.getElementById('4');
var five = document.getElementById('5');
var six = document.getElementById('6');
var seven = document.getElementById('7');
var eight = document.getElementById('8');
var nine = document.getElementById('9');
var zero = document.getElementById('0');

//Symbols

var plus = document.getElementById('plus');
var minus = document.getElementById('minus');
var divide = document.getElementById('divide');
var times = document.getElementById('times');
var equals = document.getElementById('equals');

//printing numbers

one.onclick = function appear() {
    screen.innerHTML = '';
    var toAdd = document.createTextNode(one.value);
    screen.appendChild(toAdd);
    console.log('clicked');
    
};

two.onclick = function appear() {
    screen.innerHTML = '';
    var toAdd = document.createTextNode(two.value);
    screen.appendChild(toAdd);
    console.log('clicked');
    
};

three.onclick = function appear() {
    screen.innerHTML = '';
    var toAdd = document.createTextNode(three.value);
    screen.appendChild(toAdd);
    console.log('clicked');
    
};

four.onclick = function appear() {
    screen.innerHTML = '';
    var toAdd = document.createTextNode(four.value);
    screen.appendChild(toAdd);
    console.log('clicked');
    
};

five.onclick = function appear() {
    screen.innerHTML = '';
    var toAdd = document.createTextNode(five.value);
    screen.appendChild(toAdd);
    console.log('clicked');
    
};

six.onclick = function appear() {
    screen.innerHTML = '';
    var toAdd = document.createTextNode(six.value);
    screen.appendChild(toAdd);
    console.log('clicked');
    
};

seven.onclick = function appear() {
    screen.innerHTML = '';
    var toAdd = document.createTextNode(seven.value);
    screen.appendChild(toAdd);
    console.log('clicked');

};

eight.onclick = function appear() {
    screen.innerHTML = '';
    var toAdd = document.createTextNode(eight.value);
    screen.appendChild(toAdd);
    console.log('clicked');
    
};

nine.onclick = function appear() {
    screen.innerHTML = '';
    var toAdd = document.createTextNode(nine.value);
    screen.appendChild(toAdd);
    console.log('clicked');
    
};

zero.onclick = function appear() {
    screen.innerHTML = '';
    var toAdd = document.createTextNode(zero.value);
    screen.appendChild(toAdd);
    console.log('clicked');
    
};

//printing symbols

plus.onclick = function appear() {
    screen.innerHTML = '';
    var toAdd = document.createTextNode(plus.value);
    screen.appendChild(toAdd);
    console.log('clicked');
    
};

minus.onclick = function appear() {
    screen.innerHTML = '';
    var toAdd = document.createTextNode(minus.value);
    screen.appendChild(toAdd);
    console.log('clicked');
    
};

times.onclick = function appear() {
    screen.innerHTML = '';
    var toAdd = document.createTextNode('x');
    screen.appendChild(toAdd);
    console.log('clicked');
    
};

divide.onclick = function appear() {
    screen.innerHTML = '';
    var toAdd = document.createTextNode('÷');
    screen.appendChild(toAdd);
    console.log('clicked');
    
};
