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

const traversal = () =>{
    let temp = head
    while (temp!=null) {
        console.log(temp.data)
        temp = temp.next;
    }
}

const SortColors = (head) => {
    let zerocount = 0
    let onecount = 0 
    let twocount = 0
    let temp = head
    while(temp!=null) {
        if(temp.data ===0)
            zerocount++
        else if(temp.data == 1)
            onecount++
        else 
            twocount++
        temp = temp.next
    }
    temp = head

    while(temp!=null){
        if(zerocount > 0) {
            temp.data =0
            zerocount--
        } else if(onecount >0){
            temp.data = 1
            onecount--
        } else if(twocount > 0) {
            temp.data = 2
            twocount--
        }
        temp=temp.next
    }
}

insertAtBeginning(1)
insertAtBeginning(0)
insertAtBeginning(2)
insertAtBeginning(0)
insertAtBeginning(2)
insertAtBeginning(1)
insertAtBeginning(0)

SortColors(head)
traversal()