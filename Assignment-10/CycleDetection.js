let head;
class Node {
    constructor(node) {
        this.data = node
        this.next = null
    }
}

const insertAtBeginning = (new_node) => {
    const new_data = new Node(new_node);
    new_data.next = head
    head = new_data
}

const cycleDetection  = (llist) => {
    let tortoise = llist, hare =llist
    while(tortoise != null && hare != null && hare.next!=null) {
        hare = hare.next.next
        tortoise = tortoise.next
        console.log(hare, tortoise);
        if(hare == tortoise)
            return true
    }
    return false
}

const traversal = () => {
    let temp = head
    while(temp!=null) {
        console.log(temp);
        temp = temp.next
    }
}


insertAtBeginning(10);
insertAtBeginning(20);
insertAtBeginning(30);
insertAtBeginning(40);
head.next.next.next = head
// traversal()


const result  = cycleDetection(head)
if(result) 
    console.log("cycle is detectec in linked list");
else
    console.log("cycle is not detected n linked list");
