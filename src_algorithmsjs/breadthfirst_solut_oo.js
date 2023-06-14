class Node {
  constructor(value, neighbors = []) {
    this.value = value;
    this.neighbors = neighbors;
  }
}

// Function to perform breadth-first search on a graph
const breadthFirstSearch = (startNode, targetValue) => {
  const visited = new Set(); // Set to keep track of visited nodes
  const queue = [[startNode]]; // Queue to store paths to explore

  // Recursive function to traverse the graph using breadth-first search
  const traverse = (path) => {
    const currentNode = path[path.length - 1]; // Get the current node from the path
    visited.add(currentNode); // Mark the current node as visited

    if (currentNode.value === targetValue) {
      // If the current node has the target value, return true
      return true;
    }

    for (const neighbor of currentNode.neighbors) {
      // Iterate over the neighbors of the current node
      if (!visited.has(neighbor)) {
        // If the neighbor has not been visited, add it to the queue with an updated path
        queue.push([...path, neighbor]);
      }
    }

    if (queue.length === 0) {
      // If the queue is empty, all possible paths have been explored, return false
      return false;
    }

    // Recursive call to traverse the next node in the queue
    return traverse(queue.shift());
  };

  // Start the traversal with the initial path containing the start node
  return traverse([startNode]);
};

