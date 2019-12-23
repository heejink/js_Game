var btn = document.getElementById("btn");
var word = document.getElementById("startWord");
var answer = document.getElementById("answer");
var result = document.getElementById("result");

console.log(btn, word, answer);
console.log(word.textContent[word.textContent.length - 1]);
btn.addEventListener("click", function callbackfun() {
  var inputAnswer = answer.value;
  if (word.textContent[word.textContent.length - 1] === inputAnswer[0]) {
    console.log(inputAnswer);
    word.textContent = inputAnswer;
    answer.value = "";
    result.textContent = `딩동댕~🔔`;
  } else {
    answer.value = "";
    result.textContent = `❌땡❌`;
  }
});

/*
var word = "시작";

while (true) {
  var answer = prompt(word);
  if (word[word.length - 1] === answer[0]) {
    word = answer;
    alert(`딩동댕~🔔`);
  } else {
    alert(`❌땡❌`);
  }
}
*/
