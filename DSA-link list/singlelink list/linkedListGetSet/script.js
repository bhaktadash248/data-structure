// linked list using get and set

class Node {
    constructor(val) {
        this.val = val;
        this.next = null
    }
}

class SingleLinkList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0
    }

    push(val){
        var current = new Node(val)
        if(!this.head){
            this.head = current;
            this.tail = this.head;
        }else{
            this.tail.next= current
            this.tail = current;
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

    get(index) {
        if(index < 0 ||index >= this.length){
            return null;
        }
        var counter = 0;
        var current = this.head;
        while(counter !== index){
            counter++;
            current = current.next;
        }
        return current
    }

    set(index, val){
        var foundNode = this.get(index);
        if(foundNode){
            foundNode.val = val
            return true;
        }
        return false
    }
}

var list = new SingleLinkList()