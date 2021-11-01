let number = prompt('Please enter the number to multiply','5');
number = Number(number);
//console.log(number);
if (number % 2 == 0) {
    alert('You entered an even number .'+ 'Result' + number * 8);
}
else if (number % 1 == 0) {
    alert('You entered ad odd number .'+ 'Result' + number * 9);
}