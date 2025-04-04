
const dabba=document.querySelector(".images");

let i=0;
let j=0;

const leftMove=()=>{
    let poss=(-350*i);
    console.log("Hello world");
    console.log(poss);
    dabba.style.left = `${poss}px`;
    i++;
    if(i===5) i=0;
}

const rightMove=()=>{
    let pos=(-350*j-350);
    console.log("Hello world");
    console.log(pos);
    dabba.style.left = `${pos}px`;
    j++;
    if(j===4) j=-1;
}

