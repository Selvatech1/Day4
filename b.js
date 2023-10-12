const toTitleCase = str => {
    return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
  };
  
  const convertToTitleCase = arr => {
    return arr.map(str => toTitleCase(str));
  };
  
  const stringArray = ["hello world", "this is a test", "javascript is fun"];
  
  const titleCaseArray = convertToTitleCase(stringArray);
  
  console.log("Original Array:", stringArray);
  console.log("Array in Title Case:", titleCaseArray);
  