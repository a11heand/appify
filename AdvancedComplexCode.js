/* 
Filename: AdvancedComplexCode.js
Content: Complex code with various functionalities
*/

// Variables
let x = 5;
let y = 10;
let z = 0;

// Functions
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero!");
  }
  return a / b;
}

function squareRoot(a) {
  return Math.sqrt(a);
}

// Loops
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    x += i;
  } else {
    y -= i;
  }
}

while (x > 0) {
  z += x;
  x--;
}

// Conditional statements
if (x > y) {
  console.log("x is greater than y");
} else if (x < y) {
  console.log("y is greater than x");
} else {
  console.log("x and y are equal");
}

// Arrays
const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter(function(num) {
  return num % 2 === 0;
});

const multipliedNumbers = numbers.map(function(num) {
  return multiply(num, 2);
});

// Objects
const person = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "New York",
    country: "USA"
  }
};

// Classes
class Shape {
  constructor(color) {
    this.color = color;
  }

  getColor() {
    return this.color;
  }
}

class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }

  getArea() {
    return Math.PI * this.radius ** 2;
  }
}

// Event handling
document.getElementById("myButton").addEventListener("click", function() {
  console.log("Button clicked!");
});

// Asynchronous operations
const fetchTodos = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos = await response.json();
  console.log(todos);
};

// Execute code
console.log("Result:", add(x, y));
console.log("Squared root of z:", squareRoot(z));
console.log("Total even numbers:", evenNumbers.length);
console.log("Multiplied numbers:", multipliedNumbers);
console.log("Person's address:", person.address);
console.log("Circle's area:", new Circle("blue", 5).getArea());

fetchTodos();