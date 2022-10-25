var removeElement = function(nums, val) {
    let sum = 0
    for(i = 0; i<=nums.length; i++){
        if(nums[i] == val){
            console.log(nums[i])
            delete nums[i]
            console.log(nums)
            sum += 1
           
        }if(i == nums.length -1){
            nums.sort(function(a,b){return a - b});
            nums.length = nums.length - sum
            return nums
        }
    }
   
};


console.log(removeElement([0,1,2,2,3,0,4,2],2))
