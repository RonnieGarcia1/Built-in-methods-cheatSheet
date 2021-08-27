//NUMBERS

//Number.parseInt() - converting number string into a number.
Number.parseInt("76"); //> 76

//Number.parseFloat() - Allows decimal place and returns a number.
Number.parseFloat("76.01"); //> 76.01

//Number.isNan() - Allows us to check for numbers.
Number.isNaN(NaN); //> true
Number.isNaN(76); //> false

//Math.ceil() -  gets the highest value from a number with decimal values.
Math.ceil(76.9); //> 77
Math.ceil(76.1); //> 77
Math.ceil(76.008756348756239001); //> 77


//MATH 

//.floor() - gets the lowest value from a number with decimal values.
Math.floor(76.1); //> 76
Math.floor(76.9); //> 76
Math.floor(76.9994385729384759999); //> 76

//Math.round() - will round a number to the nearest integer.
Math.round(76.1); //> 76
Math.round(76.5); //> 77
Math.round(76.95398573987); //> 77

//Math.max() - takes in any amount of numbers and returns the highest one.
Math.max(10, -1, 76, 11); //> 76

//Math.min() - takes in any amount of numbers and returns the lowest one.
Math.min(10, -1, 76, 11); //> -1
Math.min(10, "A"); //> NaN

//Math.random() - number returns a random value between 0 and 1.
Math.random() //> 0.01014371907929501

//This can seem kind of useless at first. But, combined with some other methods, it can return a random number between any value.

//> Random value between 0 and 99;
Math.floor(Math.random() * 100);

//> Random value between 1 and 100;
Math.ceil(Math.random() * 100);

//> Random value between 0 and 9;
Math.floor(Math.random() * 10);

//> Random value between 1 and 4;
Math.ceil(Math.random() * 4);

//> returns a number between 0 - 10
Math.floor(Math.random() * 11);

//> returns a number between a range of two numbers

Math.ceil(Math.random() * 10)+ 10 // adds to the value being multiplied to meet the max value in the range


//Objects

//Because objects contain no inherent order, looping through or evaluating objects can be tricky. The following methods let you transform some object information into arrays.

// Object.values() -  returns an array of all the values of the given object.

Object.values({ heads: 10, tails: 9 }); //> [ 10, 9 ];

// It only returns the values at the first level.

Object.values({flips: {
    heads: 10,
    tails: 9,
  },
}); //> [ { heads: 10, tails: 9 } ]

// Object.keys() - returns an array of all the keys of the given object, as strings.

Object.keys({ heads: 10, tails: 9 });
//> [ "heads", "tails" ];

Object.keys({
  flips: {
    heads: 10,
    tails: 9,
  },
}); //> [ "flips" ]

// It only returns the keys at the first level.


// The Object.entries() method returns an array of arrays. The first element of each nested array is the key and the second element is the value.

Object.entries({ heads: 10, tails: 9 });
//> [ [ 'heads', 10 ], [ 'tails', 9 ] ]

// It only returns the entries at the first level.

Object.entries({
  flips: {
    heads: 10,
    tails: 9,
  },
}); //> [ [ 'flips', { heads: 10, tails: 9 } ] ]

// While there are a few built-in array methods that can be useful in certain situations, the most regularly useful one is Array.isArray().

// Array.isArray()
// You may have noticed that checking for an array can be tricky.

[] === []; //> false
typeof []; //> 'object'

// To check that a value is an array, you can use Array.isArray().

Array.isArray([]); //> true
Array.isArray(["heads", "tails"]); //> true


//Lesson Notes

// Learning Objectives
// By the end of this lesson you should be able to:

// Identify a built-in method.
// Use common Number methods like .parseInt(), .parseFloat(), and .isNaN().
// Use common Math methods like .ceil(), .floor(), .round(), .max(), .min(), and .random().
// Use common Object methods like .values(), .keys(), and .entries().
// Use the common Array.isArray() method.

// Guiding Questions
// What is a built-in method?

// Documentation can sometimes be difficult to read, but is essential to your success as a developer. Take a look at the following page from the Mozilla Developer Network that describes the Math.max() method. Then, describe in your own words what the Math.max() method does.

// MDN: Math.max()

// Why is the Number.isNaN() method helpful?

// a: allows us to check if a number is present or not.

// Why is the Array.isArray() method helpful?

// a: returns a boolean. this could be helpful in cases where we need to know if there as an array present in our program. 

// What does the Math.random() method do?

// a: returns a random number between 0 & 1.

// How can you return a random number between 0 and 9?

Math.floor(Math.random() * 10);

// How can you return a random number between 0 and 99?

Math.floor(Math.random() * 100)

// How can you return a random number between 1 and 100?

Math.ceil(Math.random() * 100)

// How can you return a random number between 1 and 50?

Math.ceil(Math.random() * 50)

// How can you return a random number between 10 and 20?

Math.ceil(Math.random() * 10)+ 10;


// Given an array of integers where some numbers are strings, return the largest integer as a number.

// e.g. [4, "10", 9]


function largestInteger(highest){
    const map1 = highest.map(x => x * 1);

    return Math.max(...map1);
    }
    console.log(largestInteger([4, "10", 9]));

/*
Given an object, verify that none of the values of those keys are NaN.

e.g. { inStock: 11, maximum: 20 }



Given an object with a number of keys, choose a key at random and return the value of that key.

e.g. { firstName: "Francisco", lastName: "Carrillo", age: 28 }
*/

