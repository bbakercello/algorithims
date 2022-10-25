
var singleNumber = function(nums) {
    nums.sort(function(a, b){return a-b});
    for(i=0;i<nums.length;i++){
        if(nums.length <= 2){
            return nums[0]
        }else{
            if(nums[i+1] == nums[i]){
                i+=1
            }else if(nums[i+1] != nums[i]){
                return nums[i]
            }else if(nums[i] == nums[nums.length-1]){
                return nums[i]
            }
        }
    }
};

console.log(singleNumber([1,2,5,2,5,4,4,8,1]))