function rotateArray(arr, k) {
    if (k < 0) {
      
      k = k % arr.length + arr.length;
    } else {
      k = k % arr.length;
    }
    
    
    const rotatedPart = arr.slice(0, arr.length - k);
    const remainingPart = arr.slice(arr.length - k);
    
    return remainingPart.concat(rotatedPart);
  }
  
  const originalArray = [1, 2, 3, 4, 5];
  const rotations = 2;
  
  const rotatedArray = rotateArray(originalArray, rotations);
  
  console.log("Original Array:", originalArray);
  console.log("Rotated Array:", rotatedArray);
  