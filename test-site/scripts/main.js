const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hi there, ';
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
  if(!myName) {
    setUserName()
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Hi there, ' + myName;
  }
}
let myButton = document.querySelector ('button');
if (!localStorage.getItem('name')) {
    setUserName();
} else { 
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Hi there, ' + storedName;
}
myButton.onclick = function() {
    setUserName();
}