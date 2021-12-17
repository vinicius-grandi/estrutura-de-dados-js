import defaultEquals from '../utilities/util.js'
import Node from '../utilities/linked-list-models.js'

export default class LinkedList {
    constructor(equalsFn = defaultEquals) {
        /**
         * @protected
         */
        this.count = 0
        /**
         * @protected
         */
        this.head = undefined
        /**
         * @protected
         */
        this.equalsFn = equalsFn
    }

    /**
     * 
     * @param {unknown} e 
     */
    push(e) {
        const node = new Node(e); 
        let current; 
        if (this.head == null) { 
            this.head = node;
        } else {
            current = this.head;
            while (current.next != null) { 
                current = current.next;
            }
            current.next = node; 
        }
        this.count++; 
    }

    /**
     * @param {unknown} e
     * @param {number} index
     */
    insert(e, index){
        if (index >= 0 && index <= this.count) { 
            const node = new Node(e)
        if (index === 0) { 
            const current = this.head
            node.next = current
            this.head = node
        } else {
            const previous = this.getElementAt(index - 1)
            const current = previous.next
            node.next = current
            previous.next = node
        }
        this.count++
        return true
    }
        return false
}

    /**
     * @param {number} index
     */
    getElementAt(index) {
        if (index >= 0 && index < this.count) { 
            let current = this.head 
        if (index === 0) { 
            return current
        } else { 
            for (let i = 0; i < index; i++) {
                current = current.next
                }
            }
            return current
        }
            return undefined
    }

    /**
     * @param {number} e
     */
    remove(e) {
        const index = this.indexOf(e);
        return this.removeAt(index);
    }

    /**
     * @param {number} e
     */
    indexOf(e) {
        let current = this.head
        if(current.element == e) {
            return 0
        }
        let i = 0 
        while (current.next != null) {
            ++i
            current = current.next
            if(current.element == e || this.head == e) {
                return i
            }
        }
        return -1
    }

    /**
     * @param {number} index
     */
    removeAt(index) {
    if (index >= 0 && index < this.count) { 
        let current = this.head 
    if (index === 0) { 
        this.head = current.next
    } else {
        const previous = this.getElementAt(index - 1)
        current = previous.next
        previous.next = current.next
    }
        this.count--

        return current.element
    }
        return undefined
}

    isEmpty() {
        return this.count === 0
    }

    size() {
        return this.count
    }

    getHead() {
        return this.head
    }

    toString(separator = ',') {
        if(this.isEmpty()) {
            return ''
        } 
        
        let current = this.head
        let objString = `${this.head.element}`

        while (current.next != null) {
            current = current.next
            objString += `${separator}${current.element}`
        }
        return objString
    }
}