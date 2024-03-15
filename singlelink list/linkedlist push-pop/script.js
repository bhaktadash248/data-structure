/*
    Link list contains a head tail and length
    Linked lists consists of nodes and each node has a value and a pointer to another node or null i.e. after the last node its null
    Here we can able to access it via nodes with a next pointer
    Random access is not allowed
    it does not have indexes.
*/

// example

class Nodes {
    constructor(val) {
        this.val = val;
        this.next = null
    }
}

var first = new Nodes("Hi")
first.next = new Nodes("there")

/* output

Nodes{
    "val": "Hi",
    "next": {
        "val": "there",
        "next": null
    }
}
*/

// create single link list for push

class SingleLinkList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0
    }

    push(val){
        var current = new Nodes(val)
        if(!this.head){
            this.head = current;
            this.tail = this.head;
        }else{
            this.tail = current;
            this.tail.next= current
        }
        this.length++;
        return this;
    }

    pop(){
        if(!this.head) return undefined;
        var currentVal = this.head;
        var newtail = currentVal;
        while(currentVal.next){
            newtail = currentVal
            currentVal = currentVal.next;
        }
        this.tail = newtail;
        this.tail.next = null;
        this.length --
        if(this.length === 0){
            this.head = this.tail = null
        }
        return currentVal;
    }
}

var list = new SingleLinkList()