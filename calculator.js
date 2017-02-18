var calculator = document.getElementById('calculator');
var screen = document.getElementById('screen');
var seven = document.getElementById('seven');
var sevenValue = document.getElementById('seven').value;
console.log(seven);

console.log(screen);
seven.onclick = function appear() {
    screen.innerHTML = '';
    var toAdd = document.createTextNode('7');
    screen.appendChild(toAdd);
    console.log('clicked');

};
