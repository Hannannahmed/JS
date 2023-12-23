//1. Question: Reverse a string without using the built-in reverse() method.

function myString(inputString) {
  let reversedString = "";
  for (let i = inputString.length -  1; i >= 0; i--) {
      reversedString += inputString[i];
  }
  return reversedString;
}
let originalString = "Hello, World!";
let reversedString = myString(originalString);
console.log("Original String:", originalString);
console.log("Reversed String:", reversedString);


//2. Question: Count the number of vowels in a given string.

function countVowels(string){
  let count=0;
  for (const char of string) {
 if(char === "a" || char === "e" || char === "o" || char === "u" || char === "i" ){

count++;

 }    
  }
console.log(count);

 }
countVowels("hannan");


//3. Question: Convert the first letter of each word in a sentence to uppercase.

var word = "hello world";
var modifiedWord = word.replace("h", "H").replace("w", "W");

console.log("Original Word:", word);
console.log("Modified Word:", modifiedWord);

//4. Question: Check if a string is a palindrome.

function isPalindrome(str) {
 
  const reversedStr = str.split('').reverse().join('');

  
  if (str === reversedStr) {
      return "Palindrome";
  } else {
      return "Not Palindrome";
  }
}


const result = isPalindrome("madam");
console.log(result);  


//5. Question: Find the sum of all positive numbers in an array. 


function sumOfPositiveNumbers(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] > 0) {
          sum += numbers[i];
      }
  }

  return sum;
}


//6. Question: Find the index of the first occurrence of a specific element in an array.

const array = [1, -2, 3, -4, 5];
const reslt = sumOfPositiveNumbers(array);
console.log(`The sum of positive numbers in the array is: ${reslt}`);


function findIndex(array, targetElement) {
 
  return array.indexOf(targetElement);
}


const numbers = [1, 2, 3, 4, 5];
const targetElement =5;
const index = findIndex(numbers, targetElement);

if (index !== -1) {
  console.log(`The first occurrence of ${targetElement} is at index ${index}.`);
} else {
  console.log(`${targetElement} is not found in the array.`);
}


//7. Question: Remove all duplicates from an array without built-in methods.

const originalArray = [1, 2, 3, 4, 2, 5, 6, 3, 7, 8, 1];

function removeDuplicatesnumber(inputArray) {
  let uniqueArray = [];

  for (let i = 0; i < inputArray.length; i++) {
      if (uniqueArray.indexOf(inputArray[i]) === -1) {
          uniqueArray.push(inputArray[i]);
      }
  }

  return uniqueArray;
}

const newArray = removeDuplicatesnumber(originalArray);
console.log("newArray",newArray);

//8. Question: Sort the array in ascending and descending without built-in methods.

function bubbleSortAscending(arr) {
  var n = arr.length;
  for (var i = 0; i < n; i++) {
      for (var j = 0; j < n - i - 1; j++) {
          if (arr[j] > arr[j + 1]) {
              
              var temp = arr[j];
              arr[j] = arr[j + 1];
              arr[j + 1] = temp;
          }
      }
  }
}
function bubbleSortDescending(arr) {
  var n = arr.length;

  for (var i = 0; i < n; i++) {
      for (var j = 0; j < n - i - 1; j++) {
          if (arr[j] < arr[j + 1]) {
              
              var temp = arr[j];
              arr[j] = arr[j + 1];
              arr[j + 1] = temp;
          }
      }
  }
}
var myArray = [64, 34, 25, 12, 22, 11, 90];
bubbleSortAscending(myArray);
console.log("Ascending order:", myArray);
bubbleSortDescending(myArray);
console.log("Descending order:", myArray);


//9. Question: Print all even numbers between 1 and 20 using a while loop.

let number = 1;

while (number <= 20) {
    if (number % 2 === 0) {
        console.log(number);
    }

    number++;
}

//10. Question: Calculate the factorial of a number using a do-while loop.

function calculateFactorial(number) {
  let result = 1;
  let i = 1;

  do {
      result *= i;
      i++;
  } while (i <= number);

  return result;
}


const factorialOf5 = calculateFactorial(5);
console.log("Factorial of 5:", factorialOf5);

//11. Question: Iterate through the properties of an object using a for-in loop.

const car = {
  make: 'Toyota',
  model: 'Camry',
  year: 2022,
  color: 'Blue'
};


for (let key in car) {
  
  console.log(key + ': ' + car[key]);
}

//12. Question: Loop through an array using a for-of loop and double each element.

const numbrs = [1, 2, 3, 4, 5];


for (let number of numbrs) {
   
    console.log(number * 2);
}


//13. Question: Check if a number is even or odd and return a corresponding message.

function checkEvenOrOdd(number) {
  if (number % 2 === 0) {
      return "The number is even.";
  } else {
      return "The number is odd.";
  }
}

const resultForEven = checkEvenOrOdd(4);
console.log(resultForEven);

const resultForOdd = checkEvenOrOdd(7);
console.log(resultForOdd);




//14. Question: Find the maximum of three numbers using nested ternary operators.
function findMaximum(num1, num2, num3) {
  const maximum = num1 > num2
      ? (num1 > num3 ? num1 : num3)
      : (num2 > num3 ? num2 : num3);

  return maximum;
}

const rsult = findMaximum(10, 5, 8);
console.log("Maximum number:", rsult); 

//15. Question: Determine if a year is a leap year or not.

function isLeapYear(year) {
  

  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
      return true;  
  } else {
      return false; 
  }
}


const resultForLeapYear = isLeapYear(2024);
console.log(resultForLeapYear);
