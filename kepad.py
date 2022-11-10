def phoneWords(n:  int, words: list[str]):
    key = {
        '2': ['a','b','c'],
        '3': ['d','e','f'],
        '4': ['g','h','i'],
        '5': ['j','k','l'],
        '6': ['m','n','o'],
        '7': ['p','q','r','s'],
        '8': ['t','u','v'],
        '9': ['w','x','y','z']
    }

    nums = str(n)
    nums = nums.split()
    
    ## convert words to a number
    for i in words:
        for j in words[i]:
            if 
    ## compare the two numbers

print(phoneWords(n = 243948, words = ['foo','bar']))