function solution(A,K){
    if(A == []){
        return []
    }
    let count = 0 
    while(count < K){
        num = A.pop()
        A.unshift(num)
        count +=1
        console.log(count)
        
    }return(A)
}

console.log(solution([1,2,3,4],4))