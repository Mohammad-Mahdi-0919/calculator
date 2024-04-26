let displayBox = document.querySelector(".display");
let list = document.querySelectorAll(".show-display");
let calculate=document.querySelector(".calculate")
let allClear=document.querySelector(".all-clear")
let clearLast=document.querySelector('.clear-last')
list.forEach((item) => {
  item.addEventListener("click", function (event) {
    let x = event.target.innerHTML;
    if(displayBox.innerHTML==0){
        return displayBox.innerHTML=x
    }
    return displayBox.innerHTML+=x
  });
});

calculate.addEventListener("click",function(){
    let res= eval(displayBox.innerHTML)

    displayBox.innerHTML=res
})
allClear.addEventListener("click",function(){
  displayBox.innerHTML=0
})
clearLast.addEventListener("click",function(){
  let text=displayBox.innerHTML
  if(text.length===1){
    displayBox.innerHTML=0
  }
  else{
    displayBox.innerHTML=text.substring(0,text.length-1)
  }
})