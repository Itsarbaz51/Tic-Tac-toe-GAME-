//  <<<<<<<<<<<<<<<<< Tic Tac toe GAME >>>>>>>>>>>>>>>>>

let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newGamebtn = document.querySelector("#newbtn");
let winContener = document.querySelector(".msg-winner");
let msg = document.querySelector("#msg");
let game = document.querySelector(".game");

let turnO = true;

let winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

const reserbtn = () => {
    turnO = true;
    enableBoxes();
    winContener.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText="O";
            turnO = false;
        } else {
            box.innerText="X";
            turnO = true;
        }
        box.disabled=true;

        checkWinner();
    });
});

const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
};
const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner =(winner) => {
    msg.innerText= `Congratulations, Winner is ${winner}`;
    winContener.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () => {
    for (pattern of winPatterns) {
      let ps1Val = boxes[pattern[0]].innerText;  
      let ps2Val = boxes[pattern[1]].innerText;  
      let ps3Val = boxes[pattern[2]].innerText;  

      if(ps1Val != "" && ps2Val != "" && ps3Val != "" ) {
        if (ps1Val === ps2Val && ps2Val === ps3Val) {
            console.log("Winner",ps1Val);
            showWinner(ps1Val);
        }
      }
    }
}


newGamebtn.addEventListener("click",reserbtn);
resetbtn.addEventListener("click",reserbtn);

