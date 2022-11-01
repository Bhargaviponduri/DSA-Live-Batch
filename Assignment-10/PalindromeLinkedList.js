let head;
class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

const insertAtBeginning = (new_node) => {
    const new_data = new Node(new_node)
    new_data.next = head
    head = new_data
}

const reversal = (llist) => {
    let current, prev_pointer = null, next_pointer = null
    current = llist
    while(current != null) {
        next_pointer = current.next;
        current.next = prev_pointer;
        prev_pointer = current;
        current = next_pointer
    }
    let temp = prev_pointer
    return temp
}
const Palindrome = (llist1, llist2) => {
    
    console.log("nodesss in function", llist1, llist2);
    while(llist1 != null && llist2!= null) {
        console.log(llist1.data, llist2.data);
        llist1= llist1.next;
        llist2 = llist2.next
    }
}

insertAtBeginning(1);
insertAtBeginning(0);
insertAtBeginning(1);
insertAtBeginning(1);

console.log("linked passing head", head);
const result2 = head
const result1 = reversal(result2)
console.log("linked list after passing to result", head);
const result = Palindrome(head, result1)
if(result)
    console.log("given Linked list is palindrome");

else 
    console.log("Given Linked is not palindrome");