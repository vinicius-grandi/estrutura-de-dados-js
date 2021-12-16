class Deque {
    constructor() {
        /**
         * @private
         */
        this.items = {}
        /**
         * @private
         */
        this.count = 0
        /**
         * @private
         */
        this.lowestCount = 0
    }
    /**
     * @param  {unknown} e
     */
    addFront(e) {
        if (this.isEmpty()) {
            this.addBack(e)
        } else if (this.lowestCount > 0) { 
            this.items[--this.lowestCount] = e
        } else {
            for (let i = this.count; i > 0; i--) {
                this.items[i] = this.items[i - 1]
            }
            this.count++
            this.lowestCount = 0
            this.items[0] = e
        }
    }

    /**
     * @param  {unknown[]} e
     */
    addBack(...e) {
        for(let i of e) {
            this.items[this.count++] = i
        }
    }

    removeFront() {
       if(this.isEmpty()) {
           return undefined
       }
       --this.count

       const res = this.items[this.lowestCount]
       delete this.items[this.lowestCount++]

       return res
    }

    removeBack() {
            if(this.isEmpty()) {
                return undefined
            }
            --this.count

            const res = this.items[this.count]
            delete this.items[this.count]

            return res
    }

    /**
     * @returns {unknown}
     */
    peekFront() {
       if(this.isEmpty()) {
           return undefined
       }

       return this.items[this.lowestCount]
    }

    peekBack() {
            if(this.isEmpty()) {
                return undefined
            }
            return this.items[this.count - 1]
         }
    
    /**
     * @returns {boolean}
     * 
     */
    isEmpty()
    {
       return this.count - this.lowestCount === 0
    }

    clear() {
        this.items = {}
        this.count = 0
        this.lowestCount = 0
    }

    size() {
       return this.count - this.lowestCount
    }
}