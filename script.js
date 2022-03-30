const btnSub= document.querySelector(".sub");
const btnAdd= document.querySelector(".add");
const btnReset= document.querySelector(".reset");
let count=0;
// declaracion de variables

showCount= (count)=>{
    let display= document.querySelector(".number");
    display.textContent= count;
    if(display.textContent <0){
        display.style.color ="red";
    }else{
        display.style.color ="green";
    }
}

btnSub.addEventListener("click", ()=>{
    count= count-1;
    showCount(count);
})

btnAdd.addEventListener("click", ()=>{
    count= count+1;
    showCount(count);
})

btnReset.addEventListener("click", ()=>{
    count= 0;
    showCount(count);
})

