let boxes= document.querySelectorAll(".box");
let resetBtn= document.querySelector("#reset-btn");
let newBtn= document.querySelector("#new-btn");
let msgContainer= document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turnG = true; //playerC, PlayerQ

const winPatterns = [
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame = () => {
turnG = true;
enableBoxes();
msgContainer.classList.add("hide");

};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
     console.log("box was clicked"); 
     if(turnG) { //playerQ
        box.innerText="Q";
        turnG= false;
     } else {//playerC
        box.innerText ="C";
        turnG = true;
     }
      box.disabled = true
      checkWinner();
});
});
const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled =true;
    }
};

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText="";
    }
};

const showWinner = (Winner) => {
    msg.innerText = `Congratulations, Winner is ${Winner}`;
    msgContainer.classList.remove("hide")
    disableBoxes();
}

const checkWinner = () => {
    for(pattern of winPatterns) {
  
        let pos1val =boxes[pattern [0]].innerText;
        let pos2val =boxes[pattern [1]].innerText;
        let pos3val =boxes[pattern [2]].innerText;

        if(pos1val != '' && pos2val !="" && pos3val !="") {
            if(pos1val=== pos2val && pos2val === pos3val) {
                console.log ("Winner",pos1val)
                showWinner  (pos1val);
            }
        }

    }
}

newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);





