from collections import deque

# creates an empty linked list 
deque()

# to insert items at time of creation, give it iterable
deque(['a','b','c'])

# interact with the list 
llist = deque('abcde')


# .pop and .append would work here to remove/add at end/right of list
llist.pop()
llist.append('g')


# to add/remove to beginning or head
llist.appendleft('1')
print(llist)

llist.popleft()
print(llist)

# How to Implement Queues and Stacks 


# Queue for a fancy restaraunt 
queue = deque()

queue.append("Mary")
queue.append("John")
queue.append("Susan")

# in order for this to be a proper queue, you would .popleft

# How to Create a Linked List 
class LinkedList: 
    def __init__(self):
        self.head = None 

# create a class for each node 
class Node: 
    def __init__(self,data):
        self.data = data
        self.next = None


class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

    def __repr__(self):
        return self.data

class LinkedList:
    def __init__(self):
        self.head = None

    def __repr__(self):
        node = self.head
        nodes = []
        while node is not None:
            nodes.append(node.data)
            node = node.next
        nodes.append("None")
        return " -> ".join(nodes)

# how to iterate through a linked list

def __iter__(self):
    node = self.head
    while node is not None:
        yield node
        node = node.next



class Solution:
    def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:
        head = tmp = ListNode()
        arr = []

        for l in lists:
            while l != None:
                arr.append(l.val)
                l = l.next

        for val in sorted(arr):
            tmp.next = ListNode()
            tmp = tmp.next
            tmp.val = val

        return head.next