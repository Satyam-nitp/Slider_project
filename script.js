
const dabba=document.querySelector(".images");
const clc=document.querySelectorAll(".i");

let i=0;
let j=0;

const leftMove=()=>{
    if(i===0) i=5;
    if(j===-1) j=4;
    i--;
    j--;
    let pos=(-350*i);
    dabba.style.left = `${pos}px`;
    console.log(i)
    console.log(j)
    clc.forEach((el)=>{
        if(el.classList.contains(`i${i}`)){
            el.classList.add("active")
        }
        else el.classList.remove("active");
    })
}

const rightMove=()=>{
    if(j===4) j=-1;
    if(i===4) i=-1;
    j++;
    i++;
    let pos=(-350*j);
    dabba.style.left = `${pos}px`;
    console.log(i)
    console.log(j)
    clc.forEach((el)=>{
        if(el.classList.contains(`i${j}`)){
            el.classList.add("active")
        }
        else el.classList.remove("active");
    })
}
