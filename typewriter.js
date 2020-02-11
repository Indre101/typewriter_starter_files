"use strict";

const audio = new Audio('typekey1.mp3');

const typewritten = document.querySelector(".typewritten");
let sentence = typewritten.textContent
typewritten.textContent = " "

const findTheLenghtOfSentence = sentence => sentence.length
const randomTimeOffset = () => Math.floor(Math.random() * 500) + 400;

let i = 0;
let randomDelay = randomTimeOffset();

const getNextLetter = (sentence) => {
  sentence = sentence.charAt(i);
  return sentence;
}



let newSentence = getNextLetter(sentence)

function typeWritte() {
  const intervalOne = setInterval(() => {
    randomDelay = randomTimeOffset();
    newSentence = getNextLetter(sentence);
    if (i <= sentence.length) {
      typewritten.textContent = typewritten.textContent + newSentence;
      i++
      clearInterval(intervalOne);
      typeWritte()
    }
  }, randomDelay);
}

typeWritte();