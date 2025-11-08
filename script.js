console.log("Hola Mundo Erick")
var a=1
var b=2
var c=1+2

console.log("El resultado es:",c)

function addClass(containerDiv,className){
    
    containerDiv.classList.add(className)
}

function createMatrix(dimension, container,divisorfizz,divisorbuzz,divisorfizzbuzz){
    let counter = 1
    for (let i=0;i<dimension;i++){
        const div = document.createElement("div")
        addClass(div, "demo")
        for(let j=0;j<dimension;j++){
            const content = document.createElement("div")
            addClass(content, "content")
            fizz(divisorfizz, content,counter)
            buzz(divisorbuzz, content,counter)
            fizzbuzz(divisorfizzbuzz, content,counter)
            content.textContent= counter
            div.appendChild(content)
            counter++

        }
        container.appendChild(div)
        
    }
}
function fizz(divisor,square, number){
    if (number%divisor==0){
        addClass(square,"fizz",)
    }
}
function buzz(divisor,square, number){
    if (number%divisor==0){
        addClass(square,"buzz",)
    }
}
function fizzbuzz(divisor,square, number){
    if (number%divisor==0){
        addClass(square,"fizzbuzz",)
    }
}
document.addEventListener("DOMContentLoaded",function(){
    const container= document.querySelector(".container")
    createMatrix(5,container,2,3)
    }
)