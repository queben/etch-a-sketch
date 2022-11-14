const boxContainer = document.querySelector(".boxContainer")
const slider = document.querySelector("#slide-value")
const sliderValue = document.querySelector(".grid-size")

let row = slider.value;
let column = slider.value;
let isColoring = false;

createGrid()

slider.oninput = () => {
    sliderValue.innerText = `Grid Size: ${slider.value}`;
    console.log(sliderValue.innerHTML)
    row = slider.value;
    column = slider.value;
    deleteGrid();
    createGrid();
}

function createGrid() {
    for(let x = 0; x < row; x++) {
        let divX = document.createElement('div')
    
        divX.setAttribute("id", `x${x}yN`)
        divX.textContet = 'hi'
        divX.style.cssText = 'display: flex; flex: 1; flex-flow; row wrap user-select: none;'
        //divX.style.cssText = "border: solid; background-color: white; border-color: black; margin: 0px; padding: 0px; width: 50px; height: 50px;"
        //removed line above bc box comes out better without it. boxes looked weird
        boxContainer.appendChild(divX)
        for(let y = 0; y < column; y++) {
            let divY = document.createElement('div')
    
            divY.setAttribute('id', `x${x}y${y}`)
            divY.style.cssText = "border: solid; border-color: black; border-width: 1px; margin: 0px; padding: 0px; flex: 1; user-select: none;"
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
    
    for(let x = 0; x < row; x++) {
        const divvyRemove = document.querySelector(`#x${x}yN`)
        divvyRemove.style.borderColor = 'blue';
        divvyRemove.style.border = '0px';

    }
}

function deleteGrid() {
    while(boxContainer.firstChild) {
        boxContainer.removeChild(boxContainer.firstChild)
    }
}

