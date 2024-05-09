let youscore=0;
let comscore=0;
let man=document.querySelectorAll(".game");
let msg=document.querySelector(".msg");
let userpara=document.querySelector("#yousco");
let comppara=document.querySelector("#comsco");
man.forEach((nal)=>
{
    nal.addEventListener("click",()=>
    {
    let bal=nal.getAttribute("id");
    cat(bal);
  });
});
let drawgame=()=>
{
    console.log("Your game is draw");
    msg.innerText="DRAW";
}
let comcho=(()=>
{
    let nan=["rock","paper","scissor"];
    let gat=Math.floor(Math.random()*3);
    return nan[gat];
});
let winner=(userwin)=>
{
    if(userwin)
    {
        youscore++;
        userpara.innerText=youscore;
        console.log("you win");
        msg.innerText="YOU WIN";
    }
    else{
        comscore++;
        comppara.innerText=comscore;
        console.log("you lose");
        msg.innerText="YOU LOSE";
    }
}

let cat=(bal)=>
{
    console.log("user choice=",bal);
    let ram=comcho();
    console.log("computer choice=",ram);
    if(bal===ram)
    {
        drawgame();
    }
    else{
        let userwin=true;
        if(bal===rock)
        {
            userwin=ram==="paper"?false:true;
        }
        else if(bal===paper)
        {
            userwin=ram==="scissor"?false:true;
        }
        else
        {
            userwin=ram==="rock"?false:true;
        }
        winner(userwin)

    }
}
 
