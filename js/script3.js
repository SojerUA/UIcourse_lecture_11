/*let palindrome = prompt('Please enter string or number', 'example');

//console.log(palindrome);

let lowerRegister = palindrome.toLowerCase();
//console.log(palindrome.toLowerCase());

let reverseString = lowerRegister.split('').reverse().join('');

function checkPalindrome (palindrome) {
    if (lowerRegister === reverseString) {
        return palindrome + ' ' + '- It`s a palindrome';
    }
    else {
        return palindrome + ' ' + '- It`s not a palindrome';
    }
}

alert(checkPalindrome(palindrome));*/

let x = prompt('Enter palindrome')
const isPalindrome = (x) => {
  return x.split("").reverse().join("").toLowerCase() === x.toLowerCase() ? true : false
}

alert(isPalindrome(x));