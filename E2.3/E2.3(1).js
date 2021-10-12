let string = prompt('Enter a number');
let number =+ string;
parity = undefined

if (typeof(number) == "number" && isNaN(number) != true) {
  parity = number % 2
  if (parity == 0) {
    console.log('Number ' + number + ' is even')
  } else {
    console.log('Number ' + number + ' is odd')
  }
} else {
  console.log('Is not a number')
}