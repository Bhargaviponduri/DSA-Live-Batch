let head
class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

const ConvertToCircularLinkedList = (head) => {
    let temp = head
    while(temp.next != null) {
        temp = temp.next
    }
    temp.next = head
}

const printCircularList = () => {
    let temp =head
    console.log(temp.data);
    temp = temp.next
    while(temp != head) {
        console.log(temp.data)
        temp = temp.next
    }
    console.log(temp.data);
}

const insertAtBeginning = (new_data) => {
    let new_node =new Node(new_data)
    new_node.next= head
    head = new_node
}

insertAtBeginning(40)
insertAtBeginning(30)
insertAtBeginning(20)
insertAtBeginning(10)

ConvertToCircularLinkedList(head)
printCircularList()