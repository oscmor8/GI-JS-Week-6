// write a program that takes an array and doubles each element in the array.
// If the integer is a multiple of 6, then tripple the element. return a new array, with the
// new numbers. use a for loop to iterate through the array

// function doublesArray(arr) {
//   const newArray = [];
//   for (i = 0; i < arr.length; i++) {
//     newArray.push(arr[i] * 2);
//   }
//   return newArray;
// }

// console.log(doublesArray([1, 2, 3, 4, 5]));

//create a function
//create new array
//the function should take a array as an argument
//create a for loop that iterates through the array
//check to see if the number is a mulple of 6
//if not multiple of 6, double each number as we come to it
//if multiple of 6, triple it
//add number to new array
//return new array

// function doublesArray2(arr) {
//   const newArray = [];
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] % 6 === 0) {
//       newArray.push(arr[i] * 3);
//     } else {
//       newArray.push(arr[i] * 2);
//     }
//   }
//   return newArray;
// }

// console.log(doublesArray2([2, 6]));

// 4 Find the Vowels
// Understanding the challenge
// A function that takes a string as argument and returns the number of vowels contained in that string.

// The vowels are “a”, “e”, “i”, “o”, “u”.

// function vowelNumbers(str) {
//   str = str.split("");
//   let vowelCount = 0;
//   console.log(str);
//   for (i = 0; i < vowelNumbers.length; i++) {
//     if (str[i].includes("a")) {
//       vowelCount++;
//     } else if () {

//     }
//   }
//   return `vowel count is ${vowelCount}`;
// }

// console.log(vowelNumbers("apple"));

// Given an array of numbers create a function that can be used as a call back for a filter method to create a new array of odd numbers

// const numbers = [1, 2, 3, 4, 5, 6, 7];
// function oddNumbers(nums) {
//   return nums % 2 !== 0;
// }
// const newArray = numbers.filter(oddNumbers);
// console.log(newArray);

// function evenNumbers(arr) {
//   let newArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       newArray.push(arr[i]);
//     }
//   }
//   return newArray;
// }

// console.log(evenNumbers([1, 2, 3, 4, 5, 6]));

// Write a function that takes an array of integers as input and returns a new array with all the duplicate elements removed.

// Example:
// Input: [1, 2, 2, 3, 4, 4, 5]
// Output: [1, 2, 3, 4, 5]

// function duplicate(arr){
//   let newArray = []
//   for(let i = 0; i < arr.length; i++){
//     if (arr[i])
//   }
// }

// =================== reverse string ==================== //
function reverseString(string) {
  let splitString = string.split("");
  splitString.reverse();
  let newString = splitString.join("");
  return newString;
}

console.log(reverseString("oscar"));

// // =========================== Palindrome =================== //
// function palindrome(str) {
//   let splitString = str.split("");
//   let reverse = splitString.reverse();
//   let newString = reverse.join("");

//   if (str === newString) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(palindrome("racecar"));

// // find the minumum of 2 numbers

// function minumum(x, y) {
//   if (x < y) {
//     return x;
//   } else {
//     return y;
//   }
// }

// console.log(minumum(2, 4));

// //

// function sumArray(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }

// console.log(sumArray([2, 3, 4]));

// function rearrange(arr) {
//   let newStrings = [];
//   let newNumbers = [];

//   for (i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "string") {
//       newStrings.push(arr[i]);
//     } else if (typeof arr[i] === "number") {
//       newNumbers.push(arr[i]);
//     }
//   }
//   return [newNumbers, newStrings];
// }

// console.log(rearrange([1, 2, "tree", "grass"]));

// function numOrWords(array) {
//   let numbers = 0;
//   let strings = 0;
//   for (i = 0; i < array.length; i++) {
//     if (typeof array[i] === "string") {
//       strings += 1;
//       return "we are officially stringing";
//     } else if (typeof array[i] === "numbers") {
//       numbers += 1;
//       return "numbers yeah";
//     }
//   }
//   return `there were ${numbers} numbers and ${strings} strings`;
// }

// console.log(numOrWords(1, 5, "something", 6, "array"));

// Practice problem 1: Write a JavaScript program to construct the following pattern, using a nested for loop.

// function constructPattern(n) {
//   for (let i = 1; i <= n; i++) {
//     let pattern = "";

//     for (let j = 1; j <= i; j++) {
//       pattern += "*";
//     }

//     console.log(pattern);
//   }
// }

// Call the function with the number of rows as a parameter
// const numRows = 5;
// constructPattern(numRows);

// let string = "hello world";
// function reverseWords(str) {
//   const words = str.split(" ");
//   words.reverse();
//   const reverseString = words.join(" ");
//   return reverseString;
// }

// console.log(reverseWords(string));

// Design a function that takes an array of integers as input and returns the sum of all the positive integers in the array. Implement the function in JavaScript and consider the following requirements:

// The function should be named "sumPositiveIntegers".
// The function should take an array of integers as a parameter.
// The function should return the sum of all the positive integers in the array.
// If the array is empty or does not contain any positive integers, the function should return 0.
// Example:
// Input: [2, -4, 6, 0, -8, 3]
// Output: 11 (since 2 + 6 + 3 = 11)

let array2 = [2, -4, 6, 0, -8, 3];
function positiveSum(arry) {
  let sum = 0;
  for (let i = 0; i < arry.length; i++) {
    if (arry[i] > 0) {
      sum += arry[i];
    }
  }
  return sum;
}

console.log(positiveSum(array2));

// Problem: Find the missing number in an array of consecutive numbers.

// You are given an array of numbers containing all the integers from 1 to N, except for one missing number. Your task is to write a function that finds and returns the missing number.

let array4 = [1, 2, 4, 5, 6, 7, 8];
function missingNumbers(arr) {
  const n = arr.length + 1;
  console.log(n);
  const expectedSum = (n * (n + 1)) / 2;
  let actualSum = 0;
  for (let i = 0; i < arr.length; i++) {
    actualSum += arr[i];
  }

  const missingNumber = expectedSum - actualSum;

  return missingNumber;
}

console.log(missingNumbers(array4));

function isAnagram(x, y) {
  const splitX = x.split("");
  // console.log(splitX);
  const splitY = y.split("");
  // console.log(splitY);

  const sortXString = splitX.sort();
  const sortYString = splitY.sort();
  // console.log(sortXString);
  // console.log(sortYString);

  const newXString = sortXString.join("");
  const newYstring = sortYString.join("");

  if (newXString === newYstring) {
    return true;
  } else {
    return false;
  }
}

console.log(isAnagram("listen", "potato"));

// another way to do this
function isAnagram2(x, y) {
  const stringX = x.replace(/\s/g, "").toLowerCase().split("").sort().join("");
  const stringY = y.replace(/\s/g, "").toLowerCase().split("").sort().join("");

  if (stringX === stringY) {
    return true;
  } else {
    return false;
  }
}

console.log(isAnagram2("listen", "silent"));

// Problem: Find the largest sum of any two elements in an array.
// You are given an array of numbers. Your task is to write a function that finds and returns the largest sum of any two elements in the array.
let array = [1, 2, 3, 4, 5];
function largestSum(arr) {
  for (let i = 0; i < arr.length; i++) {
    const sortArray = arr.sort().reverse();
    const sum = sortArray[0] + sortArray[1];
    return sum;
  }
}

console.log(largestSum(array));

// Remove the spaces found in a string
// let word = "Hello world I am oscar";
// function removeSpaces(str) {
//   let replaceSpaces = str.replaceAll(" ", "");
//   return replaceSpaces;
// }

// console.log(removeSpaces(word));

// Return a Boolean if a number is divisible by 10

// function divisibleBy10(num) {
//   if (num % 10 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(divisibleBy10(5));

// Return the number of vowels in a string

function numberOfVowels(str) {
  let sum = 0;
  let vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      sum++;
    }
  }
  return sum;
}

