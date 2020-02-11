"use strict";

const audio = new Audio('typekey1.mp3');

const typewritten = document.querySelector(".typewritten");
let sentence = typewritten.textContent
typewritten.textContent = " "

const randomTimeOffset = () => Math.floor(Math.random() * 1500) + 500;

let randomDelay = randomTimeOffset();
let i = 0;


function typeWritte() {
  console.log(randomDelay);
  setTimeout(() => {
    randomDelay = randomTimeOffset();

    if (i <= sentence.length) {
      typewritten.textContent += sentence.charAt(i);
      i++
      typeWritte()
    }
  }, randomDelay);
}

typeWritte();