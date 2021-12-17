import { Queue } from '../queue/obj-queue.js'


/**
 * @param {unknown[]} elementsList
 * @param {number} num
 */
function hotPotato(elementsList, num) {
    const queue = new Queue()
    const elimitatedList = []

    for (let i = 0; i < elementsList.length; i++) {
        queue.enqueue(elementsList[i])
    }

    while (queue.size() > 1) {
        for (let i = 0; i < num; i++) {
            queue.enqueue(queue.dequeue())
        }
        elimitatedList.push(queue.dequeue())
    } 

    return {
    eliminated: elimitatedList,
    winner: queue.dequeue(),
    }
}

const batata = ['batata', 'batata', 'batata', 'batata', 'batata'];
const result = hotPotato(batata, 24);
result.eliminated.forEach(batata => {
console.log(`${batata} was eliminated from the Hot Potato game.`);
});
console.log(`The winner is: ${result.winner}`);