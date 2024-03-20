// single linklist shift and unshift

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
        this.length = 0;
    }

    unShift(val) {
        var newHead = new Node(val);
        if (!this.head) {
            this.head = newHead;
            this.tail = newHead;
        } else {
            newHead.next = this.head
            this.head = newHead
        }
        this.length++;
        return this;
    }

    shift(){
        if(!this.head) return undefined;
        var currentHead = this.head;
        this.head = currentHead.next;
        this.length--
        if(this.length === 0){
            this.head =  null
            this.tail =null
        }
        return this
    }

}

var list = new SingleLinkList()