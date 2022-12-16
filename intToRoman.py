def intToRoman(num: int) -> str:
    map = {1000:'M',500:'D',100:'C',50:'L',10:'X',5:'V',1:'I'}
    result = ''
    
    for key in map.keys():
        # if num < key and num > 
        if num >= key:
            times = num // key
            count = times
            print(times)
            num -= key * times
            print(num)
            while count > 0:
                result += map.get(key)
                count -= 1   # times number of times    
              
    return result


print(intToRoman(1254))