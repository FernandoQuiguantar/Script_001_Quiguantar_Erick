console.log("Hola Mundo Erick")
var a=1
var b=2
var c=1+2

console.log("El resultado es:",c)

function addClass(containerDiv,className){
    
    containerDiv.classList.add(className)
}

document.addEventListener("DOMContentLoaded",function(){
    const containerDivs=document.querySelectorAll(".content") 
   
    for (i=0; i<containerDivs.length; i++)  { 
        addClass(containerDivs[i], "juan") 
        console.log(containerDivs[i])
    }
    

})