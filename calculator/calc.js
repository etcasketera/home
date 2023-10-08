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

// DOM ELEMENTS
const container = document.querySelector('#container')
const calc_holder = document.createElement('div')
calc_holder.classList.add('calc_holder')
const num_holder = document.createElement('div')
num_holder.classList.add('num_holder')
const row1 = document.createElement('div')
num_holder.classList.add('rowc')
const row2 = document.createElement('div')
row2.classList.add('rowc')
const row3 = document.createElement('div')
row3.classList.add('rowc')
const row4 = document.createElement('div')
row4.classList.add('rowc')
const zero = document.createElement('button')
zero.classList.add('nummer')
zero.textContent = '0'
zero.style.border = 'thin solid black'
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
const equivalence = document.createElement('button')
equivalence.classList.add('equal')
equivalence.textContent = '='
const clear = document.createElement('button')
clear.classList.add('clear')
clear.textContent = 'C'

row1.appendChild(seven)
row1.appendChild(eight)
row1.appendChild(nine)
row2.appendChild(four)
row2.appendChild(five)
row2.appendChild(six)
row3.appendChild(one)
row3.appendChild(two)
row3.appendChild(three)
row4.appendChild(clear)
row4.appendChild(zero)
row4.appendChild(equivalence)

num_holder.appendChild(row1)
num_holder.appendChild(row2)
num_holder.appendChild(row3)
num_holder.appendChild(row4)

const calc_display = document.createElement('div')
calc_display.classList.add('calc_display')
calc_display.textContent = ''

const operations = document.createElement('div')
operations.classList.add('operations')

const addition = document.createElement('button')
addition.classList.add('operator')
addition.textContent = '+'
const subtraction = document.createElement('button')
subtraction.classList.add('operator')
subtraction.textContent = '-'
const multiplication = document.createElement('button')
multiplication.classList.add('operator')
multiplication.textContent = '*'
const division = document.createElement('button')
division.classList.add('operator')
division.textContent = '/'


operations.appendChild(addition)
operations.appendChild(subtraction)
operations.appendChild(multiplication)
operations.appendChild(division)

container.appendChild(calc_display)
calc_holder.appendChild(num_holder)
calc_holder.appendChild(operations)
container.appendChild(calc_holder)

// DOM FUNCTIONS
let display_val = true
let first_num = ""
let second_num = ""
let oper = ""
const num_buttons = document.querySelectorAll('.nummer')
num_buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        calc_display.textContent += btn.textContent
        if(display_val){
            first_num += btn.textContent
        }else {
            second_num += btn.textContent
        }
        
    })
})

const oper_buttons = document.querySelectorAll('.operator')
oper_buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        if(second_num != ""){
            if(btn.textContent == '/' && second_num == '0'){
                calc_display.textContent = "ERROR: DIV0"
            }else{
                console.log(parseFloat(first_num), oper, parseFloat(second_num))
                first_num = operate(parseFloat(first_num), oper, parseFloat(second_num)).toString()
                second_num = ""
                calc_display.textContent = first_num
            }
        }else{
            display_val = false
        }
        calc_display.textContent += btn.textContent
        oper = btn.textContent
    
        
    })
})

const eqbtn = document.querySelector('.equal')
eqbtn.addEventListener('click', () => {
    if(first_num == "" || oper == "" || second_num == "")
    console.log(first_num, oper, second_num)
    display_val = true
    if(oper == '/' && second_num == '0'){
        calc_display.textContent = "ERROR: DIV0"
    }else{
        first_num = operate(parseFloat(first_num), oper, parseFloat(second_num))
        if(first_num % 1 != 0){
            first_num = first_num.toFixed(4)
        }
        first_num = first_num.toString()
        second_num = ""
        oper=""
        calc_display.textContent = first_num
    }


})

const clbtn = document.querySelector('.clear')
clbtn.addEventListener('click', () => {
    first_num = ""
    second_num = ""
    oper = ""
    calc_display.textContent = ""
})