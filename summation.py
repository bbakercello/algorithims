def twoSum(self, nums: List[int], target: int) -> List[int]:
    i = 0
    j = 1
    result = ''
    for i in range(len(nums)):
        for j in (nums):
            if nums[i] + nums[j] != target:
                j+=1
            elif nums[i] + nums[j] == target:
                result += f"{nums[i]},{nums[j]}"
        return result
            
        