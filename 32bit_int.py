
    def myAtoi(s: str) -> int:
        state = ''
        start = 0
        end = 0
        sum = 0
        import string
        for i, value in enumerate(s): 
            if s == string.whitespace:
                continue
            elif value == '-' and int(s[i+1]):
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

        if sum > 31:
            end = start + 31
            sum = 31
        result = int(s[start : start + sum])
        if state == '-':
            result = -abs(result)
        return(result)
