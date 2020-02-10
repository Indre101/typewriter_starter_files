"use strict";

const typewritten = document.querySelector(".typewritten");
let sentence = typewritten.textContent

const findTheLenghtOfSentence = sentence => sentence.length
const randomTimeOffset = () => 4000 - (Math.random() * 2000)

let randomDelay = randomTimeOffset();
let i = 0;



const getNextLetter = (sentence) => {
  typewritten.textContent = sentence.substring(0, i)
}


let addNextLetter = () => {
  const intervalOne = setTimeout(() => {
    i++
    console.log("object");
    getNextLetter(sentence)
    randomDelay = randomTimeOffset();

    if (i == findTheLenghtOfSentence(sentence)) {
      clearInterval(printSentence);
    }

  }, randomDelay);
}

const printSentence = setInterval(addNextLetter, 500);