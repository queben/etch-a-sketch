const boxContainer = document.querySelector(".boxContainer")


const row = 16;
const column = 16;

for(let x = 0; x < row; x++) {
    let y = 0;

    let divX = document.createElement('div')

    divX.setAttribute("id", `x${x}y${y}`)
    divX.textContet = 'hi'
    boxContainer.appendChild(divX)

    for(y = 0; y < column; y++) {
        let divY = document.createElement('div')

        divY.setAttribute('id', `x${x}y${y}`)
        divX.appendChild(divY)
    }
}