var graph = [[0,1,1,1],[1,0,1,0],[1,1,0,1],[1,0,1,0]];
var m = 3;
var vertex = graph.length;
var mainSol = function(graph, m) {
  graphcolor(graph, m);
  return 0;
}

var graphcolor = function(graph, m) {
  let color = [];
  for(let i = 0; i<this.vertex; i++) {
    color[i] = 0;
  }
  if(!graphColorUtil(graph, m , color, 0)) {
    return false;
  }
  printSolution(color);
  return true;
}

var printSolution = function(color) {
  console.log("solution exist");
  for(let i= 0; i<this.vertex; i++) {
    console.log("/n" +color[i]);
  }
}

var graphColorUtil = function(graph, m, color, ver){
  if(ver === this.vertex) return true;
  for(let i = 1; i <= m; i++) {
    if(isFillPos(graph, color, i, ver)) {
      color[ver] = i;
      if(graphColorUtil(graph, m, color, ver+1)) {
        return true;
        color[ver] = 0;
      }
    }
  }
  return false;
}

var isFillPos = function(graph, color, index, ver) {
  for(let i =0 ; i < this.vertex; i++) {
    if(graph[ver][i] && index === color[i]){
      return false
    }
    return true;
  }
}

mainSol(graph, m);
