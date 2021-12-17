export default class Node {
    /**
     * 
     * @param {unknown} element
     * @param {object | undefined} next
     */
    constructor(element, next) {
        this.element = element;
        this.next = undefined;
    }
}