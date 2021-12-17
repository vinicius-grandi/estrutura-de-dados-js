import LinkedList from '../linkedlist/linkedlist.js'
import defaultEquals from '../utilities/util.js'
import Node from '../utilities/linked-list-models.js'

class DoublyNode extends Node { 
    /**
     * 
     * @param {unknown} element 
     * @param {object | undefined} next 
     * @param {undefined | object} prev 
     */
    constructor(element, next, prev) {
        super(element, next) 
        this.prev = prev 
    }
}

class DoublyLinkedList extends LinkedList { 
    constructor(equalsFn = defaultEquals) {
        super(equalsFn) 
        this.tail = undefined 
    }
    /**
     * @param {unknown} e
     * @param {number} index
     */
    insert(e, index) {
        if (index >= 0 && index <= this.count) {
            const node = new DoublyNode(e);
            let current = this.head;
            if (index === 0) {
                if (this.head == null) { // {1} NEW
                    this.head = node;
                    this.tail = node;
            } else {
                node.next = this.head; // {2}
                current.prev = node; // {3} NEW
                this.head = node; // {4}
            }
            } else if (index === this.count) { // last item NEW
                current = this.tail; // {5}
                current.next = node; // {6}
                node.prev = current; // {7}
                this.tail = node; // {8}
            } else {
                const previous = this.getElementAt(index - 1); // {9}
                current = previous.next; // {10}
                node.next = current; // {11}
                previous.next = node; // {12}
                current.prev = node; // {13} NEW
                node.prev = previous; // {14} NEW
            }
            this.count++;
            return true;
        }
            return false;
    }
}