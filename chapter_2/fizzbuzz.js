// FIZZBUZZ

/* Write a program that uses console.log to print all the numbers from 1 to 100
, with two exceptions. For numbers divisible by 3, print ' Fizz ' instead of the number, and for numbers
divisible by 5 print 'buzz' instead. When you have that working, modify your program to print "FizzBuzz"
for the numbers that are divisble by both 3 and 5. */

var i

for (i = 0; i < 100; i++) {
  if (i % 3 && i % 5 === 0) {
    console.log('Fizzbuzz')
  } else if (i % 3 === 0) {
    console.log('Fizz')
  } else if (i % 5 === 0) {
    console.log('Buzz')
  } else {
    console.log(i)
  }
}
