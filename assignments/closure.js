// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
let myName = 'Kyle';

function saysHi() {
  console.log(`Hi, my name is ${myName}!`)
};

myName = 'Jimmy'

saysHi();

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let total = 0;
  return function () {
    total++;
    return total;
  }
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2


// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  let total = 0;
  return {
  // `increment` should increment a counter variable in closure scope and return it.
    increment: function (){
      total++;
      return total;
    },
// `decrement` should decrement the counter variable and return it.
    decrement: function () {
      total--;
      return total;
    }
  }
};

const counter = counterFactory();
