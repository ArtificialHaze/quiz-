const quizJson = [
  {
    question: "What is longest river?",
    a: "Volga",
    b: "Amazon",
    c: "Rio Grande",
    d: "Zambezi",
    correct: "b",
  },
  {
    question: "What is highest mountain?",
    a: "Everest",
    b: "K2",
    c: "Makalu",
    d: "Trivor",
    correct: "a",
  },
  {
    question: "Faster animal on earth?",
    a: "Falcon",
    b: "Cheetah",
    c: "Mountain Lion",
    d: "Mouse",
    correct: "a",
  },
  {
    question: "What is 2*2/2?",
    a: "2",
    b: "1",
    c: "4",
    d: "3",
    correct: "a",
  },
  {
    question: "World's Population 2022 (Estimated)",
    a: "8 Billions",
    b: "7 Billions",
    c: "6 Billions",
    d: "9 Billions",
    correct: "a",
  },
];

const a_answer = document.getElementById("a_answer");
const b_answer = document.getElementById("b_answer");
const c_answer = document.getElementById("c_answer");
const d_answer = document.getElementById("d_answer");
const questionEl = document.getElementById("question");
const btn = document.getElementById("btn");
const answerEls = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");

let currQuestion = 0;
let score = 0;

const loadQuiz = () => {
  deselect();
  const currentQuizData = quizJson[currQuestion];
  questionEl.innerHTML = currentQuizData.question;
  b_answer.innerText = currentQuizData.b;
  c_answer.innerText = currentQuizData.c;
  a_answer.innerText = currentQuizData.a;
  d_answer.innerText = currentQuizData.d;
};

const selected = () => {
  let answer = undefined;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
};

const deselect = () => {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
};

btn.addEventListener("click", () => {
  const answer = selected();
  if (answer) {
    if (answer === quizJson[currQuestion].correct) {
      score++;
    }
    currQuestion++;
    if (currQuestion < quizJson.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2>You've answered correctly ${score}/${quizJson.length} questions.</h2>
      <button class="reload-btn" onclick="location.reload()">START AGAIN</button>`;
    }
  }
});

loadQuiz();
