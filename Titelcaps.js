function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }
  
  function convertToTitleCase(arr) {
    return arr.map(str => toTitleCase(str));
  }
  
  const stringArray = ["Selva", "ananth", "java is fun"];
  const titleCaseArray = convertToTitleCase(stringArray);
  
  console.log(titleCaseArray);