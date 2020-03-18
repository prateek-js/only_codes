function getDataByParentId(data, parent) {
  const result = data
    .filter(d => d.parentId === parent);

  if (!result && !result.length) {
    return null;
  }

  return result.map(({ dataId, name, description }) => 
    ({ dataId, name, description, children: getDataByParentId(data, dataId) }))
}

const data = [{
    dataId: 1,
    name: 'test1',
    description: 'some desc',
    parentId: null
  },
  {
    dataId: 2,
    name: 'test2',
    description: 'some desc',
    parentId: 1
  },
  {
    dataId: 3,
    name: 'test3',
    description: 'some desc',
    parentId: 1
  },
  {
    dataId: 4,
    name: 'test4',
    description: 'some desc',
    parentId: null
  },
  {
    dataId: 5,
    name: 'test5',
    description: 'some desc',
    parentId: 4
  },
  {
    dataId: 6,
    name: 'test6',
    description: 'some desc',
    parentId: 5
  }
];

console.log(getDataByParentId(data, null));



//Solution 2

let dataMap = data.reduce((m, d) => {
  m[d.dataId] = Object.assign({}, d);
  return m;
}, {});

const trees = data.filter(d => {
  if (d.parentId !== null) { // assign child to its parent
    let parentNode = dataMap[d.parentId];
    if (!('children' in parentNode)) parentNode['children'] = [];
    parentNode.children.push(dataMap[d.dataId]);
    return false;
  }
  return true; // root node, do nothing
}).map(d => dataMap[d.dataId]);

