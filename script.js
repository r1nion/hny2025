// 暗号の正しい答え
const correctAnswer = "bananaisbeautiful";

// フォームとヒントボタン、結果表示要素を取得
const form = document.getElementById("decode-form");
const userInput = document.getElementById("user-input");
const hintButton = document.getElementById("hint-button");
const result = document.getElementById("result");
const hint = document.getElementById("hint");

// フォーム送信イベント
form.addEventListener("submit", (event) => {
  event.preventDefault(); // ページリロード防止

  // ユーザー入力を取得し、空白を削除して小文字に変換
  const userAnswer = userInput.value.trim().replace(/\s+/g, '').toLowerCase();

  // 判定処理
  if (userAnswer === correctAnswer) {
    result.textContent = "正解！\nあけましておめでとうございます、2025年もよろしくお願いします！\n今年も仲良くしよね！\n解いてくれてありがとう、ぜひ解けたよーって連絡してね、！";
    result.style.color = "green";
  } else {
    result.textContent = "なんか違うかも、？";
    result.style.color = "red";
  }

  // 入力フィールドをクリア
  userInput.value = "";
});

// ヒントボタンクリックイベント
hintButton.addEventListener("click", () => {
  if (hint.textContent === "") {
    // ヒントを表示
    hint.textContent = "ヒント:黒=0, 白=1で隠れてます。\nどうしてもわからなかったらLINEしてね☆\nASCII：7bitずつで一文字を表現する文字コード\nシーザー暗号：一定でずらして暗号化し、暗号文を同じだけ逆にずらして復号する暗号方法。";
    hintButton.textContent = "ヒントを非表示";
  } else {
    // ヒントを非表示
    hint.textContent = "";
    hintButton.textContent = "ヒントを表示";
  }
});