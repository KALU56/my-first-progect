$(document).ready(function() {
  let displayValue = "";

  $(".btn").on("click", function() {
    const value = $(this).text();
    if (value === "=") {
      displayValue = eval(displayValue);
    } else if (value === "Ac") {
      displayValue = "";
    } else {
      displayValue += value;
    }
    $("#display").val(displayValue);
  });
});$(document).ready(function() {
  let displayValue = '0';    // Current value in the display
  let firstValue = null;     // First operand
  let operator = null;       // Operator (+, -, *, /)
  let waitingForSecondValue = false;  // Flag to check if waiting for the second operand

  const display = $('#display');      // Calculator display
  const history = $('#history');      // History element

  // Update the display with the current value
  function updateDisplay() {
    display.val(displayValue);
  }

  // Clear everything on AC button
  $('#clear').on('click', function() {
    displayValue = '0';
    firstValue = null;
    operator = null;
    waitingForSecondValue = false;
    updateDisplay();
  });

  // Handle button clicks
  $('.btn').on('click', function() {
    const value = $(this).text();

    // Numbers
    if (!isNaN(value)) {
      if (waitingForSecondValue) {
        displayValue = value;
        waitingForSecondValue = false;
      } else {
        displayValue = displayValue === '0' ? value : displayValue + value;
      }
    }

    // Handle decimal point
    else if (value === '.') {
      if (!displayValue.includes('.')) {
        displayValue += '.';
      }
    }

    // Handle toggle sign
    else if (value === '+/-') {
      displayValue = String(parseFloat(displayValue) * -1);
    }

    // Handle percentage
    else if (value === '%') {
      displayValue = String(parseFloat(displayValue) / 100);
    }

    // Handle operators
    else if (['+', '-', '*', '/'].includes(value)) {
      if (operator && !waitingForSecondValue) {
        displayValue = String(operate(firstValue, displayValue, operator));
      }
      firstValue = displayValue;
      operator = value;
      waitingForSecondValue = true;
    }

    // Handle equals (=)
    else if (value === '=') {
      if (operator && !waitingForSecondValue) {
        displayValue = String(operate(firstValue, displayValue, operator));

        // Append the history
        history.append(`<li>${firstValue} ${operator} ${displayValue}</li>`);

        firstValue = null;
        operator = null;
      }
    }

    // Handle "H" for toggling history
    else if (value === 'H') {
      $('.history-section').toggle(); // Show/Hide history
    }

    updateDisplay();
  });

  // Perform calculations
  function operate(first, second, operator) {
    first = parseFloat(first);
    second = parseFloat(second);
    if (operator === '+') return first + second;
    if (operator === '-') return first - second;
    if (operator === '*') return first * second;
    if (operator === '/') return first / second;
  }
});
