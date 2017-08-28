// RECURSION

// Define a recursive function isEven corresponding to this description. The function should accept a number parameter
// and return a BOOLEAN.

var numOne = 50

function isEven (a) {
  if (a < 0) {
    return isEven(-1 * a)
  } else {
    console.log(a % 2 !== 1)
  }
};

console.log(isEven(numOne))
