console.time('test')
class Node {
  constructor(value, neighbors = []) {
    this.value = value;
    this.neighbors = neighbors;
  }
}

// Recursive breadth-first search implementation
const bfs = (queue, visited, target) =>
  queue.length === 0
    ? false
    : queue[0].value === target
    ? true
    : bfs( [...queue.slice(1), ...queue[0].neighbors.filter(x =>!(visited.includes(x) || queue.includes(x)))],
        [...visited, queue[0]],
        target
      );

// Example usage:

// Create the nodes
const nodeA = new Node('A');
const nodeB = new Node('B');
const nodeC = new Node('C');
const nodeD = new Node('D');
const nodeE = new Node('E');
const nodeF = new Node('F');
const nodeG = new Node('G');

// Set the neighbors for each node
nodeA.neighbors = [nodeB, nodeC, nodeA];
nodeB.neighbors = [nodeD, nodeE, nodeC];

nodeC.neighbors = [nodeF];
nodeD.neighbors = [nodeG];

// Start BFS from nodeA to check if value 'F' is present
const searchFor = 'F'; // Replace 'F' with the value you want to search for
const result = bfs([nodeA], [], searchFor);
console.log(`Value ${searchFor} is ${result ? 'present' : 'not present'}`);


const searchFor2 = 'Z'; // Replace 'F' with the value you want to search for
const result2 = bfs([nodeA], [], searchFor2);
console.log(`Value ${searchFor2} is ${result2 ? 'present' : 'not present'}`);

console.timeEnd('test')






/* 

Minutia:

- queue[0].neighbors.filter(x =>!visited.includes(x) && !queue.includes(x))],   

Meaning: 
Everything that has not yet been visted or in the current queue, get 'em out of there and pass it in to 'bfs'! We need to do this because we don't too revisit any nodes! This happens when a cycle is present, or we are not traversing a tree, but a graph
It's a NAND gate!

How: 

1. Iterate through each element in queue[0] and check if the node 'x' is not present both in our visitor array and our queue at the same time.
If one returns True (one of them are present), this means the whole thing '&&' evaluates False, which indicates to filter() that we don't want it in our queue! It's already been visited!

*/