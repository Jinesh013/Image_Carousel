var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

function findMostFrequent(arr) {
  // Object to store the frequency of each element
  var frequency = {};
  var maxFreq = 0;
  var mostFrequent;

  // Iterate through the array to count the occurrences of each element
  for (var i = 0; i < arr.length; i++) {
    var element = arr[i];
    if (frequency[element]) {
      frequency[element]++;
    } else {
      frequency[element] = 1;
    }

    // Check if this element is the most frequent
    if (frequency[element] > maxFreq) {
      maxFreq = frequency[element];
      mostFrequent = element;
    }
  }

  // Format the result
  return mostFrequent + " ( " + maxFreq + " times )";
}

// Sample Output
console.log(findMostFrequent(arr1)); 
