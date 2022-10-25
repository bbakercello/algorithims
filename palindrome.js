function palindrome(string) {
    for(let i = 0; i < string.length / 2; i++) {
        if(string[i] !== string[string.length-1 -i]) return false;
    }
    return true;
}

console.log(palindrome("racecar"));
console.log(palindrome("another thing"));
console.log(palindrome("hellolleh"))