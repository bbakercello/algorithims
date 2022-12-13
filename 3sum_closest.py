class Solution:
    def threeSumClosest(self, nums: List[int], target: int) -> int:

        best_s = 100000
        #sort array first to keep track of sum more efficiently
        nums.sort()
        result = int
            # in loop, i is fixed at 0, j is 1 and k is len(nums)
            #if i + j + k > 0, k-1
            #if i + j + k < 0, J +1 
        for i in range(0,len(nums)-2):
            if nums[i] > target:
                result = nums[i]+nums[i+1]+nums[i+2]
            lower = i+1
            upper = len(nums) - 1

            while lower < upper:
                s = nums[i] + nums[lower] + nums[upper]
                if s == target:
                    return target
                if abs(target - s) < abs(target - best_s):
                    best_s = s

                if s <= target:
                    lower += 1 
                    while(nums[lower]==nums[lower-1] and lower < upper):
                        lower += 1
                else:
                    upper -= 1
        return(best_s)
            
