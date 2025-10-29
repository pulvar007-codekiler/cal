let r = Math.random();
let a = prompt("Enter first number:");
let b = prompt("Enter second number:");
let op = prompt("Enter operation (+, -, *, /):");

let obj = {
  "+": "-",
  "*": "+",
  "-": "/",
  "/": "**"
};

if (r > 0.1) {
  // 90% chance - correct result
  alert(`Result: ${eval(`${a} ${op} ${b}`)}`);
} else {
  // 10% chance - wrong (random) operation
  op = obj[op]; // replace operation
  alert(`Result: ${eval(`${a} ${op} ${b}`)}`);
}
