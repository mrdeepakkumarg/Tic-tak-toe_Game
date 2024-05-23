let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let newGame = document.querySelector(".newGame");
let msgcontainer = document.querySelector(".msgcontainer");
let msg = document.querySelector(".msg");

let turnO = true;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }

    box.disabled = true;
    checkWinner();
  });
});

let resetGame = () => {
  turnO = true;
  enableBox();
  msgcontainer.classList.add("hide");
};

const showGame = (winner) => {
  msg.innerText = `Congratulation ${winner} is Winner.`;
  msgcontainer.classList.remove("hide");
  disableBox();
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if (pos1val != 0 && pos2val != 0 && pos3val != 0) {
      if (pos1val == pos2val && pos2val == pos3val) {
        console.log("Winner", pos1val);
        showGame(pos1val);
      }
    }
  }
};

const disableBox = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBox = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

reset.addEventListener("click", resetGame);
newGame.addEventListener("click", resetGame);
