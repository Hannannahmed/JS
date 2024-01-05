//1. **Map Method:**
// Q: How does the `map` method work in JavaScript, and can you provide an example of when you might use it to manipulate an array of objects?

// const price = [20, 30, 40, 50, 60, 70];

// const salesPrice = price.map((price) => {
//   return price / 2;
// });

// console.log(salesPrice);

// const std = [
//     { name: "hannan", fee: 30 },
//     { name: "hamza", fee: 50 },
//     { name: "ali", fee: 70 }
// ]

// const stdmodified = std.map((student) => {
//    if (student.fee > 50) {
// return { name: student.name, fee: student.fee / 2 }
// } else{
//     return student;
// }
// });

// console.log(stdmodified);

/*2. **Filter Method:**
- Q: Explain the purpose of the `filter` method. Provide an example where you use `filter` to extract elements from an array based on a specific condition.*/

// let array =[20,30,40,50,60,70,90]

// const filter = array.filter((score) =>{
//     return score > 20;
// } )
// console.log(filter);

// const user = [
//     {name:"hannan", permium:true},
//     {name:"ali", permium:false},
//     {name:"Ashsrif", permium:false},
//     {name:"Basit", permium:true}
// ];

// const permiumUser= user.filter((users) => {
//  return !users.permium;

// })
// console.log(permiumUser);

/*3. **Sort Method:**
- Q: Discuss the default behavior of the `sort` method for strings and numbers. How would you use a custom comparison function to sort an array of objects by a specific property?
*/

// const Studnetlist=[
//   {name:"Hamza" , fee:60},
//   {name:"Atta" , fee:40},
//   {name:"Nehal" , fee:80}
// ]

// const resl = Studnetlist.sort((a,b) => {
// if(a.fee  > b.fee){
//   return 1;
// }else if (b.fee > a.fee){
//   return -1;
// }else{
//   return 0;
// }


// })
// console.log(resl);

/*4. **Reduce Method:**
- Q: Describe the purpose of the `reduce` method and provide an example where you use it to compute a single value from an array of numbers.*/

// const score = [20, 30, 40, 50, 60];

// const result = score.reduce((fun, preValue) => {
//     return fun + preValue;
// }, 0);

// console.log(result);

/*5. **Find Method:**
- Q: How does the `find` method differ from `filter`? Give an example of a scenario where using `find` is more appropriate than `filter`.  */
// const students = [
//   { id: 1, name: 'John', age: 25 },
//   { id: 2, name: 'Jane', age: 30 },
//   { id: 3, name: 'Doe', age: 22 },
//   { id: 4, name: 'Alice', age: 28 }
// ];

// const filteredStudents = students.filter(student => student.id === 2);
// console.log(filteredStudents);  

// const foundStudent = students.find(student => student.id === 2);
// console.log(foundStudent);  
/*6. **Combining Methods:**
- Q: Create a chain of array methods (`map`, `filter`, `reduce`, etc.) to transform an array of strings into a single concatenated string with a specific condition.*/

// const words = ['apple', 'banana', 'cherry', 'date', 'fig'];
// const concatenatedString = words
//     .filter(word => word.length > 3)  
//     .map(word => word.toUpperCase())  
//     .join(', ');                       
// console.log(concatenatedString);

/*7. **Callback Functions:**
- Q: Explain the concept of callback functions in the context of array methods. Provide an example of using a callback function with the `map` method.*/

// const numbers = [1, 2, 3, 4, 5];


// const double = (num) => {
//     return num * 2;
// };

// const doubledNumbers = numbers.map(double);

// console.log(doubledNumbers);  


/*9. **Immutable Operations:**
- Q: Discuss the importance of immutability when working with array methods. Demonstrate how you would perform immutable operations using methods like `map` or `filter`*/

// const number = [1, 2, 3, 4, 5];

// // Immutable operation using map
// const doubledNumber = number.map(num => num * 2);

// console.log("Original Array:", number);      // Output: [1, 2, 3, 4, 5]
// console.log("Doubled Numbers:", doubledNumber);  // Output: [2, 4, 6, 8, 10]


// /*10. **Performance Considerations:**
// - Q: Compare the performance implications of using `map` versus `forEach`. In what scenarios would you prefer one over the other, and why?*/
// // Original Array
// const numb = [1, 2, 3, 4, 5];

// // Using map
// const squaredNumbersMap = numb.map(num => num ** 2);
// console.log("Squared Numbers (Map):", squaredNumbersMap);

// // Using forEach
// const squaredNumbersForEach = [];
// numb.forEach(num => squaredNumbersForEach.push(num ** 2));
// console.log("Squared Numbers (ForEach):", squaredNumbersForEach);
// console.log(numb);
/*Dono ka output similar dikhega, lekin internal working mein map method ek naya array bana raha hai, 
jabki forEach method sirf existing array ko modify kar raha hai.*/

