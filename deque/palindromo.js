import { DequeN } from './deque-negativo.js'

/**
 * @param {string} pString
 * @returns {boolean}
 */
function palindromeChecker(pString) {
    if (pString === undefined || pString === null ||
        (pString !== null && pString.length === 0)) { // {1}
        return false;
    }
    const deque = new DequeN
    // @ts-ignore
    const modifiedString = pString.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replaceAll(' ', '')
    const splitedString = modifiedString.split('')
    let backwardWord = ''

    deque.addBack(...splitedString)
    
    while(!deque.isEmpty()) {
        backwardWord += deque.removeBack()
    }   

    if(backwardWord == modifiedString) {
        return true
    }
    return false
}

console.log('a', palindromeChecker('a'));
console.log('aa', palindromeChecker('aa'));
console.log('kayak', palindromeChecker('kayak'));
console.log('level', palindromeChecker('level'));
console.log('Was it a car or a cat I saw', palindromeChecker('Was it a car or a cat I saw'));
console.log('Step on no pets', palindromeChecker('Step on no pets'));
console.log('após a sopa', palindromeChecker('após a sopa'));