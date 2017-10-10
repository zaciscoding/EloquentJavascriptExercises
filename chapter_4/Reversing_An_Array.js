
// Reversing_An_Array

// function one

var array = [1, 2, 3, 4, 5]
var i
var container = []

function reverseArray (a) {
  for (i = 0; i < array.length; i++) {
    container.unshift(a[i])
  }
  return container
}

console.log(reverseArray(array))

// function two

var arrayTwo = [1, 2, 3, 4, 5]

function reverseArrayInPlace (a) {
  while (arrayTwo.length) {
    var shifted = arrayTwo.pop()
    arrayTwo.shift(shifted)
  }
  return arrayTwo
}

console.log(reverseArrayInPlace(arrayTwo))


}
var arrayTwo = [1, 2, 3, 4, 5]

function reverseArrayInPlace (a) {
  for ( i = 0 ; i < arrayTwo.length : i++) {
    var stub = arrayTwo.pop()
    arrayTwo.unshift(stub) 
  }
  return arrayTwo
}
console.log(reverseArrayInPlace(arrayTwo))