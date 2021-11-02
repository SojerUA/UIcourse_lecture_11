let palindrome = prompt('Please enter string or number', 'example');

console.log(palindrome);

let lowerRegister = palindrome.toLowerCase();
console.log(palindrome.toLowerCase());

let reverseString = lowerRegister.split('').reverse().join('');

function checkPalindrome (palindrome) {
    if (lowerRegister === reverseString) {
        return 'It`s a palindrome' + ' ' + palindrome;
    }
    else {
        return 'It`s not a palindrome' + ' ' + palindrome;
    }
}

alert(checkPalindrome(palindrome));
