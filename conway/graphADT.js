// javascript graph class
class Graph {
  // defining vertex array and adjacency list
  constructor(numOfVertices) {
    this.numOfVertices = numOfVertices;
    this.AdjList = new Map();
  }

  // function implementation

  // addVertex(v) – It adds the vertex v as key to adjList
  // and initialize its values with an array.
  addVertex(v)  { // add vertex to the graph
      // initialize the adjacency list with a null array
      this.AdjList.set(v, new Set());
  }

  // addEdge(src, dest) – It adds an edge between the src and destination.
  // add edge to the graph
  addEdge(v, w) {

      //****only add edge if it does not exist already
      // get the list for vertex v and put the
      // vertex w denoting edge betweeen v and w
      this.AdjList.get(v).add(w);

      // Since graph is undirected,
      // add an edge from w to w also
      this.AdjList.get(w).add(v);
  }

  removeEdge(v, w) {
    // delete outgoing edge
    this.AdjList.get(v).delete(w);
    // delete incoming edge
    this.AdjList.get(w).delete(v);
  }

  // remove a vertext from a graph and all of its edges
  removeVertex(v) {
    // could add to check if node exists:
    // if (this.AdjList.get(v) !== undefined) {}

    // delete all edges connected to node v
    for (var j of this.AdjList.keys()) {
      for (var i of this.AdjList.get(v)) {
        g.removeEdge(i, v);
      }
    }

    // delete node v
    this.AdjList.delete(v);
  }


// printGraph() – It prints vertices and its adjacency list.
// Prints the vertex and adjacency list
 printGraph() {
    // get all the vertices
    var get_nodes = this.AdjList.keys();

    // iterate over the vertices
    for (var i of get_nodes) {
        // create the corresponding adjacency list
        // for the vertex
        var get_values = this.AdjList.get(i);
        var conc = "";

        // iterate over the adjacency list
        // concatenate the values into a string
        for (var j of get_values)
            conc += j + " ";

        // print the vertex and its adjacency list
        console.log(i + " -> " + conc);
    }
  }

  degreeCentrality() {
    // get all the vertices
    var get_nodes = this.AdjList.keys();

    // iterate over the vertices
    for (var i of get_nodes) {
        // create the corresponding adjacency list
        // for the vertex
        var get_values = this.AdjList.get(i);
        var degree = 0;

        // iterate over the adjacency list
        // concatenate the values into a string
        for (var j of get_values)
            degree++;
            console.log(degree);
    }
  }
}