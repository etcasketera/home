function removeDivs() {
    const elemBig = document.querySelectorAll('.big-box')
    const elemSmall = document.querySelectorAll('.small-box')
    elemBig.forEach((elem) => {
        elem.remove()
    }) 
    elemSmall.forEach((elem) => {
        elem.remove
    })
}

function makeGrid(num) {
    const b_s = (1000/num)
    console.log(b_s)
    const box_size = b_s.toString() + 'px'
    console.log(box_size)

    for(i = 0; i < num; i++){
        const newDiv = document.createElement('div')
        newDiv.classList.add('big-box')
        for(j = 0; j < num;j++){
            const newerDiv = document.createElement('div')
            newerDiv.classList.add('small-box')
            newerDiv.style.border = 'thin solid black'
            newerDiv.style.height = box_size
            newerDiv.style.width = box_size
            newDiv.appendChild(newerDiv)
        }
        container.appendChild(newDiv)
    }
    const smallDivs = document.querySelectorAll('.small-box')
        smallDivs.forEach((smallDiv) => {
        smallDiv.addEventListener('mouseover', () =>{
            smallDiv.classList.add('hovering')
    })

    // smallDiv.addEventListener('mouseout', () => {
    //     smallDiv.classList.remove('hovering')
    // })
})
}




const container = document.querySelector('#container')

const ctrlButton = document.createElement('button')
ctrlButton.textContent = "Make a grid"
ctrlButton.addEventListener('click', () => {
    let num = prompt("Please enter a number between 1 and 100")
    if(isNaN(num) || num > 100){
        alert("Invalid entry")
    }
    removeDivs()
    makeGrid(num)
})

container.appendChild(ctrlButton)

