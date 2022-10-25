def single_number (self,nums):
    for i in nums:
        if(len(nums)<= 2):
            print(nums[0])
        else:
            if(nums[i+1] == nums[i]):
                i+1
            elif(nums[i+1] != nums[i]):
                print(nums[i])
            elif(nums[i] == nums[len-1(nums)]):
                print(nums[i])