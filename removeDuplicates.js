var removeDuplicates = function(nums) {
    let L
    let r = 1
    while(r < nums.length && nums[r] !== nums[r-1]){
        r++
    }
};


removeDuplicates([0,0,1,1,1,2,2,3,3,4])