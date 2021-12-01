// var colors= [
//     "rgb(255, 0, 0)",
//     "rgb(255, 255, 0)",
//     "rgb(0, 255, 0)",
//     "rgb(0, 255, 255)",
//     "rgb(0, 0, 255)",
//     "rgb(255, 0, 255)"
// ]
var numSquare = 6;
var colors = generateRandomColors(numSquare);
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var picColor = pickColor();
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function () {
  //   alert("Hard btn clicked");
  hardBtn.classList.remove("selected");
  easyBtn.classList.add("selected");
  numSquare = 3;
  colors = generateRandomColors(numSquare);
  picColor = pickColor();
  colorDisplay.textContent = picColor;
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
});
hardBtn.addEventListener("click", function () {
  //   alert("Hard btn clicked");
  easyBtn.classList.remove("selected");
  hardBtn.classList.add("selected");
  numSquare = 6;
  colors = generateRandomColors(numSquare);
  picColor = pickColor();
  colorDisplay.textContent = picColor;
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].style.display = "block";
  }
});

resetButton.addEventListener("click", function () {
  // alert("Cliced button");
  // genearte new colors from array
  colors = generateRandomColors(numSquare);
  // pick random color from array
  picColor = pickColor();
  // change pickcolor to match to pick color
  colorDisplay.textContent = picColor;
  //   change colors of square
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
  h1.style.backgroundColor = "steelblue";
});

colorDisplay.textContent = picColor;

for (var i = 0; i < squares.length; i++) {
  // add intial color
  squares[i].style.backgroundColor = colors[i];
  // add even listener squeare
  squares[i].addEventListener("click", function () {
    // alert("Clicked square!");
    // grap color of clicked squares
    var clickedColor = this.style.backgroundColor;
    // compare color to pickcolor
    console.log(clickedColor, picColor);
    if (clickedColor === picColor) {
      // alert("Correct");
      messageDisplay.textContent = "Correct";
      resetButton.textContent = "Play Again";
      changeColor(clickedColor);
      h1.style.backgroundColor = clickedColor;
    } else {
      // alert("Wrong");
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try Agin";
    }
  });
}

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
