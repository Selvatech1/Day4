const numbers = [2, 3, 5, 8, 13, 21];

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log("The sum of numbers is:", sum);
