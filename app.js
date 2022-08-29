//navigator
const route= document.querySelector(".route")
const section= document.querySelector("section")
let i = 1
route.addEventListener("click",(e)=>{
    if(e.target.classList.contains("right")){
        let lefto =(-i * 1265)+"px"
        section.style.left = lefto
        i++
        if(i >= 4){
            i = 0
         }
    }
    else if(e.target.classList.contains("left")){
        let lefto =(-i * 1265)+"px"
        section.style.left = lefto
        i++
        if(i ==0){
            i = -1
        }
        else if(i<=5){
            i = 0
        }
    }
})


//span
const pars= document.querySelector(".pars")
text="PARS57"
let j = 1
function mahlas(){
    pars.innerHTML=text.slice(0,j)
    j++
    if(j>text.length){
        j=1
    }
    
}
setInterval(mahlas, 600);







