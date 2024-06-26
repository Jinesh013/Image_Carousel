function capitalizeWords(str) {
    // Split the string into words
    let words = str.split(' ');
    
    // Capitalize the first letter of each word
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].substring(1);
    }
    
    // Join the words back into a single string
    return words.join(' ');
  }
  
  // Test Data
  console.log(capitalizeWords('js string exercises'));
  