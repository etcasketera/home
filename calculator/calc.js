// DOM 

const container = document.querySelector('#container')
container.style.height = '10px'

const num_holder = document.createElement('div')
num_holder.classList.add('num_holder')
num_holder.style.border = 'thin solid black'
num_holder.style.height = '10px'
const row1 = document.createElement('div')
num_holder.classList.add('rowc')
const row2 = document.createElement('div')
row2.classList.add('rowc')
const row3 = document.createElement('div')
row3.classList.add('rowc')

const one = document.createElement('button')
one.classList.add('nummer')
one.textContent = '1'
one.style.border = 'thin solid black'
const two = document.createElement('button')
two.classList.add('nummer')
two.textContent = '2'
two.style.border = 'thin solid black'
const three = document.createElement('button')
three.classList.add('nummer')
three.textContent = '3'
three.style.border = 'thin solid black'
const four = document.createElement('button')
four.classList.add('nummer')
four.textContent = '4'
four.style.border = 'thin solid black'
const five = document.createElement('button')
five.classList.add('nummer')
five.textContent = '5'
five.style.border = 'thin solid black'
const six = document.createElement('button')
six.classList.add('nummer')
six.textContent = '6'
six.style.border = 'thin solid black'
const seven = document.createElement('button')
seven.classList.add('nummer')
seven.textContent = '7'
seven.style.border = 'thin solid black'
const eight = document.createElement('button')
eight.classList.add('nummer')
eight.textContent = '8'
eight.style.border = 'thin solid black'
const nine = document.createElement('button')
nine.classList.add('nummer')
nine.textContent = '9'
nine.style.border = 'thin solid black'

row1.appendChild(seven)
row1.appendChild(eight)
row1.appendChild(nine)
row2.appendChild(four)
row2.appendChild(five)
row2.appendChild(six)
row1.appendChild(one)
row1.appendChild(two)
row1.appendChild(three)
num_holder.appendChild(row1)
num_holder.appendChild(row2)
num_holder.appendChild(row3)
container.appendChild(num_holder)



// Calculator Functions
function add(num1, num2){
    return num1 + num2
}
function subtract(num1, num2){
    return num1 - num2
}
function multiply(num1, num2){
    return num1 * num2
}
function divide(num1, num2){
    return num1 / num2 
}
function operate(num1, op, num2){
    if(op == '+'){
        return add(num1, num2)
    }
    if(op == '-'){
        return subtract(num1, num2)
    }
    if(op == '*'){
        return multiply(num1, num2)
    }
    if(op == '/'){
        return divide(num1, num2)
    }
}