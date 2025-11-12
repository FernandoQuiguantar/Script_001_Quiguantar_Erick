function addClass(containerDiv, className) {
    containerDiv.classList.add(className);
}

function createMatrix(dimension, container, divisorfizz, divisorbuzz) {
    container.innerHTML = "";
    let counter = 1;

    for (let i = 0; i < dimension; i++) {
        const div = document.createElement("div");
        addClass(div, "demo");

        for (let j = 0; j < dimension; j++) {
            const content = document.createElement("div");
            addClass(content, "content");

            fizz(divisorfizz, content, counter);
            buzz(divisorbuzz, content, counter);
            fizzbuzz(divisorfizz * divisorbuzz, content, counter);

            if (!content.textContent) {
                content.textContent = counter;
            }

            div.appendChild(content);
            counter++;
        }

        container.appendChild(div);
    }
}

function fizz(divisor, square, number) {
    if (number % divisor === 0) {
        addClass(square, "fizz");
    }
}

function buzz(divisor, square, number) {
    if (number % divisor === 0) {
        addClass(square, "buzz");
    }
}

function fizzbuzz(divisor, square, number) {
    if (number % divisor === 0) {
        addClass(square, "fizzbuzz");
    }
}

function buttonClicked() {
    console.log("Me presionaste");

    const dimensionInput = document.getElementById("size");
    const divisorFizzInput = document.getElementById("fizz-divisor");
    const divisorBuzzInput = document.getElementById("buzz-divisor");

    const dimension = parseInt(dimensionInput.value);
    const divisorFizz = parseInt(divisorFizzInput.value);
    const divisorBuzz = parseInt(divisorBuzzInput.value);

    const container = document.querySelector(".container");
    createMatrix(dimension, container, divisorFizz, divisorBuzz);
}

document.addEventListener("DOMContentLoaded", function () {
    const btnGenerate = document.getElementById("generate-btn");
    btnGenerate.addEventListener("click", buttonClicked);
});
