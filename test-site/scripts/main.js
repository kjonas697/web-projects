const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello World!';
alert('hi there!');
let myImage = document.querySelector ('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute ('src');
    if(mySrc === 'images/Firefox.png') {
        myImage.setAttribute('src','images/Firefox2.png');
    } else { 
        myImage.setAttribute('src','images/Firefox.png');
    }
}
function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is Cool, ' + myName;
}
let myButton = document.querySelector ('button');
let myHeading = document.querySelector ('h1');
if (!localStorage.getItem('name')) {
    setUserName();
} else { 
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is Cool, ' + storedName;
}
myButton.onclick = function() {
    setUserName();
}