const boxContainer = document.querySelector(".boxContainer")


const row = 16;
const column = 16;

for(let x = 0; x < row; x++) {
    let divX = document.createElement('div')

    divX.setAttribute("id", `x${x}yN`)
    divX.textContet = 'hi'
    //divX.style.cssText = "border: solid; background-color: white; border-color: black; margin: 0px; padding: 0px; width: 50px; height: 50px;"
    boxContainer.appendChild(divX)

    for(let y = 0; y < column; y++) {
        let divY = document.createElement('div')

        divY.setAttribute('id', `x${x}y${y}`)
        divY.style.cssText = "border: solid; background-color: white; border-color: black; margin: 0px; padding: 0px; width: 50px; height: 50px;"
        divX.appendChild(divY)
    }
}

for(let x = 0; x < row; x++) {
    const divvyRemove = document.querySelector(`#x${x}yN`)
    divvyRemove.style.borderColor = 'blue';
    divvyRemove.style.border = '0px';
}