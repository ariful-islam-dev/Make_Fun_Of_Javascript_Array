/**
 * @title: Array Push and Poll Methods
 */

const Queue = require('./lecture02');

// const queue = new Queue();

// queue.enqueue('Task One')
// queue.enqueue('Task Two')
// queue.enqueue('Task Three')
// queue.showQueue()
// queue.dequeue();
// queue.dequeue();
// queue.showQueue();
// console.log(queue.next());

const q = [];
q.push('Item One')
q.push('Item Two')
q.push('Item Three')
q.push('Item Four')
q.shift();
q.shift();

console.log(q);