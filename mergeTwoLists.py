class Solution:
    def mergeTwoLists(list1: list, list2: list):
        result = sorted(list1 + list2)
        print(result)
    print(mergeTwoLists(list1=[1,2,3,4],list2=[4,3,2,1]))
