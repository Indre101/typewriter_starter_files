"use strict";

const typewritten = document.querySelector(".typewritten");
let sentence = typewritten.textContent

const findTheLenghtOfSentence = sentence => sentence.length

const randomTimeOffset = () => Math.random() * 1000

let i = 0;

const showNextLetter = (sentence) => {
  typewritten.textContent = sentence.substring(0, i)
}



let nextLetterInteval = setInterval(() => {
  i++
  showNextLetter(sentence)
  stopInterval(i)
  console.log(i);

}, 1000);

function stopInterval(i) {
  if (i == findTheLenghtOfSentence(sentence)) {
    clearInterval(nextLetterInteval)
  }
}