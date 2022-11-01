let head, size=0
class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

const insertAtBeginning = (new_data) => {
    let new_node =new Node(new_data)
    new_node.next= head
    head = new_node
}


const removeNthNode = (head, nodeTobedeleted) => {
    let temp = head
    let newList =[]
    while(temp!=null){
        newList.push(temp.data)
        size++
        temp = temp.next
    }
    console.log("Nth node to be deleted ", newList[size-(nodeTobedeleted)])
}

insertAtBeginning(10)
insertAtBeginning(20)
insertAtBeginning(30)
insertAtBeginning(40)

removeNthNode(head, 4)