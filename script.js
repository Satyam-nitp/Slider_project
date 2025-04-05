
const dabba=document.querySelector(".images");
const clc=document.querySelectorAll(".i");

let i=0;

const leftMove=()=>{
    if(i===0) i=5;
    i--;
    let pos=(-350*i);
    dabba.style.left = `${pos}px`;
    console.log(i)
    clc.forEach((el)=>{
        if(el.classList.contains(`i${i}`)){
            el.classList.add("active")
        }
        else el.classList.remove("active");
    })
}

const rightMove=()=>{
    if(i===4) i=-1;
    i++;
    let pos=(-350*i);
    dabba.style.left = `${pos}px`;
    console.log(i)
    clc.forEach((el)=>{
        if(el.classList.contains(`i${i}`)){
            el.classList.add("active")
        }
        else el.classList.remove("active");
    })
}
