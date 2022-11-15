const boxContainer = document.querySelector(".boxContainer")
const slider = document.querySelector("#slide-value")
const sliderValue = document.createElement("li")
const uList = document.querySelector('ul')

sliderValue.innerText = `Grid Size: ${slider.value} x ${slider.value}`;
sliderValue.classList.add('grid-size')
uList.prepend(sliderValue)

let row = slider.value;
let column = slider.value;
let isColoring = false;

createGrid()

slider.oninput = () => {
    sliderValue.innerText = `Grid Size: ${slider.value} x ${slider.value}`;
    row = slider.value;
    column = slider.value;
    deleteGrid();
    createGrid();
}

function createGrid() {
    for(let x = 0; x < row; x++) {
        let divX = document.createElement('div')
    
        divX.setAttribute("id", `x${x}yN`)
        boxContainer.appendChild(divX)
        for(let y = 0; y < column; y++) {
            let divY = document.createElement('div')
    
            divY.setAttribute('id', `x${x}y${y}`)
            divY.addEventListener('mousedown', () => {
                isColoring = true;
                let num1 = Math.floor(Math.random() * 255)
                let num2 = Math.floor(Math.random() * 255)
                let num3 = Math.floor(Math.random() * 255)
    
                divY.style.cssText += `background-color: rgb(${num1}, ${num2}, ${num3});`
            })
            divY.addEventListener('mouseenter', () => {
                if(isColoring) {
                    let num1 = Math.floor(Math.random() * 255)
                    let num2 = Math.floor(Math.random() * 255)
                    let num3 = Math.floor(Math.random() * 255)
        
                    divY.style.cssText += `background-color: rgb(${num1}, ${num2}, ${num3});`
                }
            })
    
            divY.addEventListener('mouseup', () => {
                isColoring = false;
            })
            divX.appendChild(divY)
        }
    }

}

function deleteGrid() {
    while(boxContainer.firstChild) {
        boxContainer.removeChild(boxContainer.firstChild)
    }
}

