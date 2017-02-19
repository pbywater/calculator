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
var zero = document.getElementById('zero');

//Symbols

var plus = document.getElementById('plus');
var minus = document.getElementById('minus');
var divide = document.getElementById('divide');
var times = document.getElementById('times');
var equals = document.getElementById('equals');
var equals = document.getElementById('clear');

//printing numbers

var calc = [];

one.onclick = function appear() {
    screen.innerHTML = '';
    var toAdd = document.createTextNode(one.value);
    screen.appendChild(toAdd);
    calc.push(toAdd);
    console.log(calc);
};

two.onclick = function appear() {
    screen.innerHTML = '';
    var toAdd = document.createTextNode(two.value);
    screen.appendChild(toAdd);
    calc.push(toAdd);
    console.log(calc);
    
};

three.onclick = function appear() {
    screen.innerHTML = '';
    var toAdd = document.createTextNode(three.value);
    screen.appendChild(toAdd);
    calc.push(toAdd);
    console.log(calc);
    
};

four.onclick = function appear() {
    screen.innerHTML = '';
    var toAdd = document.createTextNode(four.value);
    screen.appendChild(toAdd);
    calc.push(toAdd);
    console.log(calc);
};

five.onclick = function appear() {
    screen.innerHTML = '';
    var toAdd = document.createTextNode(five.value);
    screen.appendChild(toAdd);
    calc.push(toAdd);
    console.log(calc);
    
};

six.onclick = function appear() {
    screen.innerHTML = '';
    var toAdd = document.createTextNode(six.value);
    screen.appendChild(toAdd);
    calc.push(toAdd);
    console.log(calc);
    
};

seven.onclick = function appear() {
    screen.innerHTML = '';
    var toAdd = document.createTextNode(seven.value);
    screen.appendChild(toAdd);
    calc.push(toAdd);
    console.log(calc);

};

eight.onclick = function appear() {
    screen.innerHTML = '';
    var toAdd = document.createTextNode(eight.value);
    screen.appendChild(toAdd);
    calc.push(toAdd);
    console.log(calc);
    
};

nine.onclick = function appear() {
    screen.innerHTML = '';
    var toAdd = document.createTextNode(nine.value);
    screen.appendChild(toAdd);
    calc.push(toAdd);
    console.log(calc);
    
};

zero.onclick = function appear() {
    screen.innerHTML = '';
    var toAdd = document.createTextNode(zero.value);
    screen.appendChild(toAdd);
    calc.push(toAdd);
    console.log(calc);
    
};

//printing symbols

plus.onclick = function appear() {
    screen.innerHTML = '';
    var toAdd = document.createTextNode(plus.value);
    screen.appendChild(toAdd);
    calc.push(toAdd);
    console.log(calc);
 
};

minus.onclick = function appear() {
    screen.innerHTML = '';
    var toAdd = document.createTextNode(minus.value);
    screen.appendChild(toAdd);
    calc.push(toAdd);
    console.log(calc);
    
};

minus.onclick = function appear() {
    screen.innerHTML = '';
    var toAdd = document.createTextNode(minus.value);
    screen.appendChild(toAdd);
    calc.push(toAdd);
    console.log(calc);
    
};

times.onclick = function appear() {
    screen.innerHTML = '';
    var toAdd = document.createTextNode('x');
    screen.appendChild(toAdd);
    console.log('clicked');
    calc.push(times.value);
    console.log(calc);
};

divide.onclick = function appear() {
    screen.innerHTML = '';
    var toAdd = document.createTextNode('÷');
    screen.appendChild(toAdd);
    calc.push(divide.value);
    console.log(calc);
    
};

equals.onclick = function equals() {
    var toSolve = calc[0];
    for (i = 1; i < calc.length; i++) {
        
        if (calc[i] = 1) {
        toSolve = toSolve + calc[i];
        console.log('test');
            console.log(calc[i] + 'running test 1');
            console.log(toSolve);
        }
        
        if (calc[i] = '+') {
            console.log('test2');
            console.log(calc[i] + 'running test 2');
            firstNum = parseInt(toSolve);
            console.log(firstNum);
        }
        
    }
};
