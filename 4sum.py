# Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:

# 0 <= a, b, c, d < n
# a, b, c, and d are distinct.
# nums[a] + nums[b] + nums[c] + nums[d] == target 



class Solution:
    def fourSum(nums, target):
        nums.sort()
        res, quad = [],[]

        def kSum(k,start,target):
            if k != 2:
                for i in range(start,len(nums)-k+1):
                    if i > start and nums[i] == nums[i-1]:
                        continue
                    quad.append(nums[i])
                    kSum(k-1,i+1,target - nums[i])
                    quad.pop
                    return
            l, r = start, len(nums) -1
            while l < r:
                if nums[l] + nums[r] < target:
                    l += 1
                elif nums[i] + nums[r] > target:
                    r -= 1
                else:
                    res.append(quad + [nums[l], nums[r]])
                    l += 1
                    while l < r and nums[l] == nums[l-1]:
                        l += 1
        kSum(4,0,target)
        return res
        # if A + B + C + D <n, D+1
        # If index(D) == len - 1, C+=1 D=C+1
        # If index(C) == len - 2, B+=1, C=B+1, D= C+1
        # If index(B) == len -3, A+=1, B=A+1, C=B+1, D=C+1