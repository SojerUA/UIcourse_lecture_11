/*let sideLength = +prompt('Please enter the square side length','10');

function multiply(sideLength) {
    if (isNaN(sideLength)) {
        return 'We need a number';
    }
    let result = (sideLength > 0);
    if (result) {
        return 'The square perimeter result' + ' ' + sideLength *4; 
    }
    else {
        return 'Wrong value';
    }
}
alert(multiply(sideLength));*/


let question = +prompt('Please enter side length', 5);

function perimeter() {
  let result = question*4;
  return (`Perimeter of square is ${result}`);
}

alert(perimeter());

