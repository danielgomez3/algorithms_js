const allPaths = (graph, source, target) => {
  const dfs = (currentNode, path, visited) => 
    currentNode === target
      ? [path]
      : graph[currentNode].flatMap(x => // 'x' will start as 'A's first neighbor, 'B'.
          visited.has(x) // Have we visited 'A's neighbors before?
            ? [] // If A's neighbors have been visited, do nothing, and go up a level.
            : dfs(x, [...path, x], new Set([...visited, currentNode]))) // Else,

  // return an array of arrays.
  return dfs(source, [source], new Set());  // The new set will be our 'visited' list
};

const graph = {
  A: ['B', 'C'],
  B: ['D', 'E'],
  C: ['D', 'F'],
  D: ['J'],
  E: ['J'],
  F: ['J'],
  J: [],
};

const sourceNode = 'A';
const targetNode = 'J';

const result = allPaths(graph, sourceNode, targetNode);
console.log(result);

/* NOTE:
- 'visited' means that it was once the 'currentNode'. A little different form 'path'.
- The 'path' will always be one step ahead of 'visited'. We mark something as 'visited' when we are done.

- To make this easier to understand, just think of it like this: First come, first serve. Whatever is A's first neighbor, we go to that neighbor's first neighbor.
We don't really need a stack for that if you think about it! Stacks personify this perfectly though.
Remember: 'hail mary!'

- Once we got what we need, or reach a dead end, we go back up as far up as necessary to find something new. But his more often means we just go 'next door'.

*/
