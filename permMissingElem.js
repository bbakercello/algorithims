function solution(A){
    if(A.length == 1){
        if(A[0] > 1){
            return 1
        }
    }
    if(A = []){
        return null
    }
    A.sort(function(a,b){return a - b})
    for(let i = 0; i<A.length;i++){
        if(A[i+1] - A[i] != 1){
            return A[i] + 1
        }
    }
}

console.log(solution([5,4,6,2,7,1,8]))