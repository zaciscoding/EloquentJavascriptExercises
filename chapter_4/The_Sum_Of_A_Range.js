// The Sum Of A Range

/* Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from Start
up to (and including) end.
Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the previous program
and see whether it does indeed return 55.
As a bonus, modify your range function to take an optional third argument that indicates the step value.   */

var end = 10
var start = 1
var rangeArray = []
var i
var j
var step = 2
var container = 0 

function range (a, b, c) {
  if (arguments.length === 3) {
    for (i = a; i <= b; i += c) {
      rangeArray.push(i)
    }
  } else {
    for (i = a; i <= b; i++) {
      rangeArray.push(i)
    }
  }
  return rangeArray
}

function sum (a) {
  for (j = 0; j < a.length; j++) {
    container += a[j]
  }
  return container
}

console.log(sum(range(start, end, step)))
  