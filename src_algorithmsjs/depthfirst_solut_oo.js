function allPaths(graph, source, target) {
  const paths = [];
  const visited = new Set();

  function dfs(current, path) {
    if (current === target) {
      paths.push(path);
      return;
    }

    visited.add(current);
    for (const neighbor of graph[current]) {
      if (!visited.has(neighbor)) {
        dfs(neighbor, [...path, neighbor]);
      }
    }

    visited.delete(current);
  }

  dfs(source, [source]);
  return paths;
}

// Example usage:
const graph = {
  'A': ['B', 'C'],
  'B': ['D'],
  'C': ['E'],
  'D': [],
  'E': ['F'],
  'F': []
};

const sourceNode = 'A';
const targetNode = 'F';

const result = allPaths(graph, sourceNode, targetNode);
console.log(result);