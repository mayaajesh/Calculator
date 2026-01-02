let result = document.getElementById('result');
let expression = '';

function appendNumber(number) {
  expression += number;
  result.value = expression;
}

function appendOperator(operator) {
  expression += operator;
  result.value = expression;
}

function clearResult() {
  expression = '';
  result.value = '';
}

function calculate() {
  try {
    let evalResult = eval(expression);
    result.value = evalResult;
    expression = evalResult.toString();
  } catch (error) {
    result.value = 'Error';
    expression = '';
  }
}
