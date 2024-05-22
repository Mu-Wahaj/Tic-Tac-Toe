let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-game");
let newGame = document.querySelector(".New-game");
let messageCon = document.querySelector(".msg-container");
let message = document.querySelector("#message");

let turnO = true;
let count = 0;

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
const resetGame = () => {
  turnO = true;
  enableBtn();
  count = 0;
  messageCon.classList.add("hide");
  resetBtn.style.display = "inline-block";
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO == true) {
      box.innerHTML = "O";
      turnO = false;
    } else {
      box.innerHTML = "X";
      turnO = true;
    }
    box.disabled = true;
    count++;
    let iswinner = checkwinner();
    if (count === 9 && !iswinner) {
      Gamedraw();
    }
  });
});
const Gamedraw = () => {
  message.innerHTML = `Game was a Draw`;
  messageCon.classList.remove("hide");
  disabledBtn();
};
const disabledBtn = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const enableBtn = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
const showwinner = (winner) => {
  message.innerHTML = `congratulations, winner is ${winner}`;
  messageCon.classList.remove("hide");
  resetBtn.style.display = "none";
  disabledBtn();
};
const checkwinner = () => {
  for (let pattern of winPatterns) {
    let posVal1 = boxes[pattern[0]].innerText;
    let posVal2 = boxes[pattern[1]].innerText;
    let posVal3 = boxes[pattern[2]].innerText;
    if (posVal1 !== "" && posVal2 !== "" && posVal3 !== "") {
      if (posVal1 === posVal2 && posVal2 === posVal3) {
        showwinner(posVal1);
      }
    }
  }
};

resetBtn.addEventListener("click", resetGame);
newGame.addEventListener("click", resetGame);
