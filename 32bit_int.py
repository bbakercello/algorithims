def myAtoi(self, s: str) -> int:
        state = ''
        start = 0
        end = 0
        sum = 0
        flag = False
        import string
        for i, value in enumerate(s): 
            if value == '-' and int(s[i+1]):
                state = '-'
            elif value == '+' and int(s[i+1]):
                state = '+'
            elif value.isdigit() and (s[i-1]).isdigit() == False:
                start = i
                sum += 1
            elif value.isdigit() and s[i-1].isdigit():
                sum += 1
            elif value.isdigit() and s[i+1].isdigit() == False:
                end = i
                sum += 1
            elif i == start and s[i-1] == ' ':
                flag = True

        if sum > 31:
            end = start + 31
            sum = 31
        result = int(s[start : start + sum])
        if state == '-':
            result = -abs(result)
        if flag == True:
            return 0
        return(result)

