def threeSum(nums: List[int]) -> List[List[int]]:
    if len(nums) < 3:
        return []
    else:
        triplets = []
        for i in range(0,len(nums)-2):
            for j in range(i+1, len(nums)-1):
                for k in range(j+1, len(nums)):
                    if nums[i] + nums[j] + nums[k] == 0:
                        triplets.append(tuple(sorted([nums[i],nums[j],nums[k]])))
                
            return(list(set(triplets)))

