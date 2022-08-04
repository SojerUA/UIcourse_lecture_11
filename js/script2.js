/*let number = +prompt('Please enter the number to multiply','5');

function multiply(number) {
    if (isNaN(number)) {
        return 'It`s not what we need';
    }
    if (number % 2) {
        let givenNumber = ('You entered an even number.'+ ' ' + 'Result' + ' ' + number * 8);
        return givenNumber;
    }
    else {
        let evenNumber = ('You entered ad odd number.'+ ' ' + 'Result' + ' ' + number * 9);
        return evenNumber;
    }
}
alert(multiply(number));*/

let number = +prompt('Please enter a number', 10);

function multiply() {
  if (number % 2) {
    return number * 9;
  } else {
    return number * 8;
  }
}
alert(multiply());