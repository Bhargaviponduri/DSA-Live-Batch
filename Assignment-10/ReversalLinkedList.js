let head;
class Node {
    constructor(data) {
    this.data = data;
    this.next = null
    }
}

const insertAtBeginning = (new_data) => {
    let new_node =new Node(new_data)
    new_node.next= head
    head = new_node
}

const reversal = (llist) => {
    let current, next_pointer , prev_pointer
    current = llist
    next_pointer=null
    prev_pointer = null
    while(current!=null) {
        next_pointer = current.next;
        current.next = prev_pointer;
        prev_pointer = current;
        current = next_pointer
    }
    head = prev_pointer
}

const traversal = () =>{
    let temp = head
    while (temp!=null) {
        console.log(temp.data)
        temp = temp.next;
    }
}


insertAtBeginning(10);
insertAtBeginning(20);
insertAtBeginning(30);
insertAtBeginning(40);

console.log(head)
reversal(head)
traversal()
