var twoSum = function(nums, target) {
    let m = new Map()
      for(let i = 0; i < nums.length; i++){
          if(m.has(nums[i])!= true){
              m.set(nums[i])
              
          }
      }
      for(let i = 0; i < nums.length; i++){
          if(m.has(target-nums[i])){
              return [nums[i],nums.indexOf(target-nums[i])]
          } 
      }
  };