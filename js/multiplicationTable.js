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
    result.textContent = `딩동댕~🔔`;
    num1 = Math.ceil(Math.random() * 9);
    num2 = Math.ceil(Math.random() * 9);
    multiply = num1 * num2;
    quiz.textContent = String(num1) + " ✖ " + String(num2) + " ? ";
    answer.value = "";
    answer.focus();
  } else if (answer.value.length < 1 || answer.value == 0) {
    alert(`구구단 게임이라구요..💢💥`);
    answer.focus();
  } else {
    answer.value = "";
    answer.focus();
    result.textContent = `❌땡❌`;
  }
});
