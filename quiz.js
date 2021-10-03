window.onload = function () {
  show(0);
};

let questions = [
  {
    id: 1,
    question: "which one is a Birth date of Rajat Tyagi ?",
    answer: "08/04/2001",
    options: ["01/01/2004", "18/08/2001", "13/03/2001", "08/04/2001"],
  },
  {
    id: 2,
    question: "which is the favourite color of Rajat Tyagi ?",
    answer: "Black",
    options: ["Red", "Black", "White", "Green"],
  },
  {
    id: 3,
    question: "which chocolate Rajat Like most ?",
    answer: "None of these",
    options: ["Kitkath", "Dairy Milk", "5* star", "None of these"],
  },
  {
    id: 4,
    question: "Height of Rajat Tyagi ?",
    answer: "5'7''",
    options: ["5'7''", "5'8''", "5'0''", "5'4''"],
  },
];

function submitForm(e) {
  e.preventDefault();
  let name = document.forms["welcome_form"]["name"].value;
  if (name === "") {
    return false;
  } else {
    sessionStorage.setItem("name", name);
    location.href = "quiz.html";
  }
}
let question_count = 0;
let point = 0;
function next() {
  let user_answer = document.querySelector("li.option.active").innerHTML;
  if (user_answer == questions[question_count].answer) {
    point += 10;
    sessionStorage.setItem("points", point);
  }
  if (question_count == questions.length - 1) {
    sessionStorage.setItem("time", `${minutes} minutes and ${seconds} seconds`);
    clearInterval(mytime);
    location.href = "end.html";
    return;
  }

  question_count++;
  show(question_count);
}
function show(count) {
  let question = document.getElementById("questions");
  question.innerHTML = `<h2>Q${question_count + 1}. ${
    questions[count].question
  }</h2>
    <ul class="option_group">
    <li class="option ">${questions[count].options[0]}</li>
    <li class="option">${questions[count].options[1]}</li>
    <li class="option">${questions[count].options[2]}</li>
    <li class="option">${questions[count].options[3]}</li>
  </ul>`;
  toggleActive();
}
let ans;
function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function () {
      for (let j = 0; j < option.length; j++) {
        if (option[j].classList.contains("active")) {
          option[j].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}
