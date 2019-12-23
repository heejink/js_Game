var btn = document.getElementById("btn");
var word = document.getElementById("startWord");
var answer = document.getElementById("answer");
var result = document.getElementById("result");
var form = document.getElementById("wordForm");

form.addEventListener("submit", function callbackfun(eve) {
  var inputAnswer = answer.value;
  eve.preventDefault();
  if (word.textContent[word.textContent.length - 1] === inputAnswer[0]) {
    console.log(inputAnswer);
    word.textContent = inputAnswer;
    answer.value = "";
    answer.focus();
    result.textContent = `딩동댕~🔔`;
  } else if (inputAnswer.length < 1) {
    alert(`끝말잇기 게임이라구요..💢💥`);
    answer.focus();
  } else {
    answer.value = "";
    answer.focus();
    result.textContent = `❌땡❌`;
  }
});
