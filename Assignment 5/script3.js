function truncateString(str, num) {
    // Check if the string length is greater than the specified number
    if (str.length > num) {
      // Truncate the string and return the result
      return str.substring(0, num);
    } else {
      // If the string is shorter or equal to the specified number, return the original string
      return str;
    }
  }
  
  // Test Data
  console.log(truncateString("Robin Singh", 4)); 
  