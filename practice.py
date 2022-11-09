
class Solution(object):
    def containDuplicate(self,nums: List[int]) -> bool:
        hashset = set()

        for n in nums:
            if n in hashset:
                return True
            hashset.add(n)
        return False


class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        
        s = sorted(s)
        t = sorted(t)
        if t == s:
            return True        