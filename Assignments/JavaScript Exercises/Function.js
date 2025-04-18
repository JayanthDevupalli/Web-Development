function createCalculator() {
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
      return b !== 0 ? a / b : "Cannot divide by zero";
    }
  
    return {
      add,
      subtract,
      multiply,
      divide
    };
  }
  
  const calc = createCalculator();
  
  console.log(calc.add(7, 3));        
  console.log(calc.subtract(7, 3));  
  console.log(calc.multiply(7, 3));   
  console.log(calc.divide(7, 0));     // Cannot divide by zero
  