// /**
//  * @param {number[]} nums1
//  * @param {number[]} nums2
//  * @return {number}
//  */
 
//  const findMedianSortedArrays = function(nums1, nums2) {
//     let array = []
//     let median = 0
//      for(let x=0;x<=nums1.length; x++){
//          for(let y=0; y<nums2.length; y++){
//              if (nums1[x]<nums2[y]){
//                  array.push(nums1[x])
//              }else if(nums2[y]<nums1[x]){
//                  array.push(nums2[y])
//              }console.log(array)
//          }
//         }
//      if(array.length % 2 !== 0){
//             console.log(array[(array.length+1)/2])
//          }else{
//              console.log(((array[array.length/2])+(array[(array.length/2)+1]))/2)
//          }
//      }    
//  console.log(findMedianSortedArrays([1,3,4],[2,6,8,9]))

//Given an integer number n, return the difference between the product of its digits and the sum of its digits.
 

//Example 1:

// Input: n = 234
// Output: 15 
// Explanation: 


/* Product of digits = 2 * 3 * 4 = 24 
Sum of digits = 2 + 3 + 4 = 9 
Result = 24 - 9 = 15
Example 2:

// Input: n = 4421
// Output: 21
// Explanation: 
// Product of digits = 4 * 4 * 2 * 1 = 32 
// Sum of digits = 4 + 4 + 2 + 1 = 11 
// Result = 32 - 11 = 21*?




// Palindrome Number.


// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward.

// For example, 121 is a palindrome while 123 is not.
 

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 

// Constraints:

// -231 <= x <= 231 - 1 */

// /**
//  * @param {number} x
//  * @return {boolean}
//  */
//  var isPalindrome = function(x) {
//     let array = Array.from(String(x), Number)
//     j = array.length-1
//     if(array.length === 1){
//         return true
//     }
//     for(let i=0;i<array.length;i++){
//             if(array[i]===array[j]){
//                 j-=1
//             if(j===0){return true}      
//         }else {
//             return false
//         }
//     }
//     };
// isPalindrome(0)





/* Pascal's Triangle

Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

*/
// let row =[]
// let array = [[1],[1,1]]
// array.length = 32
// function makeArray() {
// for(let i =2; i<array.length;i++){
//     for(let j=0; j<array[i].length;j++){
//         row.push(array[i-1][j]+array[i-1][j-1])
//     }
// }}return console.log(array)
// makeArray()
/*
Example 1:


data = [
    [1],
    [1,1],
    [1,2,1]
    [1,3,3,1]
]
Input: rowIndex = 3
Output: [1,3,3,1]
Example 2:

Input: rowIndex = 0
Output: [1]
Example 3:

Input: rowIndex = 1
Output: [1,1]
 

Constraints:

0 <= rowIndex <= 33
 */


/* 
13. Roman to Integer

Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.
*/


// convert to array

//for loop

//conditionals


/* let romanToInt = function(x) {
    let array = Array.from(String(x);
    if(array[i]===C & array[i+1] === D){
    sum += 400
    }else if(array[i] ===C & array[i+1] === M ){
        sum += 900
    }else if(array[i] === C){
        sum +=100
    else if(array[i] === D){
        sum +=500
    }else if(array[i]=== M){
        sum =+ 1000
    };
    if(array[i]===X & array[i+1] === L){
    sum += 40
    }else if(array[i] ===X & array[i+1] === C ){
        sum += 90
    }else if(array[i] === X){
        sum +=10
    }else if(array[i]=== L){
        sum =+ 50
    };
     if(array[i]===I & array[i+1] === V){
    sum += 4
    }else if(array[i] ===I & array[i+1] === X ){
        sum += 9
    }else if(array[i] === I){
        sum +=1
    }else if(array[i]=== L){
        sum =+ 5
    };return sum
}
*/


const majorityElement = function(nums) {
    // first sort the array
    nums = nums.sort(function(a, b){return b - a});
    // declare variable to use later for conditional
    let x = (nums.length/2)
    let sum = 0
    //loop through the sorted array, if number appears more than x times, return number
    for(let i = 0;i<nums.length;i++){
        if(nums.length <= 2) {
            return nums[i]
        }
        if(nums[i]===nums[i+1]){
            sum += 1
            if(sum > x){
                return nums[i]
            }
        }else if(nums[i]!== nums[i+1])
            sum = 0
            sum += 1
            if(sum > x){
                return nums[i]
        }
    }
    
}
console.log(majorityElement([6,6,6,7,7]))