function findIndex(arr, target) {
    // Use indexOf to find the index of the target element
    return arr.indexOf(target);
  }
  
  // Test Data
  console.log(findIndex(["hi", "edabit", "fgh", "abc"], "fgh")); 
  console.log(findIndex(["Red", "blue", "Blue", "Green"], "blue")); 
  console.log(findIndex(["a", "g", "y", "d"], "d")); 
  console.log(findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple")); 
  