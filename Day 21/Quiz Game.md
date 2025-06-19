# Quiz Game App

```jsx
"use strict";

const box = document.getElementById("quiz-box");
const timerEl = document.getElementById("timer");
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");

const quizData = [
  {
    question: "What is DOM?",
    options: [
      "Document Order Model",
      "Document Object Model",
      "Data Object Method",
      "Direct Object Management",
    ],
    correct: 1,
  },
  {
    question: "Who is Adam?",
    options: ["It's me.", "It's you", "It's him", "Someone else."],
    correct: 0,
  },
  {
    question: "Which method selects by ID?",
    options: [
      "getElementById()",
      "querySelectorAll()",
      "getElement()",
      "getElementsByClassName()",
    ],
    correct: 0,
  },
  {
    question: "Which event fires on input change?",
    options: ["click", "submit", "change", "keydown"],
    correct: 2,
  },
];

let questions = [...quizData].sort(() => Math.random() - 0.5);
let currentQuestion = 0;
let score = 0;
let timer;
let timeLeft;

function loadQuestion() {
  clearInterval(timer);
  timeLeft = 15;
  updateTimer();
  timer = setInterval(countdown, 1000);

  const q = questions[currentQuestion];
  questionEl.textContent = `Q${currentQuestion + 1}. ${q.question}`;
  optionsEl.innerHTML = "";

  q.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.classList.add("option-btn");
    btn.textContent = option;
    btn.addEventListener("click", () => selectAnswer(index, true));
    optionsEl.append(btn);
  });

  nextBtn.style.display = "none";
}

function countdown() {
  timeLeft--;
  updateTimer();
  if (timeLeft === 0) {
    clearInterval(timer);
    selectAnswer(questions[currentQuestion]?.correct, false);
  }
}

function updateTimer() {
  timerEl.textContent = `⏱️ ${timeLeft} sec`;
}

function selectAnswer(index, shouldScore) {
  clearInterval(timer);
  const q = questions[currentQuestion];
  const buttons = document.querySelectorAll(".option-btn");

  buttons.forEach((btn) => (btn.disabled = true));

  if (index === q.correct) {
    shouldScore && score++;
    buttons[index].classList.add("correct");
  } else {
    buttons[index].classList.add("wrong");
    buttons[q.correct].classList.add("correct");
  }
  nextBtn.style.display = "inline-block";
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  nextBtn.style.display = "none";
  const highScore = localStorage.getItem("quizHighScore") || 0;
  const isNew = score > highScore;
  if (isNew) {
    localStorage.setItem("quizHighScore", score);
  }
  resultEl.innerHTML = `
  <h2>Hurray! Quiz completed!</h2>
  <p>You have scored ${score} out of ${questions.length}.</p>
  <p>Highest Score: ${Math.max(score, highScore)}</p>
  ${isNew ? "<p>New High Score</p>" : ""}
  <button onclick="restart()">Restart Quiz</button>
  `;
}

function restart() {
  currentQuestion = 0;
  score = 0;
  loadQuestion();
  resultEl.innerHTML = "";
}

loadQuestion();
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Quiz App</title>
    <link rel="stylesheet" href="style.css" />
    <script defer src="./test.js"></script>
  </head>
  <body>
    <div id="qiuz-box" class="quiz-box">
      <div id="timer"></div>
      <h2 id="question">Loading...</h2>
      <div id="options" class="options"></div>
      <button type="button" id="next-btn">Next Question</button>
      <div id="result" class="result"></div>
    </div>
  </body>
</html>
```

```css
* {
  box-sizing: border-box;
  font-family: "Segoe UI", sans-serif;
}

body {
  margin: 0;
  padding: 0;
  background-color: #1e1e2f;
  color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.quiz-box {
  background: #2a2a40;
  padding: 3px;
  border-radius: 16px;
  width: 90%;
  max-width: 500px;
  text-align: center;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}

#question {
  margin-bottom: 20px;
}

.options {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
}

#next-btn {
  margin-bottom: 8px;
  padding: 10px 20px;
  border: none;
  background: #4b6cb7;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
}

#timer {
  font-size: 20px;
  margin-bottom: 10px;
  color: #ffcc00;
}

.option-btn {
  margin: 0px 0.7em;
  padding: 12px;
  background: #38385e;
  border: none;
  border-radius: 8px;
  color: white;
  cursor: pointer;
  transition: background 0.3s ease;
}

.option-btn:hover {
  background: #4b4b7e;
}

.option-btn.correct {
  background-color: #3cb371;
}

.option-btn.wrong {
  background-color: #e74c3c;
}
```
