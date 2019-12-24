var quiz = document.getElementById("quiz");
var answer = document.getElementById("answer");
var result = document.getElementById("result");
var form = document.getElementById("answerForm");
var mark = document.getElementById("mark");
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var numArray = [];

// 숫자 야구 : 4자리 랜덤 숫자 뽑기
for (var i = 0; i < 4; i++) {
  var selectNum = numbers.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
  numArray.push(selectNum);
  console.log(i + `>>>` + numArray);
}
console.log(numArray);

form.addEventListener("submit", function(eve) {
  eve.preventDefault();
  var valAnwser = answer.value;
  if (valAnwser === numArray.join("")) {
    result.textContent = `정답은 ` + numArray.join("");
    mark.textContent = `딩동댕~🔔`;
    answer.value = "";
    answer.focus();
  } else if (valAnwser.length < 1 || answer.value == 0) {
    alert(`숫자야구 게임이라구요..💢💥`);
    answer.focus();
  } else {
    result.textContent = `스트라이크` + ` & ` + `볼`;
    mark.textContent = `❌땡❌`;
    answer.value = "";
    answer.focus();
  }
});
