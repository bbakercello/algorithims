def search(nums, target):
    low = 0
    high = len(nums)-1
  
    def parse(low,high):
        result = -1
        if low <= high:
            mid = low + high //2
              
            if nums[mid] == target:
                result = mid
                print(result)
                return result

        
            elif nums[mid] < target:
                return parse(low,mid-1)
              
                    
                
            elif nums[mid] > target:
                return parse(mid+1,high)
            
            else:
                print(result)
                return result
        return result
    parse(low,high)
    

 
print(search([-1,0,3,5,9,12],9))