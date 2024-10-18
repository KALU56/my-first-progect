$(document).ready(function() {
  let displayValue = '0';
  let firstValue = null;
  let operator = null;
  let waitingForSecondValue = false;

  const display = $('#display');

  function updateDisplay() {
    display.val(displayValue);
  }

  $('.btn').on('click', function() {
    const value = $(this).text();

    if (!isNaN(value)) {
      if (waitingForSecondValue) {
        displayValue = value;
        waitingForSecondValue = false;
      } else {
        displayValue = displayValue === '0' ? value : displayValue + value;
      }
    } else if (value === '.') {
      if (!displayValue.includes('.')) {
        displayValue += '.';
      }
    } else if (value === 'AC') {
      displayValue = '0';
      firstValue = null;
      operator = null;
      waitingForSecondValue = false;
    } else if (value === '+/-') {
      displayValue = String(parseFloat(displayValue) * -1);
    } else if (value === '%') {
      displayValue = String(parseFloat(displayValue) / 100);
    } else if (value === '=') {
      if (operator && !waitingForSecondValue) {
        displayValue = String(operate(firstValue, displayValue, operator));
        firstValue = null;
        operator = null;
      }
    } else {
      if (operator && !waitingForSecondValue) {
        displayValue = String(operate(firstValue, displayValue, operator));
      }
      firstValue = displayValue;
      operator = value;
      waitingForSecondValue = true;
    }
    updateDisplay();
  });

  function operate(first, second, operator) {
    first = parseFloat(first);
    second = parseFloat(second);
    if (operator === '+') return first + second;
    if (operator === '-') return first - second;
    if (operator === '×') return first * second;
    if (operator === '÷') return first / second;
  }
});
