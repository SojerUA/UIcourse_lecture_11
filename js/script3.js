let palindrome = prompt('Please enter string or number', 'example');

if (checkPalindrome(palindrome) == true) {
    alert(palindrome + '- It`s palindrome');
}
else {
    alert(palindrome + '- It`s not palindrome');
}
function checkPalindrome(palindrome) {
    if (palindrome == true) {
        return palindrome.toLowerCase() == palindrome.toLowerCase().split('').reverse('').join('');
    }
}

