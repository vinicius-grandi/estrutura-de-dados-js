"use strict";
class ArrStack {
    constructor() 
    {
        this.items = []
    }
    /**
     * @param  {unknown[]} a
     */
    push(...a)
    {
        console.log(a.length)
        this.items.push(a)
    }

    pop()
    {
        return this.items.pop()
    }

    peek()
    {
        return this.items[this.items.length - 1]
    }
    
    /**
     * @returns {boolean}
     * 
     */
    isEmpty()
    {
        return this.items.length === 0
    }

    clear() {
        this.items = []
    }

    size() {
        return this.items.length
    }
}

let stack = new ArrStack

console.log(stack.isEmpty())
stack.push(2, 3, 5, 5, 6, 3, 3, 'joão', 'paulin', 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4)
stack.clear()
console.log(stack.peek())