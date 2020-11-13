let num1 = process.argv[2];
let num2 = process.argv[3];
let temp = 0, rem = 0, sum = 0;
function isPalindrome(num1, num2) {
    while (num1 > 0) {
        temp = num1;
        rem = temp % 10;
        num1 = Math.floor(num1 / 10);
        sum = (sum * 10) + rem;
    }
    if (num2 == sum) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isPalindrome(num1, num2));