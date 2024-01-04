 
const val = 100;
console.log(val >= 80 ? "pass" : "fail");


 

const arr = [1, 2, 4, 56, 98];

const fn = (ele) => {
  const newArr = ele.reduce((a, c) => a + c);
  const average = newArr / ele.length;
  return average;
};

const numbersArray = [5, 10, 15, 20, 25];
const averageResult = fn(numbersArray);
console.log(averageResult);


const student = {
  name: "John",
  age: 20,
  grades: [85, 90, 78, 95, 88],

  calculateAverage: function () {
    if (this.grades.length === 0) {
      return NaN; 
    }

    const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
    const average = sum / this.grades.length;

    return average;
  },
};


console.log("Student:", student.name);
console.log("Age:", student.age);
console.log("Grades:", student.grades);
console.log("Average Grade:", student.calculateAverage());




    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numbers.length; i++) {
  const result = numbers[i] % 2 === 0 ? 'even' : 'odd';
  console.log(`${numbers[i]} is ${result}`);
}

 


    const people = [
  { name: 'John', age: 25, address: { city: 'New York' } },
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 22, address: { city: 'San Francisco' } },
];


for (const person of people) {
  const cityName = person.address?.city || 'Unknown';

  console.log(`${person.name} lives in ${cityName}`);
}



const person = {
  name: 'John',
  age: 25,
  city: 'New York',
};

for (const key in person) {
  if (person.hasOwnProperty(key)) {
    
    const value = person[key];
    console.log(`${key}: ${value}`);
  }
}



for (let i = 0; i < 10; i++) {
  if (i === 5) {
    console.log("Breaking out of the loop at i =", i);
    break;
  }
  console.log("Inside the loop at i =", i);
}




function calculateTax(income) {
  const taxRate = income > 50000 ? 0.2 : income > 30000 ? 0.15 : 0.1;
  const taxAmount = income * taxRate;
  return taxAmount;
}


const income1 = 25000;
const tax1 = calculateTax(income1);
console.log(`For an income of $${income1}, the tax amount is $${tax1}`);

const income2 = 40000;
const tax2 = calculateTax(income2);
console.log(`For an income of $${income2}, the tax amount is $${tax2}`);

const income3 = 60000;
const tax3 = calculateTax(income3);
console.log(`For an income of $${income3}, the tax amount is $${tax3}`);
 

const car = {
  make: 'Toyota',
  model: 'Camry',
  startEngine: function () {
    console.log('Engine started. Vroom!');
  }
};

car.startEngine();
 



const obj1 = {
  name: 'Regular Function',
  sayHello: function() {
    console.log(`Hello, ${this.name}!`);
  }
};


const obj2 = {
  name: 'Arrow Function',
  sayHello: () => {
    console.log(`Hello, ${this.name}!`); 
  }
};

obj1.sayHello();
obj2.sayHello(); 
