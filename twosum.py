



def two_sum(self,nums,target):
    for i in range(len(nums)):
        for j in range(i, len(nums)):
            if nums[i] + nums[j] == target:
                return [i,j]
        

two_sum([2,7,11,15],9)