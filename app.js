// 1. Create a multidimensional array to hold quiz questions and answers

const main = document.querySelector("main");

const questions = [
  ["What is Buffy’s middle name in ‘Buffy the Vampire Slayer’?", ["Anne"]],
  [
    "In ‘Buffy the Vampire Slayer’, how many years old was Buffy when she was summoned to be a slayer?",
    ["15"],
  ],
  [
    "Who’s the first Scooby Gang member that Buffy meets in ‘Buffy the Vampire Slayer’?",
    ["Cordelia"],
  ],
  [
    "In ‘Buffy the Vampire Slayer’, who turned Angel into a vampire?",
    ["Darla"],
  ],
  [
    "What is the pilot of ‘Buffy the Vampire Slayer’ called?",
    ["Welcome to the Hellmouth"],
  ],
];

// 2. Store the number of questions answered correctly
let answerTally = 0;

/* 
  3. Use a loop to cycle through each question
      - Present each question to the user
      - Compare the user's response to answer in the array
      - If the response matches the answer, the number of correctly
        answered questions increments by 1
*/

function takeTheQuiz() {
  let questionPrompt;
  for (let i = 0; i < questions.length; i++) {
    questionPrompt += prompt(questions[i][0]);

    if (questionPrompt.includes(questions[i][1])) {
      answerTally++;
    }
  }
  if (answerTally === 5) {
    return `<h1>You got <span>${answerTally}</span> out of <span>${questions.length}</span> questions right. You are a Buffy expert!</h1>`;
  } else if (answerTally === 1 || answerTally === 2) {
    return `<h1>You got <span>${answerTally}</span> out of <span>${questions.length}</span> questions right. Did you even watch the show?</h1>`;
  } else if (answerTally === 3 || answerTally === 4) {
    return `<h1>You got <span>${answerTally}</span> out of <span>${questions.length}</span> questions right. You definitely know your stuff about BTVS!</h1>`;
  } else {
    return `<h1>You got no answers right. Time for you to rewatch Buffy!</h1>`;
  }
}

// 4. Display the number of correct answers to the user

main.innerHTML = takeTheQuiz();
