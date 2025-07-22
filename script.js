function hideAll() {
  document.getElementById("calculator").classList.add("hidden");
  document.getElementById("rectangle").classList.add("hidden");
  document.getElementById("triangle").classList.add("hidden");
  document.getElementById("trapezium").classList.add("hidden");
}

function showCalculator() {
  hideAll();
  document.getElementById("calculator").classList.remove("hidden");
}

function showRectangle() {
  hideAll();
  document.getElementById("rectangle").classList.remove("hidden");
}

function showTriangle() {
  hideAll();
  document.getElementById("triangle").classList.remove("hidden");
}

function showTrapezium() {
  hideAll();
  document.getElementById("trapezium").classList.remove("hidden");
}

// Rectangle Area
function calculateRectangle() {
  let length = parseFloat(document.getElementById("length").value);
  let width = parseFloat(document.getElementById("width").value);

  let lengthFeet = Math.floor(length);
  let lengthInch = (length - lengthFeet) * 100;

  let widthFeet = Math.floor(width);
  let widthInch = (width - widthFeet) * 100;

  let totalLength = lengthFeet + (lengthInch / 12);
  let totalWidth = widthFeet + (widthInch / 12);

  let area = totalLength * totalWidth;

  document.getElementById("rectArea").textContent = area.toFixed(2) + " ft²";
}


// Triangle Area (Heron's formula)
function calculateTriangle() {
  let a = parseFloat(document.getElementById("a").value);
  let b = parseFloat(document.getElementById("b").value);
  let c = parseFloat(document.getElementById("c").value);

  let aFeet = Math.floor(a), aInch = (a - aFeet) * 100;
  let bFeet = Math.floor(b), bInch = (b - bFeet) * 100;
  let cFeet = Math.floor(c), cInch = (c - cFeet) * 100;

  let sideA = aFeet + (aInch / 12);
  let sideB = bFeet + (bInch / 12);
  let sideC = cFeet + (cInch / 12);

  let s = (sideA + sideB + sideC) / 2;
  let area = Math.sqrt(s * (s - sideA) * (s - sideB) * (s - sideC));

  document.getElementById("triArea").textContent = area.toFixed(2) + " ft²";
}


// Trapezium Area
function calculateTrapezium() {
  let a = parseFloat(document.getElementById("ta").value);
  let b = parseFloat(document.getElementById("tb").value);
  let h = parseFloat(document.getElementById("th").value);

  let aFeet = Math.floor(a), aInch = (a - aFeet) * 100;
  let bFeet = Math.floor(b), bInch = (b - bFeet) * 100;
  let hFeet = Math.floor(h), hInch = (h - hFeet) * 100;

  let sideA = aFeet + (aInch / 12);
  let sideB = bFeet + (bInch / 12);
  let height = hFeet + (hInch / 12);

  let area = 0.5 * (sideA + sideB) * height;

  document.getElementById("trapArea").textContent = area.toFixed(2) + " ft²";
}

