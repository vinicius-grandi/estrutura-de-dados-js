export default class Stack {
    constructor(...i) 
    {
        this.items = [...i]
    }

    push(...a)
    {
        this.items.push(...a)
    }

    pop()
    {
        this.items.pop()
    }

    peek()
    {
        const items = this.items.values()

        for(let i = 1; i < this.items.length; i++) {
            items.next().value
        }
        return items.next().value
    }

    isEmpty()
    {
        if(this.items.length >= 1) {
            return true
        }
        return false
    }

    clear() {
        while(this.items.length >= 1) {
           this.items.pop()
        }
    }

    size() {
        return this.items.length
    }
}