// console.log(numberOfVowels("aeiou"));

//EASY: Create an array of students holding their last name, first name, and age with 3 students. To validate, please log a greeting with the first name, last name and age of the 2nd student. The output should look like "Hello, my name is John Doe and I'm 19 years old."

const students = [
  { lastName: "Morado", firstName: "Oscar", age: 22 },
  { lastName: "doe", firstName: "john", age: 35 },
  { lastName: "sebastian", firstName: "jose", age: 22 },
];
console.log(
  `hello my name is ${students[0].firstName} ${students[0].lastName} and Im ${students[0].age} years old`
);

// //MEDIUM: Create a program that accepts a number (1-12) as input and logs to the console that number and its corresponding month. For example: if the user enters the number 3, then it should return the month “March.” Alert the user if they enter an invalid number (e.g. less than 1 or greater than 12).

// function numberAndMonth(num) {
//   let months = [""];
// }

// Problem: Given an array of integers, find the two numbers that add up to a given target sum. Return the indices of the two numbers as an array.

// Write a function that takes in an array of integers and a target sum. The function should find and return an array containing the indices of two numbers in the array that add up to the target sum.

let nums1 = [2, 7, 11, 15];
let target1 = 9;
function twoSum(nums, target) {
  const complements = {}; // Hash table to store complements and their indices

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (complements[complement] !== undefined) {
      return [complements[complement], i];
    }

    complements[nums[i]] = i;
  }

  return []; // No solution found
}

