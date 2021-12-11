const col=document.querySelectorAll(".card");
const min =document.querySelectorAll(".minus");
const plu= document.querySelectorAll(".plus");
const number = document.querySelectorAll(".num");
const btnDelete = document.querySelectorAll(".btn");
const fav = document.querySelectorAll(".favorite");
const prices=document.querySelectorAll(".price")
const sum =document.getElementById("total")

// ------remove function -------------------
for(let i= 0; i < btnDelete.length ; i++){btnDelete[i].addEventListener("click",function(){
  btnDelete[i].parentElement.parentElement.remove();})}

//--------------plus function------------------------------------------

for (let i = 0; i < plu.length; i++) {
  plu[i].addEventListener("click",function(){
    number[i].innerHTML ++
    
    let extrPraice =prices[i].innerHTML
   let extreNumber=number[i].innerHTML
})
  }
  //------------minus function---------------------------------------------
  for (let i = 0; i< min.length; i++) {
 min[i].addEventListener("click",
 function(){if(number[i].innerHTML>0){
   number[i].innerHTML--}
    })
      }

      //-----favorite function------------------------------------------------------

for (let i = 0; i < fav.length; i++) {
 
  fav[i].addEventListener("click",function(){

    if(fav[i].style.color==="black"){
      fav[i].style.color="red";
    }else{fav[i].style.color="black"}
    
  })
  
}
//------------price function---------------------------------------------

 
sum.addEventListener("click",function(){
  let sumTotal=0;
let arr1=[];
for (let i = 0; i < prices.length; i++) {
  const reducer = (previousValue, currentValue) => previousValue + currentValue;
  sumTotal+=prices[i].innerHTML*number[i].innerHTML
    arr1.push(sumTotal)
    sum.innerHTML=sumTotal; 
  arr1=[]
 }})
 
  

