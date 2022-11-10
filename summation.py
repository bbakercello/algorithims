def twoSum(nums: list[int], target: int) -> list[int]:
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

print(twoSum(nums = [0,1,2,3,4,5,6,7,8,9],target = 8))
            
        