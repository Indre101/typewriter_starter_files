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


function printSentences(index) {
  let counter = 0;
  if (index < sentences.length) {
    typeWritte(sentences[index], typewritten[index], counter);
  } else {
    return false;
  }
}


function typeWritte(sentence, placetoPrintTheText, counter) {
  setTimeout(() => {
    addSounds(getNextLetter(counter, sentence), sentence, counter);

    if (counter < sentence.length - 1) {
      placetoPrintTheText.textContent += getNextLetter(counter, sentence);
      counter++
      typeWritte(sentence, placetoPrintTheText, counter)

    } else {
      console.log("end");
      // Start new sentence
      index++
      counter = 0;
      printSentences(index)
    }
  }, randomDelay);

  randomDelay = randomTimeOffset();

}


function getNextLetter(counter, sentence) {
  return sentence.charAt(counter);
}



function addSounds(character, sentence, counter) {
  // console.log(sentence.indexOf(character), character);
  if (counter == sentence.length - 1) {
    audioSounds[3].play();
    randomDelay += 5000;
  } else if (character != " ") {
    audioSounds[Math.floor(Math.random() * 2)].play();
  } else if (character == " ") {
    audioSounds[2].play();
  }
}

let soundStatus = false;
silenceSounds(soundStatus);

document.querySelector("button").onclick = function () {
  printSentences(index)
  // if (soundStatus = true) {

  // }
}

function silenceSounds(status) {
  if (!status) {
    audioSounds.forEach(audios => audios.pause());

  } else {
    audioSounds.forEach(audios => audios.play());

  }
}