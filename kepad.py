def phoneWords(n:  int, words: list[str]):
    key = {
        '2': 'a',
        '2': 'b',
        '2': 'c',
        '3': 'd',
        '3': 'e',
        '3': 'f',
        '4': 'g',
        '4': 'h',
        '4': 'i',
        '5': 'j',
        '5': 'k',
        '5': 'l',
        '6': 'm',
        '6': 'n',
        '6': 'o',
        '7': 'p',
        '7': 'q',
        '7': 'r',
        '7': 's',
        '8': 't',
        '8': 'u',
        '8': 'v',
        '9': 'w',
        '9': 'x',
        '9': 'y',
        '9': 'z'
    }
    key_list = list(key.keys())
    val_list = list(key.values())
    

    nums = str(n)
    nums = nums.split()
    x = 0
    ## convert words to a number
    for i in words:
        for j in words[x]:
            if j in key.values():
                j = val_list.index(j)
                z = key_list[j]
            print(z)
        x+=1

    ## compare the two numbers

print(phoneWords(n = 243948, words = ['foo','bar']))