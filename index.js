// code with less number of lines
var n = Math.random();
n = Math.floor(n * 6) + 1;

document.querySelector(".img1").setAttribute("src", "dice" + n + ".png");

var m = Math.random();
m = Math.floor(m * 6) + 1;
document.querySelector(".img2").setAttribute("src", "dice" + m + ".png");

if (n > m) {
  document.querySelector("h1").innerHTML = "🚩Player 1 Wins";
} else if (n < m) {
  document.querySelector("h1").innerHTML = "Player 2 Wins🚩";
} else {
  document.querySelector("h1").innerHTML = "DRAW";
}




//first approach
/* 
var n = Math.random();
n = Math.floor(n * 6) + 1;

var image1 = document.querySelector(".img1");
if (n === 1) {
  image1.setAttribute("src", "images/dice" + n + ".png");
} else if (n === 2) {
  image1.setAttribute("src", "images/dice" + n + ".png");
} else if (n === 3) {
  image1.setAttribute("src", "images/dice" + n + ".png");
} else if (n === 4) {
  image1.setAttribute("src", "images/dice" + n + ".png");
} else if (n === 5) {
  image1.setAttribute("src", "images/dice" + n + ".png");
} else if (n === 6) {
  image1.setAttribute("src", "images/dice" + n + ".png");
}


var m = Math.random();
m = Math.floor(m * 6) + 1;

var image2 = document.querySelector(".img2");
if (m === 1) {
  image2.setAttribute("src", "images/dice" + m + ".png");
} else if (m === 2) {
  image2.setAttribute("src", "images/dice" + m + ".png");
} else if (m === 3) {
  image2.setAttribute("src", "images/dice" + m + ".png");
} else if (m === 4) {
  image2.setAttribute("src", "images/dice" + m + ".png");
} else if (m === 5) {
  image2.setAttribute("src", "images/dice" + m + ".png");
} else if (m === 6) {
  image2.setAttribute("src", "images/dice" + m + ".png");
}

if(n>m){
    document.querySelector("h1").innerHTML="🚩Player 1 Wins";
}
else if(n<m){
    document.querySelector("h1").innerHTML="Player 2 Wins🚩";
}
else{
    document.querySelector("h1").innerHTML="DRAW";
}
 */
