/* ball will hit V if grid[i][j] == 1 && grid[i][j+1] == -1 
it depends on whether the ball is on the top or bottom of shelf
if i is even, then it is on the top
if i is odd, then it is on the bottom

for each index
*/


const finBall = function(grid){
    let col = 0
    let row = 0
    let array = []
    for(let i = 0; i < grid.length; i ++){
        for(let j = 0; j < grid[i].length; j++){
            if(grid[i][j]== 1 && grid[i][j+1] == -1){
                array.push(-1)
                break
            }
            else if (grid[i][j] == 1 && grid[i][j+1]== 1){
                i+=1
                j+=1
                console.log('continue')
            }
            else if(i = grid.length - 1){
                array.push(1)
            }
        }
    }
        return array
}

            // if(grid[i][0] == -1 && i == 0){
            //     array.push(-1)
            //     j++
            // }
            // else if(grid[i][4]== 1 && i == grid.length - 1){
            //     array.push(-1)
            //     continue
            // }
            // else if(j != 0){
            //     if(grid[i][j]== 1 && i %2 == 0 && grid[i+1][j]== -1){
            //     array.push(-1)
            //     i+= 1
            //     else if(grid[i][j]== -1 && i %2 == 0)
            //     continue
            // }}
            // else if(grid[i][j]== -1 && i %2 == 0 && grid[i-1][j]== 1){
            //     array.push(-1)
            //     continue
            // }else(
            //     array.push(1)
            
            // )
            // }
        

console.log(finBall([[1,1,1,-1,-1],[1,1,1,-1,-1],[-1,-1,-1,1,1],[1,1,1,1,-1],[-1,-1,-1,-1,-1]]))