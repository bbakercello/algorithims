// function solution(X,a){
//     for(let i = 0; i < a.length; i++){
//         if(a[i] > X){
//             return i 
//         }else if(i == [a.length - 1] && a[i]< X){
//             return -1
//         }
//     }
// }

// console.log(solution(5,[2,2,2,2]))



function solution(X, A) {
//X
 let S = new Array(X);
 let distance = X

 for(let i = 0; i < A.length; i++){
    let position = A[i];
    if(S[position] != 1){
        S[position] = 1
        distance --;
    }
    if(distance == 0)return i;
    } 
    return -1;
 }

console.log(solution(5,[1,3,1,4,2,3,5,4]))