// var game = {};
// game.init = function () {
//   setupModeBtn();
//   setupSquareBtn();
//   reset();
// };
// game.init();
var numSquare = 6;
var colors = [];
var picColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeBtn = document.querySelectorAll(".mode");

// var easyBtn = document.querySelector("#easyBtn");
// var hardBtn = document.querySelector("#hardBtn");

init();
function init() {
  setupModeBtn();
  setupSquareBtn();
  reset();
}

function setupModeBtn() {
  for (var i = 0; i < modeBtn.length; i++) {
    modeBtn[i].addEventListener("click", function () {
      modeBtn[0].classList.remove("selected");
      modeBtn[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? (numSquare = 3) : (numSquare = 6);
      reset();
    });
  }
}

function setupSquareBtn() {
  for (var i = 0; i < squares.length; i++) {
    // add even listener squeare
    squares[i].addEventListener("click", function () {
      // grap color of clicked squares
      var clickedColor = this.style.backgroundColor;
      // compare color to pickcolor
      if (clickedColor === picColor) {
        // alert("Correct");
        messageDisplay.textContent = "Correct";
        resetButton.textContent = "Play Again";
        changeColor(clickedColor);
        h1.style.backgroundColor = clickedColor;
      } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Agin";
      }
    });
  }
}

function reset() {
  // genearte new colors from array
  colors = generateRandomColors(numSquare);
  // pick random color from array
  picColor = pickColor();
  // change pickcolor to match to pick color
  colorDisplay.textContent = picColor;
  resetButton.textContent = "New Colors";
  messageDisplay.textContent = "";
  //   change colors of square
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  h1.style.backgroundColor = "steelblue ";
}

resetButton.addEventListener("click", function () {
  reset();
});

function changeColor(color) {
  // loop throught square
  for (var i = 0; i < colors.length; i++) {
    // change each color to match given
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  var randam = Math.floor(Math.random() * colors.length);
  return colors[randam];
}

function generateRandomColors(num) {
  // make array
  var arr = [];
  // repeat  num color array
  for (var i = 0; i < num; i++) {
    // get random color and push into arr
    arr.push(randomColor());
  }
  // return array that
  return arr;
}

function randomColor() {
  // pick a "red" from 0-255
  var r = Math.floor(Math.random() * 256);
  // pick a "green" from 0-255
  var g = Math.floor(Math.random() * 256);
  // pick a "blue" from 0-255
  var b = Math.floor(Math.random() * 256);
  // "rgb(r, g, b)"
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
