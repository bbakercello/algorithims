
function solution(X,Y,D){
    if(X > Y){
        return 0
    }
    let num = Y - X
    result = num / D 
    return Math.ceil(result)
}

console.log(solution(40,30,20))