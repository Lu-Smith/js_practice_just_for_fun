class Calculator {
    constructor(previousOperandElement, currentOperandElement){
       this.previousOperandElement = previousOperandElement;
       this.currentOperandElement = currentOperandElement;
       this.clear();
    }
    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;

    }
    delate() {

    }
    appendNumber(number) {
       this.currentOperand = number;
    }
    chooseOperation(operation) {

    }
    compute() {

    }
    updateDisplay() {
        this.currentOperandElement.innerText = this.currentOperand
    }
}

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalButton = document.querySelector('[data-equals]');
const delateButton = document.querySelector('[data-delate]');
const allClearButoon = document.querySelector('[data-all-clear]');
const previousOperandElement = document.querySelector('[data-previous-operand]');
const currentOperandElement = document.querySelector('[data-current-operand]');

const calculator = new Calculator(previousOperandElement, currentOperandElement);

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerHTML);
        calculator.updateDisplay();
    })
})






