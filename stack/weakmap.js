const items = new WeakMap()

class Stack {
    constructor () {
        items.set(this, [])
    }
    
    push(element) {
        items.get(this).push(element)
    }
    
    pop() {
        const s = items.get(this)
        const r = s.pop()
        
        return r
    }

    //other methods
}

let stack3 = new Stack

stack3.push(3)
