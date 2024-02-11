const display1 = document.getElementById("displayPoint1");
const display2 = document.getElementById("displayPoint2");
const btnPlusLeft = document.getElementById("btnPlusLeft");
const btnMinusLeft = document.getElementById("btnMinusLeft");
const btnPlusRight = document.getElementById("btnPlusRight");
const btnMinusRight = document.getElementById("btnMinusRight");
const selectBestOf = document.getElementById("valueBestOf");
const btnReset = document.getElementById("reset");

let scorePoint1 = 0;
let scorePoint2 = 0;
let winGame = 2;
let isGameOver = false;
let basePoint = 0;

function Reset() {
  isGameOver = false;
  scorePoint1 = 0;
  scorePoint2 = 0;
  display1.textContent = 0;
  display2.textContent = 0;
}
btnReset.addEventListener("click", Reset);

// button Operation
btnPlusLeft.addEventListener("click", function () {
  if (!isGameOver) {
    scorePoint1 += 1;
    if (scorePoint1 === winGame) {
      isGameOver = true;
    }
    display1.textContent = scorePoint1;
  }
});
btnMinusLeft.addEventListener("click", function () {
  scorePoint1 -= 1;
  display1.textContent = scorePoint1;
});
btnPlusRight.addEventListener("click", function () {
  if (!isGameOver) {
    scorePoint2 += 1;
    if (scorePoint2 === winGame) {
      isGameOver = true;
    }
    display2.textContent = scorePoint2;
  }
});
btnMinusRight.addEventListener("click", function () {
  scorePoint2 -= 1;
  display2.textContent = scorePoint2;
});

selectBestOf.addEventListener("change", function () {
  winGame = parseInt(this.value);
  Reset();
});
