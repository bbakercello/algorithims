def intToRoman(num: int) -> str:
    map = {1000:'M',500:'D',100:'C',50:'C',10:'X',5:'V',1:'I'}
    result = ''
    
    for key in map.keys():
        if num < key and num > 
        if num >= key:
            result += map.get(key)   
            num -= key
            print(num)
    return result


print(intToRoman(1254))