console.log(twoSum(nums1, target1));

// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

// i.e.

// friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
// Note: keep the original order of the names in the output.
let input = ["Ryan", "Kieran", "Jason", "Yous"];
function filterRealFriends(arry) {
  let newArray = [];

  for (let i = 0; i < arry.length; i++) {
    if (arry[i].length === 4) {
      newArray.push(arry[i]);
    }
  }
  return newArray;
}

console.log(filterRealFriends(input));

// Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

// For example:

// time = 3 ----> litres = 1

// time = 6.7---> litres = 3

// time = 11.8--> litres = 5

const time = 3;
const time2 = 6.7;
const time3 = 11.8;
function nateLovesCycling(num) {
  let waterToLiters = num * 0.5;
  return Math.floor(waterToLiters);
}

console.log(nateLovesCycling(time));
console.log(nateLovesCycling(time2));
console.log(nateLovesCycling(time3));

// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.
const flower1 = 4;
const flower2 = 5;
function doesSheLoveMe(flower1, flower2) {
  const isFlower1Even = flower1 % 2 === 0;
  const isFlower2Even = flower2 % 2 === 0;

  return isFlower1Even !== isFlower2Even;
}

console.log(doesSheLoveMe(flower1, flower2));

// Practice problem 1: Write a JavaScript program to construct the following pattern, using a nested for loop.
// *
// * *
// * * *
// * * * *
// * * * * *

function constructPattern2(n) {
  for (let i = 1; i <= n; i++) {
    let pattern = "";

    for (let j = 1; j <= i; j++) {
      pattern += "*";
    }

    console.log(pattern);
  }
}

constructPattern2(5);

// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):

// 35231 => [1,3,2,5,3]
// 0 => [0]

// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function oddOrEven(num) {
  if (num % 2 === 0) {
    return "even";
  } else if (num % 2 === 1) {
    return "odd";
  }
}

console.log();

const findMissingNum = (arr) => {
  let missingNum = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr.indexOf(i) == -1) {
      missingNum += i;
    }
  }
  return missingNum;
};
console.log(findMissingNum([1, 2, 4, 5, 6]));

let string1 = "listen";
let string2 = "silent";
function isAnagram(string1, string2) {
  const newString1 = string1.split("").sort().join("");
  const newString2 = string2.split("").sort().join("");

  if (newString1 === newString2) {
    return true;
  } else {
    return false;
  }
}

console.log(isAnagram(string1, string2));

// Demonstrate an example of What language constructions do you use for iterating over object properties and array items?
