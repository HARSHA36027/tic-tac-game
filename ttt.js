let boxes= document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newbtn=document.querySelector("#newgame");
let msgcon=document.querySelector(".mc");
let msg=document.querySelector("#msg");

let turnO=true;
let winpatterns= [
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

];
const resetgame=()=>{
    turnO=true;
    enabedboxes();
      msgcon.classList.add("hide");

}

boxes.forEach((box)=>{
box.addEventListener("click",()=>{
console.log("box clicked");
if(turnO){
    box.innerText="O";
    turnO=false;
  

}
else{
box.innerText="X";
turnO=true;
}
box.disabled=true;
checkwinner();
});
});
const disabledboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
 }
}
const enabedboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText=""


    }
}
const showwinner=(winner)=>{
    msg.innerText=`Congratulation, winner is ${winner}`;

    msgcon.classList.remove("hide");
    disabledboxes();

}
const checkwinner=()=>{
    for( let pattern of winpatterns){
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!=""&& pos2!=""&& pos3!=""){
            if(pos1===pos2&&pos2===pos3){
                console.log("winnner");
                showwinner(pos1);
            }
    }
}
};
newbtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);
