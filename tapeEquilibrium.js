// function solution(A){
//    let sum = 0
//     let test1 = 0
//     let test2 = 0
//     let diff = 0
//     let x =0  
//     for(let i=0;i<A.length;i++){
//         if(x <= i){
//             test1 += A[i] 
//             // console.log(test1)
//             x+=1
//         }if(i > x){
//             test2 += A[i]
//             console.log(test2)
//             x+=1
//         }   
        
//         diff = Math.abs(test1 - test2)
//         if(sum == 0){
//             sum = diff
//             }else if(diff < sum){
//             sum = diff
//             }
//         }return sum
//     }
    
// console.log(solution([3,1,2,4,3]))


function solution(A) {
    // write your code in JavaScript (Node.js 4.0.0)
    let first = [A.length];
    let second = [A.length];
    
    second.push(0);
    
    for(let i=0; i<A.length; i++) {
        let x = A.length - i - 1;
        
        if(i === 0) {
            first[i] = 0;
        } else {
            first[i] = first[i-1] + A[i-1];
        }       
        
        if(x === A.length - 1) {
            second[x] = A[x];
        } else {
            second[x] = second[x+1] + A[x];
        }        
    }
    
    let sum = Math.abs(first[1] - second[1]);
    
    for(let i=2; i<first.length; i++) {
        let diff = Math.abs(first[i] - second[i]);
        if(diff < sum) {
            sum = diff;
        }
    }
    
    return sum;
}