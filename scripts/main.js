let myImage = document.querySelector("img[name='switch']");

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/YouLie.jpg') {
      myImage.setAttribute ('src','images/darkboys.jpg');
    } else {
      myImage.setAttribute ('src','images/YouLie.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
   if(!myName || myName === null) {
    setUserName();
  } else {
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Adobe Photoshop is a great photo editor (' + myName +')';
	}
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Adobe Photoshop is a great photo editor ( ' + storedName +')';
}

myButton.onclick = function() {
  setUserName();
}