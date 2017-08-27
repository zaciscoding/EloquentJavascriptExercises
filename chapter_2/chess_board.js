/* write a program that creates a string that represents an 8x8 grid using new line characters to
set seperate lines. at each position of the grid there is either a space or a "#" character. The characters should
form a chess board  */

/*

# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #

*/

var size = 8     // board size
var board = ''   // board map

for (var i = 0; i < size; i++) {     // rows
  for (var j = 0; j < size; j++) {    // columns
    (i + j) % 2 === 0 ? board += ('#') : board += (' ')
  }
  board += '\n'
}
console.log(board)
