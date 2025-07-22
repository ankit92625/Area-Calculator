let display = document.getElementById('display');

function clearDisplay() {
  display.textContent = '0';
}

function backspace() {
  let current = display.textContent;
  if (current.length > 1) {
    display.textContent = current.slice(0, -1);
  } else {
    display.textContent = '0';
  }
}

function appendNumber(num) {
  if (display.textContent === '0') {
    display.textContent = num;
  } else {
    display.textContent += num;
  }
}

function appendOperator(op) {
  let last = display.textContent.slice(-1);
  if ("+-*/%".includes(last)) return;
  display.textContent += op;
}

function toggleSign() {
  let value = parseFloat(display.textContent);
  if (!isNaN(value)) {
    display.textContent = (-value).toString();
  }
}

function calculate() {
  try {
    let result = eval(display.textContent);
    display.textContent = result;
  } catch (e) {
    display.textContent = 'Error';
  }
}
