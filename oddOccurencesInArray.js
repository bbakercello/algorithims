

function solution(A) {
   let x = 0;
   for (let i =0; i<A.length; i++){
    x ^= A[i]
   }return x
}

// console.log(solution([1,2,3,4,3,2,1]))
console.log(solution([9,3,9,3,9,7,9]))

    // const table = new Map()
    // for(i=0;i<A.length;i++){
    //     if(table.get(A[i])== false){
    //         table.set(A[i],true)
    //     }else if(table.get(A[i]) == undefined){
    //     table.set(A[i],false)
    //     }
    // }return table.get(false)