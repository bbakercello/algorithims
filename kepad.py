def phoneWords(n:  int, words: list[str]):
    key = {
        'a': '2',
        'b': '2',
        'c': '2',
        'd': '3',
        'e': '3',
        'f': '3',
        'g': '4',
        'h': '4',
        'i': '4',
        'j': '5',
        'k': '5',
        'l': '5',
        'm': '6',
        'n': '6',
        'o': '6',
        'p': '7',
        'q': '7',
        'r': '7',
        's': '7',
        't': '8',
        'u': '8',
        'v': '8',
        'w': '9',
        'x': '9',
        'y': '9',
        'z': '9',
    }
   

    nums = str(n)

    x = 0
    s = ''
    array = []

    ## convert words to a number
    for i in range(len(words)):
        for j in words[x]:
             if j in key.keys():
                j = key.get(j)
                s += f'{j}'
        
        if s in nums:
            array.append(int(s))
        s = ''
        x+=1
    print(array)

print(phoneWords(n = 3662277, words = ['foo','baz','bar']))