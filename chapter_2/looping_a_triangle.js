// LOOPING A TRIANGLE

// Write a loop that akes sevel calls to console.log to output the following triangle :

// #
// ##
// ###
// ####
// #####
// ######
// #######

var i
var hash = '#'
var wantedLength = 7

for (i = hash.length; i <= wantedLength; i++) {
  if (i <= 1) {
    console.log('#')
  } else {
    console.log(hash += '#')
  }
}
