/**
 * @param {number[][]} grid
 * @return {number[]}
 */
 let array = []
 var findBall = function(grid) {
     for(let i = 0; i < grid.length; i++){
         for(let j = 0; j < grid[i].length; j++){
        
             if(i== grid.length - 1 && grid[i][j] == -1 && grid[i][j-1] == -1){
                 array.push(1)
             }else if(i == grid.length - 1 && grid[i][j] == 1 && grid[i][j-1] == 1){
                 array.push(1)
             }if(grid[i][j] == 1 && grid[i][j+1] == 1){
                //  i+=1
                //  j+=1
                 console.log(1)
             }else if(grid[i][j] == -1 && grid[i][j-1] == -1){
                 i+=1
                 j-=1
                 console.log(-1)
             }
         }
     }return array
 };

 console.log(findBall([1,1,1,1,1,1],[-1,-1,-1,-1,-1,-1],[1,1,1,1,1,1],[-1,-1,-1,-1,-1,-1]))