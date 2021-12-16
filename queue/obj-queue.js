class Queue {
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
     * @param  {unknown[]} e
     */
    enqueue(...e) {
       for(let i of e) {
           this.items[this.count++] = i
       }
    }

    dequeue()
    {
       if(this.isEmpty()) {
           return undefined
       }
       --this.count

       const res = this.items[this.lowestCount]
       delete this.items[this.lowestCount++]

       return res
    }

    /**
     * @returns {unknown}
     */
    peek()
    {
       if(this.isEmpty()) {
           return undefined
       }

       return this.items[this.lowestCount]
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

    /**
          * @param {string} separator
          * @returns {string}
          */
     toString(separator = ',') {
        if (this.isEmpty()) {
            return '';
        }

        let objString = `${this.items[this.lowestCount]}`

        for (let i = this.lowestCount + 1; i < this.count; i++) {
            objString += `${separator}${this.items[i]}`
        }
            
        return objString;    
     }
}