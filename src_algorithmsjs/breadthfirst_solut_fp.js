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


