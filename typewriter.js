"use strict";

const typeKeyOne = new Audio('typekey1.mp3');
const typeKeyTwo = new Audio('typekey2.mp3');
const typeKeySpace = new Audio('typespace.mp3');
const typeKeyEndLine = new Audio('typelastkey.mp3');

const audioSounds = [typeKeyOne, typeKeyTwo, typeKeySpace, typeKeyEndLine]

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
      addSounds(getNextLetter(counter, sentence), counter)
      typewrittenSentence.textContent += getNextLetter(counter, sentence);
      counter++
      typeWritte(sentence, typewrittenSentence, counter)
    } else {
      audioSounds[3].play();
    }
  }, randomDelay);
}


function getNextLetter(counter, sentence) {
  return sentence.charAt(counter);
}

function addSounds(character, counter) {

  if (character != " ") {
    audioSounds[Math.floor(Math.random() * 2)].play();
  } else if (character == " ") {
    audioSounds[2].play();
  }
}