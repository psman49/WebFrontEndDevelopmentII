//loop through Triangle
function loopThruTriangle(){
  const triangle = document.getElementById("result_display1")
  for (let line = "#"; line.length < 8; line += "#")
  triangle.innerHTML += line + `<br>`;
   
  }

//FizzBuzz
function fizzBuzz() {

  const out = document.getElementById("result_display2");
  let output = '';
  for (let n = 1; n <= 100; n++) {
    if (n % 3 == 0) output += "Fizz" + `<br>`;
    else if (n % 5 == 0) output += "Buzz" + `<br>`;
    else output += n + `<br>`;
  }
  out.innerHTML = output;
}


//Chess Board

function chessBoard() {
let size = 8;
let board = "";
  const game = document.getElementById("result_display3");
for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
  }
  game.innerHTML= board;
}