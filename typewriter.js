"use strict";

const audio = new Audio('typekey1.mp3');

const typewritten = document.querySelectorAll(".typewritten");
const randomTimeOffset = () => Math.floor(Math.random() * 500) + 100;
let randomDelay = randomTimeOffset();

typewritten.forEach(typewrittenSentence => {
  let sentence = typewrittenSentence.textContent
  typewrittenSentence.textContent = " "
  let counter = 0;

  typeWritte(sentence, typewrittenSentence, counter);


})


function typeWritte(sentence, typewrittenSentence, counter) {
  randomDelay = randomTimeOffset();
  setTimeout(() => {
    if (counter <= sentence.length) {
      typewrittenSentence.textContent += sentence.charAt(counter);
      counter++
      typeWritte(sentence, typewrittenSentence, counter)
    }
  }, randomDelay);
}