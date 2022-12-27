class Solution:
    def reverse(self, x: int) -> int:
        if x == 0:
            return 0
        elif x < -2**31 or x > 2**31-1:
            return 0
        elif x > 0:
            x = str(x)
            result = int(x[::-1])
            if result < -2**31 or result > 2**31-1:
                return 0
            return(result)
        elif x < 0:
            x = abs(x)
            x = str(x)
            result = int(x[::-1])
            result = -abs(result)
            if result < -2**31 or result > 2**31-1:
                return 0
            return result