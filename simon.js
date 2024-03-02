let gameseq=[];
let userseq=[];
let highScore=0;
let started=false;
let level=0;
let boxes=['box1','box2','box3','box4'];
let h2=document.querySelector("h2");
let h3=document.querySelector("h3");

document.addEventListener("keypress",function(){
    if(started==false){
        started=true;
        levelUp();
        console.log("game started");
    }
})
function checkAns(idx){
    // let idx=level-1;
    if(userseq[idx]===gameseq[idx]){
        if(userseq.length===gameseq.length){
            setTimeout(levelUp,1000);
        }
    }else{
    h2.innerHTML=`game over!your score is <b>${level-1}<b><br>press any key to continue`;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
    document.querySelector("body").style.backgroundColor="white";
    },200)
    highScore=Math.max(level-1,highScore);
    h3.innerHTML=`High Score=<b>${highScore}<b>`
    started=false;
    level=0;
    gameseq=[];
    }
}

function flashBtn(btn){
    btn.classList.add("flash");
    // color=btn.style.backgroundColor;
    // btn.style.backgroundColor="white";
    setTimeout(function() {
        btn.classList.remove("flash");
        // btn.style.backgroundColor=color;
    },250);
}
function levelUp(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let randidx=Math.floor(Math.random()*4);
    let randbox=boxes[randidx];
    let randbtn=document.querySelector(`.${randbox}`);
    // console.log(randidx);
    // console.log(randbox);
    // console.log(randbtn);
    gameseq.push(randbox);
    flashBtn(randbtn);
}

let btns=document.querySelectorAll('.box');
for(btn of btns){
    btn.addEventListener("click",btnpress);
}
function btnpress(){
    // console.log('btn pressed');
    flashBtn(this);
    userseq.push(this.getAttribute("id"));
    checkAns(userseq.length-1);
}