const boxContainer = document.querySelector(".boxContainer")


let divColumn = document.createElement('div')

const row = 16;
const column = 16;

for(let x = 0; x < row; x++) {
    let y = 0;

    let divRow = document.createElement('div')

    divRow.setAttribute("id", `x${x}y${y}`)
    boxContainer.appendChild(divRow)


}