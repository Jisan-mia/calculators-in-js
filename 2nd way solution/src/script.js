
class Calculator{
	constructor(previousOperandTextElement, currentOperandTextElement) {
		this.previousOperandTextElement = previousOperandTextElement
		this.previousOperandTextElement = previousOperandTextElement

		this.clear();
	}

	//all clear function
	clear() {
		this.currentOperand = ''
		this.previousOperand = ''
		this.operation = undefined
	}

	//delete one number funciton
	delete() {
		this.currentOperand = this. currentOperand.toString().slice(0, -1)
	}

	//appendNumber function
	appendNumber(number) {
		if(number === '.' && this.currentOperand.includes('.')) return 
		this.currentOperand = this.currentOperand.toString() + number.toString()
	}

	//choose operation
	chooseOperation(opeartion) {
		if(this.currentOperand === '') return
			if(this.previousOperand != ''){
				this.compute()
			}
		this.operation = operation;
		this.previousOperand = this.currentOperand
		this.currentOperand = ''

	}

	//compute
	compute() {
		let computation;
		const prev = parseFloat(this.previousOperand)
		const current = parseFloat(this.currentOperand)
		if(isNan(prev) || isNan(current)) return 
		switch (this.operation){
			case '+':
				computation = prev + current;
				break;
			case '-':
				computation = prev - current;
				break;

			case '*':
				computation = prev * current;
				break;
			
			case '/':
				computation = prev / current;
				break;
			default:
				return 
		}
		this.currentOperand = computation;
		this.operation = undefined;
		this.previousOperand = '';
	}

	//showing the update value on display or output
	updateDisplay() {
		 this.currentOperandTextElement.innerText = this.currentOperand;
		 if (this.operation != null){
		 	this.previousOperandTextElement.innerText = `${this.previousOperand} ${this.operation}`
		 }

	}



}



const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearbutton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');


//create a calculator object
const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
  })
})


operationButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
  })
})

equalButton.addEventListener('click', button => {
	calculator.compute();
	calculator.updateDisplay();
})

allClearbutton.addEventListener('click', button => {
	calculator.clear();
	calculator.updateDisplay();
})

deleteButton.addEventListener('click', button => {
	calculator.delete();
	calculator.updateDisplay();
})