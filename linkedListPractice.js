//Create node strucute with data attribute and next attribute
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

//Create linked list strucute with head and size attribute
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  //Insert Firt Node
  insertHead(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }
  //Insert last node
  insertLast(data) {
    let node = new Node(data);
    let current;
    //If list is empty, create a head instead
    if (this.head == null) {
      this.head = node;
    } else {
      //Start at begining so make it the head
      current = this.head;
      //Traverse entire list to reach last node
      while (current.next) {
        current = current.next;
      }
      //After traversing entire list make the last node the desired node.
      current.next = node;
    }
    //Increase the size attribute
    this.size++;
  }

  //Insert at index
  insertAtIndex(data, index) {
    //if index is out of range
    if (index > 0 && index > this.size) {
      return;
    }

    //If it is the first index
    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    const node = new Node(data);
    let current, previous;

    //Set the desired node to first
    current = this.head;
    let count = 0;

    while (count < index) {
      //if count == index -> switch next attributes -> current=current.next
      previous = current; //Node before
      count++;
      current = current.next; //Node after
    }
    //Points node's next attribute to current node (node after index)
    node.next = current;
    //Points previous node's next attribute to current node (node before index)
    previous.next = node;

    //Increase list size by one
    this.size++;
  }
  //Get at index

  getValueByIndex(index) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (count == index) {
        previous.next = current;
        console.log(current.data);
      }
      //Move through list by adding count, and moving next attribute chain
      count++;
      current = current.next;
    }
    return null;
  }
  //Remove at index

  removeValueByIndex(index) {
    //If index is ouf of range
    if (index > 0 && index > this.size) {
      return;
    }

    let current = this.head;
    let previous;
    let count;

    //If its at head set is to next value
    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }
    this.size--;
  }

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
ll.insertLast(7);
ll.insertLast(8);
ll.insertLast(9);

ll.printListData();
ll.removeValueByIndex(1);
