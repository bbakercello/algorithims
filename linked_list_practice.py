## Singular Linked List




## Double Linked List
## points to the previous node as well
#




## Circular Linked List
## the last node always points to the head/first node of the list




## Create a linked list
class Node:
    def __init__(self,data,next=None):
        self.data = data
        self.next = next

class LinkedList:
    def __init__(self,head=None):
        self.head = head

## Inserting 
    def add(self,data):
        new = Node(data)
        if(self.head):
            temp = self.head
            while(temp.next != None):
                temp = temp.next
            temp.next = new
        else:
            self.head = new

    ## Print the list
    def List(self, first=None):
        self.first = first
        first = self.head
        while(first):
            print(first.data)
            first = first.next

## create Object and add values 
## first initialize instance of class with a list below
obj = LinkedList()
obj.add(10)
obj.add(20)
obj.add(30)
obj.add(40)
obj.add(50)
## print the list by calling the function to print on the list
obj.List()

# inserting values in a linked list at the beginning
def insert(self,new=None):
    self.new = new
    newNode = Node(new)
    newNode.next = self.head
    self.head = newNode

# inserting values in the end of a linked list
def insertend(self, new=None):
    self.new = new
    new = Node(new)
    last_node = self.head
    while(last_node.next):
        last_node = last_node.next
        last_node.next = new
# inserting the node after a given node
def insertmid(self,data,x):
    self.data = data
    self.x = x
    temp = self.head
    newNode = Node(data)
    while(temp):
        if(temp.data == x):
            newNode.next = temp.next
            temp.next = newNode
        temp = temp.next
#deleting the values in a linked list
def delete(self,value):
    temp = self.head
    while(temp != None):
        if temp.data == value:
            break
        prev = temp
        temp = temp.next



# searching a linked list
def search(self,x):
    current = self.head
    while current != None:
        if(current.data == x):
            print('found')
        else:
            print('not found')
        current = current.next

#sorting a linked list
def sort(self):
    temp = self.head
    a = []
    while(temp):
        a.append(temp.data)
        temp = temp.next
    a.sort()
    new = LinkedList()
    for i in a:
        new.add(i)
        new.List

#final linked list
class Node:
    def __init__(self,data,next=None):
        self.data = data
        self.next = next


