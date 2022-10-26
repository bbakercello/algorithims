
// function numToBin(num){
//     while(num >= 1){
//         if(num == 1){
//             sum += '1'
//             break
//         }else if(num % 2 == 0){
//             num /= 2
//             sum += '0'
//         }else if(num % 2 != 0){
//             num /= 2
//             num = Math.floor(num)
//             sum += '1'
//         }
//     }
//     for(let i=0;i<sum.length;i++){
//         // console.log(sum[i])
//         if(sum[i] === '0'){
//             count += 1
//             // console.log(count)
//         }if(sum[i]!= '0'){
//             count = 0
//         }
//         if(count > result){
//             result = count
//         }
// }return result
// }

// function longesetGap(sum){
// for(let i=0;i<sum.length;i++){
//     // console.log(sum[i])
//     if(sum[i] === '0'){
//         count += 1
//         // console.log(count)
//     }if(sum[i]!= '0'){
//         count = 0
//     }
//     if(count > result){
//         result = count
//     }
// }return result
// }

// refactored to combine both algos


let sum = ''
let count = 0
let result = {
    total: 0,
    encapsulated: false,
    end: false
} 

function numToBin(num){
    while(num >= 1){
        if(num == 1){
            sum += '1'
            break
        }else if(num % 2 == 0){
            num /= 2
            if(sum == ''){
                sum += '0'
            }
            else{
                sum[sum.length-1] += '0'
            }
            count += 1
            if(count > result.total){
                result.total = count
            }
        }else if(num % 2 != 0){
            if(result.total == 0){
                result.encapsulated = true
            }
            num /= 2
            num = Math.floor(num)
            if(sum == ''){
                sum += '1'
            }
            else{
            sum[sum.length-1] += '1'
            }
            if(result > 0){
                result.end = true
            }
            count = 0 
        }
    }
        if(result.encapsulated == true && result.end == false){
            return result.total
        }else{
            return sum
        }
}




function solution(N) {
    // write your code in JavaScript (Node.js 4.0.0)
    
    var number = N;
    var binary = '';
    var counter = -1;
    var max = 0;
    while(number > 0) {
        var digit = number % 2;
        
        if(digit === 1) {
            if(counter > max) {
                max = counter;
            }
            counter = 0;
        } else if(counter >= 0) {
            counter++;
        }
        
        binary = '' + digit + binary;
        number = parseInt(number / 2);
    }
    
    //console.log('number, binary:', number, binary);
    
    return max;
}



console.log(numToBin(1376796946))