let box = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newgame = document.querySelector("#new-btn");
let message = document.querySelector("#msg");
let msgcontainer = document.querySelector(".msg-container");

let turnO = true;
let count = 0;//track the draw

const winpattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetgame = ()=>{
    turnO = true;
    count = 0;
    enableboxes();
    msgcontainer.classList.add("hide");
};

box.forEach((box)=>{
    box.addEventListener("click", ()=>{
        console.log("button clicked");
        if(turnO){
            box.innerText ="O";
            turnO = false;
        }else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        count++;
        
        let iswinner = checkwinner();
        if(count === 9 && !iswinner){
            gamedraw();
        }
    });
});

        const gamedraw = ()=>{
            message.innerText = `Game is a Draw`;
            msgcontainer.classList.remove("hide");
            disableboxes();
        };

        const disableboxes = ()=>{
            for(let boxes of box){
            boxes.disabled = true;
        }
    };

        const enableboxes = ()=>{
            for(let boxes of box){
            boxes.disabled = false;
            boxes.innerText = "";
        }
    };

        const showwinner = (winner)=>{
            msg.innerText = `Winner is ${winner}`;
            msgcontainer.classList.remove("hide"); 
            disableboxes();
        };

const checkwinner= ()=>{
    for(let pattern of winpattern){
       // console.log(pattern[0],pattern[1],pattern[2]);

            let pos1val =box[pattern[0]].innerText;
            let pos2val =box[pattern[1]].innerText;
            let pos3val =box[pattern[2]].innerText;  
            
            if(pos1val!="" && pos2val !="" && pos3val!=""){
                if(pos1val === pos2val && pos2val === pos3val){
                    console.log("winner", pos1val);
                    showwinner(pos1val);
                }
            }
    }

};

newgame.addEventListener("click", resetgame);
resetbtn.addEventListener("click", resetgame);