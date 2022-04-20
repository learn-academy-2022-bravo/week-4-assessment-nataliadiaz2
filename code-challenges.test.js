// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

describe("shuffledArray", () => {
 it("takes in an array, removes the first item from the array and shuffles the remaining content", () => {
   const colors1 = ["purple", "blue", "green", "yellow", "pink"]
   // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
   const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
   // Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
   expect(shuffledArray(colors1)).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]))
   expect(shuffledArray(colors2)).toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]))
 })
})

// ● shuffledArray › takes in an array, removes the first item from the array and shuffles the remaining content
//
//   ReferenceError: shuffledArray is not defined

// b) Create the function that makes the test pass.

//Create a function - shuffledArray
//Parameter - array
//Use the .slice() method to take remove the first item from the array
//Use the .sort() method followed by Math.random() to randomize the strings in the sliced array.

const shuffledArray = (array) => {
  let sliced = array.slice(1)
  return sliced.sort(() => .5 - Math.random());
}

// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.

describe("minAndMax", () => {
  it("takes an array of numbers and returns an array of the minimum and maximum numbers in that order", () => {
    const nums1 = [3, 56, 90, -8, 0, 23, 6]
    // Expected output: [-8, 90]
    const nums2 = [109, 5, 9, 67, 8, 24]
    // Expected output: [5, 109]
    expect(minAndMax(nums1)).toEqual([-8, 90])
    expect(minAndMax(nums2)).toEqual([5, 109])
  })
})

// ● minAndMax › takes an array of numbers and returns an array of the minimum and maximum numbers in that order
//
//    ReferenceError: minAndMax is not defined

// b) Create the function that makes the test pass.

//Create a function - minAndMax
//Parameter - array
//Create an empty array to hold min and max
//Create min and max variable, use .push() method to have the output into new empty array
//Use Math.min.apply and Math.max.apply to have it take in array elements
//Sort the min and max numbers
//Return the new array with just the two filtered numbers

const minAndMax = (array) => {
  let total = []
  let min = total.push(Math.min.apply(Math, array))
  let max = total.push(Math.max.apply(Math, array))
  return total.sort(function (a,b){return a-b})
}


// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

// Write a test for a function that logs "eat food" if you are hungry and "keep working" if you are not hungry

describe("combinedArray", () => {
  it("takes in two arrays as arguments and returns one array with no duplicate values", () => {
    const testArray1 = [3, 7, 10, 5, 4, 3, 3]
    const testArray2 = [7, 8, 2, 3, 1, 5, 4]
    // Expected output: [3, 7, 10, 5, 4, 8, 2, 1]
    expect(combinedArray(testArray1,testArray2)).toEqual([3, 7, 10, 5, 4, 8, 2, 1])
  })
})

// ● combinedArray › takes in two arrays as arguments and returns one array with no duplicate values
//
//   ReferenceError: combinedArray is not defined

// b) Create the function that makes the test pass.

//Create a function - combinedArray
//Parameter - Array
//Combine both arrays
//Remove duplicate values with a spread operator
//Return one array

const combinedArray = (array1, array2) => {
  let combo = array1.concat(array2)
  return [... new Set(combo)]
}
