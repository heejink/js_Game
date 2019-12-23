var num1 = Math.ceil(Math.random() * 9);
var num2 = Math.ceil(Math.random() * 9);
var multiply = num1 * num2;

var quiz = document.getElementById("quiz");
var answer = document.getElementById("answer");
var result = document.getElementById("result");
var form = document.getElementById("answerForm");
quiz.textContent = String(num1) + " ✖ " + String(num2) + " ? ";

form.addEventListener("submit", function(eve) {
  eve.preventDefault();
  if (answer.value === String(multiply)) {
    answer.value = "";
    answer.focus();
    result.textContent = `딩동댕~🔔`;
  } else {
    answer.value = "";
    answer.focus();
    result.textContent = `❌땡❌`;
  }
});
