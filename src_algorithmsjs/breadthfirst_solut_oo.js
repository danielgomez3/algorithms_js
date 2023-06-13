// Define a class to represent a node in the graph
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

// Function to create the graph and return the starting node
const createGraph = () => {
  const nodeA = new Node('A');
  const nodeB = new Node('B');
  const nodeC = new Node('C');
  const nodeD = new Node('D');
  const nodeE = new Node('E');
  const nodeF = new Node('F');
  const nodeG = new Node('G');


  // Set the neighbor relationships for each node
  nodeA.neighbors = [nodeB, nodeC];
  nodeB.neighbors = [nodeA, nodeD];
  nodeC.neighbors = [nodeF];
  nodeD.neighbors = [nodeG];


  return nodeA; // Return the starting node of the graph
};

// Create the graph by calling the createGraph function
const startNode = createGraph();

// Choose the target value to search for
const targetValue = 'D';

// Run the breadth-first search algorithm and store the result
const result = breadthFirstSearch(startNode, targetValue);

// Print the result based on whether the target value was found or not
if (result) {
  console.log(`The target value '${targetValue}' was found using breadth-first search.`);
} else {
  console.log(`The target value '${targetValue}' was not found.`);
}