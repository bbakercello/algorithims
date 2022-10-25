// Some way to see if a number is prime
// Check if it's a factor
console.log(largestPrime(13195))
function largestPrime(num){
    let array = []
    let largest = 0 
    for(let i=0;i<=Math.sqrt(num);i++)
    if(num % i === 0){
        array.push(i);
    }console.log(array)
    //no factors other than itself and 1
    for(let i=array.length-1;i>2;i--){
        // or Math.sqrt(num)
        // check if any of the numbers are factors
        // return false if there are any factors
        // for(let j=2;j<Math.sqrt(array[i]);j++){
        //     if (array[i] % j === 0){
        //         j = Math.floor(Math.sqrt(array[i]))
        //     }if (j === Math.floor(Math.sqrt(array[i]))){
        //         largest = array[i]
        //     }console.log(j)
        //     }
        //     return largest
        }
            
    // if we get through the entire loop and never have a factor
    //
    }
