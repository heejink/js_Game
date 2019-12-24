var quiz = document.getElementById("quiz");
var answer = document.getElementById("answer");
var result = document.getElementById("result");
var form = document.getElementById("answerForm");
var show = document.getElementById("showResult");
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
    result.textContent = `🎉정답은 ` + numArray.join("") + `🎉`;
    show.textContent = `다시 게임을 시작할게요🤗 4개의 숫자를 맞춰보세요!`;
    answer.value = "";
    answer.focus();

    numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    numArray = [];
    for (var i = 0; i < 4; i++) {
      var selectNum = numbers.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
      numArray.push(selectNum);
      console.log(i + `>>>` + numArray);
    }
    console.log(numArray);
  } else if (valAnwser.length < 4) {
    alert(`숫자야구 게임이라구요..💢💥`);
    answer.focus();
  } else {
    var ansArray = valAnwser.split("");
    // 숫자만 일치하면 ball, 숫자와 배열의 자리까지 일치하면 strike
    var ball = 0;
    var strike = 0;

    for (var i = 0; i < 3; ++1) {
      // 같은 자리인지 확인
      if (ansArray[i] === numArray[i]) {
        strike += 1;
      }
      // 같은 자리는 아니지만, 숫자가 겹치는지 확인
      else if (numArray[i].indexOf(ansArray[i]) > -1) {
        ball += 1;
      }
    }
    result.textContent = `스트라이크` + ` & ` + `볼`;
    show.textContent = `❌땡❌`;
    answer.value = "";
    answer.focus();
  }
});
