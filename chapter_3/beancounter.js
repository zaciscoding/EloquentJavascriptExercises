// BEAN COUNTER

/* Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase "B"
characters in the string.
next, write a function called countChar that behaves like CountBs except it takes a second argument that incidcates the character
that is to be counted ( rather than counting only uppercase "B" characters). Rewrite countBs to make use of this new function.
*/

var string = 'Bubby Ballembo'
var i
var char = 'B'

function countBs (a) {
  return countChar(a, char)
}

function countChar (a, b) {
  for (i = 0; i <= a.length; i++) {
    if (a.charAt(i) === char) {
      console.log(i)
    }
  }
}

countBs(string)
