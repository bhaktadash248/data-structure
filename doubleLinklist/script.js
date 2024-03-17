class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null
    }
}

class DoubleLinkList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0
    }

    push(val){
        var newNode = new Node(val);
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode
        }
        this.length++;
        return this;
    }

    pop(){
        if(!this.head) return undefined;
        var popTail = this.tail;
        if(this.length === 1){
            this.head = null;
            this.tail = null
        }else{
            this.tail = popTail.prev;
            this.tail.next = null
            popTail.prev= null
        }
        this.length--
        return popTail
    }
}

var List = new DoubleLinkList()