/*
11. **Map Method:**
- Q: How does the `map` method work in JavaScript, and can you provide an example of when you might use it to manipulate an array of objects?*/
// Original Array of Integers
// const NUMBERS = [1, 2, 3, 4, 5];

// // Using map for squaring each element
// const squaredNumbers = NUMBERS.map(num => num ** 2);

// console.log("Original Numbers:", NUMBERS);         // Output: [1, 2, 3, 4, 5]
// console.log("Squared Numbers:", squaredNumbers);   // Output: [1, 4, 9, 16, 25]


/*12. **Filter Method:**
- Q: Explain the purpose of the `filter` method. Provide an example where you use `filter` to extract elements from an array based on a specific condition.
*/
// Original Array of Numbers
// const integer= [10, 20, 30, 40, 50, 60, 70];

// // Using filter to extract numbers greater than 30
// const filteredNumbers = integer.filter(num => num > 30);

// console.log("Original Numbers:", integer);        // Output: [10, 20, 30, 40, 50, 60, 70]
// console.log("Filtered Numbers (>30):", filteredNumbers);  // Output: [40, 50, 60, 70]

/*13. **Sorting Objects:**
- Q: Given an array of objects with a 'price' property, use the `sort` method to arrange them in descending order based on their prices.*/
// Original Array of Objects
// Original Array of Objects
// const products = [
//   { name: 'Laptop', price: 800 },
//   { name: 'Phone', price: 600 },
//   { name: 'Tablet', price: 300 },
//   { name: 'Smartwatch', price: 150 },
// ];

// // Using sort to arrange objects in descending order based on prices
// const sortedProducts = products.sort((a, b) => b.price - a.price);

// console.log("Original Products:", products);
// console.log("Sorted Products (Descending Order):", sortedProducts);

/*14. **Reduce for Aggregation:**
- Q: Use the `reduce` method to find the total sum of all even numbers in an array of integers.*/
// Original Array of Integers
// const numcount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // Using reduce to find the total sum of even numbers
// const sumOfEvenNumbers = numcount.reduce((accumulator, currentNumber) => {
//     if (currentNumber % 2 === 0) {
//         return accumulator + currentNumber;
//     } else {
//         return accumulator;
//     }
// }, 0);

// console.log("Original Numbers:", numcount);
// console.log("Total Sum of Even Numbers:", sumOfEvenNumbers);

/*
15. **Find and Modify:**
- Q: Given an array of objects with 'id' properties, use the `find` method to locate an object with a specific 'id' and update its 'status' property to 'completed'.
*/
// Original Array of Objects with 'id' properties
// const items = [
//   { id: 1, status: 'pending' },
//   { id: 2, status: 'in-progress' },
//   { id: 3, status: 'pending' },
//   { id: 4, status: 'in-progress' }
// ];

// // Function to find and modify an object with a specific 'id'
// function updateStatusById(arr, targetId) {
//   const foundItem = arr.find(item => item.id === targetId);

//   if (foundItem) {
//       foundItem.status = 'completed';
//       console.log(`Item with id ${targetId} found and status updated.`);
//   } else {
//       console.log(`Item with id ${targetId} not found.`);
//   }
// }

// // Update the status of an object with id 3 to 'completed'
// updateStatusById(items, 3);
// console.log(items);
/*17. **Conditional Filtering:**
- Q: Implement a function that takes an array of objects with 'age' properties and returns an array of those who are adults (age 18 and above) using the `filter` method.
*/

// // Original Array of Objects with 'age' properties
// const people = [
//   { name: 'John', age: 25 },
//   { name: 'Jane', age: 16 },
//   { name: 'Doe', age: 30 },
//   { name: 'Smith', age: 17 }
// ];

// // Function to filter adults (age 18 and above)
// function filterAdults(arr) {
//   return arr.filter(person => person.age >= 18);
// }

// // Get the array of adults
// const adults = filterAdults(people);

// console.log("Original People:", people);
// console.log("Adults:", adults);


/*19. **Nested Array Operations:**
- Q: Given an array of arrays containing numbers, use a combination of array methods to flatten the structure and then calculate the sum of all the numbers.
*/
// Original Array of Arrays with Numbers
// const nestedNumbers = [[1, 2, 3], [4, 5], [6, 7, 8]];

// // Flatten the structure using flat method
// const flattenedNumbers = nestedNumbers.flat();

// // Calculate the sum of all numbers using reduce method
// const totalSum = flattenedNumbers.reduce((sum, number) => sum + number, 0);

// console.log("Original Nested Numbers:", nestedNumbers);
// console.log("Flattened Numbers:", flattenedNumbers);
// console.log("Total Sum of Flattened Numbers:", totalSum);


