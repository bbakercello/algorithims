function solution(X,a){
    for(let i = 0; i < a.length; i++){
        if(a[i] >= X){
            return i 
        }else if(i == [a.length - 1] && a[i]< X){
            return -1
        }
    }
}

console.log(solution(5,[1,3,1,4,2,3,5,4]))