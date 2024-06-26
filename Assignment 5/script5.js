function arrBetween(lower, upper, arr) {
    // Filter the array to include only elements between the lower and upper bounds (inclusive)
    return arr.filter(element => element >= lower && element <= upper);
  }
  
  // Test Data
  console.log(arrBetween(3, 8, [1, 5, 95, 0, 4, 7])); 
  console.log(arrBetween(1, 10, [1, 10, 25, 8, 11, 6])); 
  console.log(arrBetween(7, 32, [1, 2, 3, 78])); 
  