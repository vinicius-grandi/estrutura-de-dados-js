class Graph {
  #nodes;

  get nodes() {
    return this.#nodes;
  }

  constructor() {
    this.#nodes = {};
  }

  addNode(node) {
    this.#nodes[node] = [];
  }

  addEdge(source, destination) {
    if (!this.#nodes[source] || !this.#nodes[destination]) {
      return false;
    }

    if (!this.#nodes[source].includes(destination)) {
      this.#nodes[source].push(destination);
    }

    if (!this.#nodes[destination].includes(source)) {
      this.#nodes[destination].push(source);
    }
  }

  bfs (source, destination) {
    const queue = [source];
    const visited = {};

    while (queue.length) {
      let current = queue.shift();
      if (visited[current]) {
        continue;
      }

      if (current === destination) {
        return true;
      }

      visited[current] = true;
      let neighbor = this.#nodes[current];
      for (let ind = 0; ind < neighbor.length; ind += 1) {
        queue.push(neighbor[ind]);
      }
    }

    return false;
  }
}

const graph = new Graph();

graph.addEdge('node1', 'node2');
graph.addNode('node1');
graph.addNode('node2');
graph.addEdge('node1', 'node2');
console.log(graph.bfs('node1', 'node23'));
