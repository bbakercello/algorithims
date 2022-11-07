//sort the array 
//loop through array, if arr[i+1] != array[i] + 1 then return that value
//

function solution(A){
A.sort(function(a, b){return a - b});
for(let i = 0; i<A.length; i++){
    if(A[i+1] != A[i]+1 && A[i+1] != A[i]){
        if(A[i]+1 >0){
            return A[i]+1
    }else{
        return 1
    }}
}
}

console.log(solution([1, 3, 6, 4, 1, 2]))