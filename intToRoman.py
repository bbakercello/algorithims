from operator import index
import math

def intToRoman(num: int) -> str:
    map = {1000:'M',500:'D',100:'C',50:'L',10:'X',5:'V',1:'I'}
   
    result = ''
    
    for key in map.keys():
        print(num)
        string = str(num)
        times = num // key
       
      
        if times == 4:
            result += map.get(key)
            result += map.get(key*5)
            num -= key * times
        
        elif string[0] == '9' and num > key:
            print('yes')
            result += map.get(key)
            result += map.get(key*2)
            num -= (key + 4*(key/5))
            num = num // 1
        else: 
            count = times
            num -= key * times
            while count > 0:
                result += map.get(key)
                count -= 1   # times number of times    
    return result


print(intToRoman(1994))