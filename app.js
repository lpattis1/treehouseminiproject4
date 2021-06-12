// 1. Create a multidimensional array to hold quiz questions and answers

const main = document.querySelector("main");
const div = document.querySelector("div");
const div2 = document.querySelector(".div-2");

const questions = [
  ["What is Buffy’s middle name in ‘Buffy the Vampire Slayer’?", "anne"],
  [
    "In ‘Buffy the Vampire Slayer’, how many years old was Buffy when she was summoned to be a slayer?",
    "15",
  ],
  [
    "Who’s the first Scooby Gang member that Buffy meets in ‘Buffy the Vampire Slayer’?",
    "cordelia",
  ],
  ["In ‘Buffy the Vampire Slayer’, who turned Angel into a vampire?", "darla"],
  [
    "What is the pilot of ‘Buffy the Vampire Slayer’ called?",
    "welcome to the hellmouth",
  ],
];

const wrongQuestions = [];
const rightQuestions = [];

// 2. Store the number of questions answered correctly
let answerTally = 0;
let message;

/* 
  3. Use a loop to cycle through each question
      - Present each question to the user
      - Compare the user's response to answer in the array
      - If the response matches the answer, the number of correctly
        answered questions increments by 1
*/

for (let i = 0; i < questions.length; i++) {
  let question = questions[i][0];
  let answer = questions[i][1];
  let userInput = prompt(question);

  if (userInput.toLowerCase() === answer) {
    answerTally++;
    rightQuestions.push(question);
  } else {
    wrongQuestions.push(question);
  }
}

console.log(rightQuestions);

function createListItems(arr) {
  let items = "";
  for (let i = 0; i < arr.length; i++) {
    items += `<li>${arr[i]}</li>`;
  }
  return items;
}

// 4. Display the number of correct answers to the user

main.innerHTML = `<h1>You got <span>${answerTally}</span> question(s) correct 😎</h1>`;
div.innerHTML = `<h2>Questions you got right:</h2>
<ol>
${createListItems(rightQuestions)}
</ol>`;
div2.innerHTML = `<h2>Questions you got wrong:</h2>
<ol>
${createListItems(wrongQuestions)}
</ol>`;
