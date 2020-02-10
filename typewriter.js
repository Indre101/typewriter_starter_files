"use strict";

const typewritten = document.querySelector(".typewritten");
let sentence = typewritten.textContent

const findTheLenghtOfSentence = sentence => sentence.length
const randomTimeOffset = () => 4000 - (Math.random() * 2000)

let randomDelay = randomTimeOffset();
let i = 0;



const showNextLetter = (sentence) => {
  typewritten.textContent = sentence.substring(0, i)
}




const printSentence = setInterval(() => {

  let nextLetterInteval = setInterval(() => {
    i++
    showNextLetter(sentence)
    randomDelay = randomTimeOffset();

    if (i == findTheLenghtOfSentence(sentence)) {
      clearInterval(nextLetterInteval)
      clearInterval(printSentence);
    }

  }, randomDelay);

}, 500);