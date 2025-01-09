class Node {
    constructor(value = null, nextNode = null){
        this.value = value;
        this.nextNode = nextNode;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    //insert first node
    prepend(value) {
        //beginning index of linked list is the head
        this.head = new Node(value, this.head);
        //increase tally of linked list size
        this.size++; 
    }

    //insert last node
    append(value) {
        let node = new Node(value);
        let current;

        //if list is empty, make it the head

        if(!this.head) {
            this.head = node;
        }   else {
            //start at beginning of list
            current = this.head;
            
            //cycle through list until the end node
            while(current.nextNode) {
                current = current.nextNode;
            }

            //new node becomes the last node and appended to the end of the list
            current.nextNode = node;
        }
         //increase tally of linked list size
        this.size++;
    }

    //return node at given index

    at(index) {
        //if index is out of range 
        if(index > 0 && index > this.size) {
            return;
        }

        let count = 0;
        let current = this.head;

        while (count < index){
            current = current.nextNode;
            count++;
        }

        console.log(`NODE AT INDEX OF ${count}: \n`);
        console.log(current);
    }

    //insert node at index 

    insertAt(value, index) {
        //if index is out of range 
        if(index > 0 && index > this.size) {
            return;
        }

        let node = new Node(value);
        let count = 0;
        let current;
        let previous;

        //if list is empty
        if(!this.head) {
            //make head
            this.head = node;
            return
        }   else {
            //start at beginning of list
            previous = null;
            current = this.head;
            
            //cycle through list until the correct index node
            while(count < index) {
                //node before index
                previous = current; 
                count++;
                //node after index
                current = current.nextNode;
            }

            //node that was replaced is added to the pointer of the new node, "moving it to the next position"
            node.nextNode = current;
            //new node becomes the node at current index
            previous.nextNode = node; 
        }
         //increase tally of linked list size
        this.size++;
    }

    //Remove node at paticular index


    removeAt(index) {
        //if index is out of range 
        if(index > 0 && index > this.size) {
            return;
        }

        let count = 0;
        let current;
        let previous;

        //if list is empty
        if(!this.head) {
            //make head
            this.head = node;
            return;
        }   else {
            //start at beginning of list
            previous = null;
            current = this.head;
            
            //cycle through list until the correct index node
            while(count < index) {
                //node before index
                previous = current; 
                count++;
                //node after index
                current = current.nextNode;
            }

            //delete node at index  
            previous.nextNode = current.nextNode;
        }
         //decrease tally of linked list size
        this.size--;
    }


    //Print list data

    print() {
        let current;
        current = this.head;

        while(current) {
            console.log(current.value);
            current = current.nextNode;
        }

        console.log(`\n`);
    }

    //return first node
    headNode() {
        let current;
        current = this.head;
        console.log(`FIRST NODE: \n`);
        console.log(current);
    }

    //return last node
    tail() {
        let current;

        //start at beginning of list
        current = this.head;
        
        //cycle through list until the end node
        while(current.nextNode) {
            current = current.nextNode;
        }    

        //display final node
        console.log(`FINAL NODE: \n`);
        console.log(current);
    }

    length() {
        let length = this.size;
        console.log(`SIZE OF LINKED LIST: \n ${length} \n`);
    }

    //remove last node from the list 

    pop() {
        let secondLast;

        //if list is empty
        if(!this.head) {
            return
        }   else {
            //start at beginning of list
            secondLast = this.head;
            
            //cycle through list until the second to last node
            while(secondLast.nextNode.nextNode) {
                secondLast = secondLast.nextNode;
            }
            secondLast.nextNode = null;
            this.size--;
        }
    }

    //conatins(value) retruns true/false if value is included in list 

    contains(value) {
        let current = this.head;

        while(current.nextNode){
            if(current.value === value){
                console.log(`FOUND VALUE! \n`)
                return true
            }

            current = current.nextNode;
        }

        console.log("NO MATCHING VALUE WAS FOUND!! \n ")
        return false; 
    }


    //returns index of node containing value, or null if not found
    find(value){
        let current = this.head;
        let count = 0;

        while(current.nextNode){
            if(current.value === value){
                console.log(`VALUE FOUND AT INDEX:`);
                console.log(`${count} \n`);
                return count;
            }

            current = current.nextNode;
            count++;
        }

        console.log(`VALUE NOT FOUND AT ANY INDEX :(((`);
        return null;
    }

    //represents linkedList objects as strings so you can print them out and preview them in conosole
    toString(){
        let current;
        current = this.head;
        let str = '';

        while(current) {
            str += `( ${current.value} ) -> `;
            current = current.nextNode;
        }

        str += `null`;

        console.log(str);
    }

}


//MY TEST LIST 

//initalize new list 
// const ll = new LinkedList;

//add values

// ll.prepend(300);
// ll.prepend(200);
// ll.prepend(100);
// ll.append("400");
// ll.append([500]);
// ll.insertAt(600, 4);
// ll.append(700);
// ll.append({number: 800});

//call functions

// ll.headNode();
// ll.tail();
// ll.length();
// ll.at(3);
// ll.contains(600);
// ll.contains(700);
// ll.find(200);
// ll.find(600);
// ll.find(7);
// ll.removeAt(5);
// ll.toString();

//ODIN PROJECT LIST TEST CASE
// example uses class syntax - adjust as necessary
const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());