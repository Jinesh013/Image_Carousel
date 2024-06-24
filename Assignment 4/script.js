function first(array, n) {
    // Check if array is empty
    if (array.length === 0) return [];
    
    // If n is not provided, return the first element
    if (n === undefined) return array[0];
    
    // If n is less than or equal to zero, return an empty array
    if (n <= 0) return [];
    
    // Return the first n elements of the array
    return array.slice(0, n);
  }
  
  // Test cases
  console.log(first([7, 9, 0, -2])); // Expected Output: 7
  console.log(first([], 3)); // Expected Output: []
  console.log(first([7, 9, 0, -2], 3)); // Expected Output: [7, 9, 0]
  console.log(first([7, 9, 0, -2], 6)); // Expected Output: [7, 9, 0, -2]
  console.log(first([7, 9, 0, -2], -3)); // Expected Output: []
  