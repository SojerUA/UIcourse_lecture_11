let sideLength = +prompt('Please enter the square side length','10');

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
alert(multiply(sideLength));
