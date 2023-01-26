class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  //Insert Firt Node
  insertHead(data) {
    this.head = new Node(data, this.head);
  }
  //Insert last node
  //Insert at index
  //Get at index
  //Remove at index
  //Clear list
  //Print list data
  printListData() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const n1 = new Node(100);
const n2 = new Node(50);

const ll = new LinkedList();
ll.insertHead(900);
ll.insertHead(200);
ll.insertHead(300);
ll.insertHead(200);
