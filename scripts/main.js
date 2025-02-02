// const myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello world!";

// document.querySelector("html").addEventListener("click", function () {
//     alert("Ouch! Stop poking me!");
//   });

// same using arrow function

// document.querySelector("html").addEventListener("click", () => {
//     alert("Ouch! Stop poking me!");
//   });

const myImage = document.querySelector('img');
const myHeading = document.querySelector('h1');
const myButton = document.querySelector('button');

myImage.addEventListener('click', () => {
    const mySrc = myImage.getAttribute('src');
    if (mySrc === "images/Z.png") {
        myImage.setAttribute('src', "images/E.png");
    } else if (mySrc === "images/E.png") {
        myImage.setAttribute('src', "images/N.png");
    } else if (mySrc === "images/N.png") {
        myImage.setAttribute('src', "images/Z.png");
    }
})

function setUserName() {
    const myName = prompt('Enter you name.');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Welcome to Z, ${myName}`;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Welcome to Z, ${storedName}`;
}

myButton.addEventListener('click', () => {
    setUserName();
})