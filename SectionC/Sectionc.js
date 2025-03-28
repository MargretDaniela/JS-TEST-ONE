// Number four
function isPalindrome(word){
let reversed = word.split('').reverse().join(''); 
     return word === reversed;
   }
console.log(isPalindrome("level")); 
console.log(isPalindrome("hello"));

// Number three 
function sameOrDifferent(num1, num2) {
    if (num1 === num2) {
      return num1 * num2;
    } else {
      return num1 + num2;
    }
  }
  
  