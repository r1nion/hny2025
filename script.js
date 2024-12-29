// 暗号の正しい答え
const correctAnswer = "bananaisbeautiful";

// フォームと結果表示要素を取得
const form = document.getElementById("decode-form");
const userInput = document.getElementById("user-input");
const result = document.getElementById("result");

// フォーム送信イベント
form.addEventListener("submit", (event) => {
  event.preventDefault(); // ページリロード防止

  // ユーザー入力を取得し、空白を削除して小文字に変換
  const userAnswer = userInput.value.trim().replace(/\s+/g, '').toLowerCase();

  // 判定処理
  if (userAnswer === correctAnswer) {
    result.textContent = "正解! Happy New Year!!!\n2025年もよろしくね!!!";
    result.style.color = "green";
  } else {
    result.textContent = "なんか違うかも、";
    result.style.color = "red";
  }

  // 入力フィールドをクリア
  userInput.value = "";
});