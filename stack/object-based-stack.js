"use strict";
export class ObjStack {
    /**
     * @constructor  
     */
    constructor() {
        /**
        * @private  
        */
        this.items = {}

        /**
        * @private  
        */
        this.count = 0
    }
        /**
     * @param  {unknown[]} e
     */
         push(...e)
         {
            for(let i of e) {
                this.items[this.count++] = i
            }
         }
     
         pop()
         {
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
         peek()
         {
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
            return this.count === 0
         }
     
         clear() {
             this.items = {}
             this.count = 0
         }
     
         size() {
            return this.count
         }
         /**
          * @param {string} separator
          * @returns {string}
          */
         toString(separator = ',') {
            if (this.isEmpty()) {
                return '';
            }

            let objString = `${this.items[0]}`; // {1}

            for (let i = 1; i < this.count; i++) { // {2}
                objString += `${separator}${this.items[i]}`
                }
                
            return objString;    
         }
}