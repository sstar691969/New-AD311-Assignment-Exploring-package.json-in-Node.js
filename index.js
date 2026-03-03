function add(a, b) {
    return a + b;
  }
  
  function divide(a, b) {
    if (b === 0) return null;
    return a / b;
  }

  console.log("Add 2 + 3 =", add(2, 3));
    console.log("Divide 10 / 2 =", divide(10, 2));
    console.log("Divide 10 / 0 =", divide(10, 0));

  
  module.exports = { add, divide };

//console.log("Node.js project running...");