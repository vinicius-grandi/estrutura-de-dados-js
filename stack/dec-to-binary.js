"use strict"
import { ObjStack } from './object-based-stack.js'

/**
 * @param {number[]} num
 * @returns {string}
 * @param {number} base
 * @var {string} baseString
 */
function baseConverter(base, ...num) {
    const remStack = new ObjStack
    let rem
    /** 
    * @var {string} baseString
    */
    let baseString = ''

    if(base < 2 || base > 36) {
        return 'Not Allowed'
    }

    for(let e of num){
        while(e > 0) { 
        rem = Math.floor(e % base)
        remStack.push(rem)
        e = Math.floor(e / base)

        if(e == 0) {
            remStack.push('/')
        }
    }}
    while(!remStack.isEmpty()) {
        baseString += `${remStack.pop()}`
    }
    return baseString
}

console.log(baseConverter(2, 140, 123, 124, 3))