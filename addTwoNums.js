

const addTwoNumbers = function(l1,l2){
// l1 = l1.reverse()
// l2 = l2.reverse()
let sum = 0
let multiplier = 1
let array = []
l1.forEach((num1, index) => {
  let num2 = l2[index];
  if(num1 == undefined){
    num1 = 0
  }
  else if(num2 == undefined){
    num2 = 0
  }
  sum += (num1* multiplier) + (num2 * multiplier)
  multiplier *= 10
 
});
sum = sum.toString()
sum = sum.split()

for(let i = 0;i<sum.length; i++){
    for(let j = 0; j<sum[i].length; j++)
    array.push(parseInt(sum[i][j]))
}
console.log(array.reverse())
}

addTwoNumbers([9,9,9,9,9,9,9],[9,9,9,9])