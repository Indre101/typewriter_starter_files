"use strict";

const typeKeyOne = new Audio('typekey1.mp3');
const typeKeyTwo = new Audio('typekey2.mp3');
const typeKeySpace = new Audio('typespace.mp3');
const typeKeyEndLine = new Audio('typelastkey.mp3');
const audioSounds = [typeKeyOne, typeKeyTwo, typeKeySpace, typeKeyEndLine]

const typewritten = document.querySelectorAll(".typewritten");
const randomTimeOffset = () => Math.floor(Math.random() * 200) + 200;
let randomDelay = randomTimeOffset();

const sentences = [];

typewritten.forEach(typewrittenSentence => {
  typewrittenSentence.setAttribute("data-sentence", typewrittenSentence.textContent)
  typewrittenSentence.textContent = " "
  sentences.push(typewrittenSentence.dataset.sentence);
})


let index = 0;
printSentences(index)

function printSentences(index) {
  let counter = 0;
  if (index < sentences.length) {
    typeWritte(sentences[index], typewritten[index], counter);
  } else {
    return false;
  }
}


function typeWritte(sentence, placetoPrintTheText, counter) {
  randomDelay = randomTimeOffset();
  setTimeout(() => {
    if (counter < sentence.length) {
      addSounds(getNextLetter(counter, sentence));
      placetoPrintTheText.textContent += getNextLetter(counter, sentence);
      counter++
      typeWritte(sentence, placetoPrintTheText, counter)
    } else {
      audioSounds[3].play();
      // Start new sentence
      index++
      counter = 0;
      printSentences(index)
    }
  }, randomDelay);
}


function getNextLetter(counter, sentence) {
  return sentence.charAt(counter);
}

function addSounds(character) {
  if (character != " ") {
    audioSounds[Math.floor(Math.random() * 2)].play();
  } else if (character == " ") {
    audioSounds[2].play();
  }
}