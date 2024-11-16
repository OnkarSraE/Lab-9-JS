//task 1- create student object

let student = {
    name: "John",
    age: 16,
    grade: 11,
    school: "Castlemore High School",
    greet: function () {
        console.log(`Hi, my name is ${this.name}!`);
        
    }

};

student.greet();


console.log(`Name: ${student.name}`);
console.log(`Age: ${student.age}`);
console.log(`Grade: ${student.grade}`);
console.log(`School: ${student.school}`);

//updating age
student.age = 18;
console.log(`Updated Age: ${student.age}`);

//task 2- parsing and stringify JSON
let jsonString = `{"title": "To Kill a Mockingbird", "author": "Harper Lee", "year": 1960, "genre": "Fiction"}`;
let book = JSON.parse(jsonString);
console.log(book);

let newJsonString = JSON.stringify(book);
console.log(newJsonString);

//task 3- using spread operator
let array1 = [1,2,3];
let array2 = [4,5,6];

let combinedArray = [...array1, ...array2];
console.log(combinedArray);

let person1 = {
    firstName: "John",
    lastName: "Muller",
    age: 23
};

let person2 = {
    ...person1, age:25
};

console.log(person1);
console.log(person2);


//task4- calculator object with methods
let calculator = {
    add: function (a, b) {
      return a + b;
    },
    subtract: function (a, b) {
      return a - b;
    },
    multiply: function (a, b) {
      return a * b;
    },
    divide: function (a, b) {
      if (b === 0) {
        return 'Error: Division by zero';
      }
      return a / b;
    }
  };
  

  console.log(calculator.add(3,5));
  console.log(calculator.subtract(8,3));
  console.log(calculator.multiply(4,4));
  console.log(calculator.divide(17,3));
  console.log(calculator.divide(17,0));
  
  
  
  
  
