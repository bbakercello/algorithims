def threeSum(nums: List[int]) -> List[List[int]]:
    if len(nums) < 3:
        return []
    else:
        #sort array first to keep track of sum more efficiently
        nums = sorted(nums)
        triplets = []
        # in loop, i is fixed at 0, j is 1 and k is len(nums)
        #if i + j + k > 0, k-1
        #if i + j + k < 0, J +1 
        for i in range(0,len(nums)-2):
            lower = i+1
            upper = len(nums) - 1

            while lower < upper:
                s = nums[i] + nums[lower] + nums[upper]
                if s == 0:
                    triplets.append((nums[i], nums[lower], nums[upper]))
                    lower += 1
                elif s < 0:
                    lower += 1
                else:
                    upper -= 1
        return(list(set(triplets)))
        
