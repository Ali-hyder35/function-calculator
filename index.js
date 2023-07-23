
function calculator(operator, num1, num2) {
    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        if (num2 === 0) {
          throw new Error("Division by zero is not allowed.");
        }
        return num1 / num2;
      default:
        throw new Error("Invalid operator. Supported operators are +, -, *, and /.");
    }
  }
  
  // Example usage:
  try {
    const result = calculator('+', 5, 3);
    console.log("Result:", result);
  } catch (error) {
    console.error("Error:", error.message);
  }
  