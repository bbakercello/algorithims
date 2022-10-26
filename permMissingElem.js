function solution(A) {
    A.sort(function(a, b) {
        return a - b;
    });
    
    let next = 1;
    let i=0;
    while(next === A[i]) {
        next++;
        i++;
    }
}

console.log(solution([]))