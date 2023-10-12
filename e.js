const isPalindrome = str => {
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return cleanedStr === cleanedStr.split('').reverse().join('');
  };
  
  const findPalindromes = arr => {
    return arr.filter(str => isPalindrome(str));
  };
  
  const stringArray = ["racecar", "hello", "madam", "level", "world", "deified"];
  
  const palindromeArray = findPalindromes(stringArray);
  
  console.log("Palindromes in the Array:", palindromeArray);
  