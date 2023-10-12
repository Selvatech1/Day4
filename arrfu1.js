const printOddNumbers = arr => {
    const oddNumbers = arr.filter(number => number % 2 !== 0);
  
    if (oddNumbers.length === 0) {
      console.log("No odd numbers found in the array.");
    } else {
      console.log("Odd Numbers in the Array:", oddNumbers);
    }
  };
  
  const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  
  printOddNumbers(numberArray);
  