const correctAnswer = "bananaisbeautiful";

const message = document.getElementById("message")
const form = document.getElementById("decode-form");
const userInput = document.getElementById("user-input");
const hintButton = document.getElementById("hint-button");
const question = document.getElementById("question");
const result = document.getElementById("result");
const hint = document.getElementById("hint");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const userAnswer = userInput.value.trim().replace(/\s+/g, '').toLowerCase();

  if (userAnswer === correctAnswer) {
    message.classList.remove("hidden");
    question.classList.add("hidden");
    result.textContent = "";
  } else {
    message.classList.add("hidden");
    question.classList.remove("hidden");
    result.textContent = "どこか間違ってるかも、？";
  }

  userInput.value = "";
});

hintButton.addEventListener("click", () => {
  if (hint.textContent === "") {
    hint.textContent = "ヒント:\n黒=0, 白=1で隠れてます。\nピタゴラス数3:4:5を使うのでは､､､？！\n\nどうしてもわからなかったらLINEしてね☆\n\nASCII：7bitずつで一文字を表現する文字コード\nシーザー暗号：一定でずらして暗号化し、暗号文を同じだけ逆にずらして復号する暗号方法。";
    hintButton.textContent = "ヒントを非表示";
  } else {
    hint.textContent = "";
    hintButton.textContent = "ヒントを表示";
  }
});