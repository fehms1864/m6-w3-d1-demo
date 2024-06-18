import { pointRadial } from 'd3-shape';

let index = 1;

let randomNum = () => 20 + Math.floor(80 * Math.random());

export function getInitialData() {
  let numItems = 10;
  let data = [];
  for (let i = 0; i < numItems; i++) {
    data = getAppendedData(data);
  }
  return data;
}

export function getAppendedData(data) {
  let ret = data.map(d => d);
  ret.push({
    id: "id-" + index,
    value: randomNum(),
    name: "Item " + index
  });
  index++;
  return ret;
}

export function getTruncatedData(data) {
  let ret = data.map(d => d).slice(1);
  return ret;
}

export function getUpdatedData(data) {
  let ret = data.map(d => ({ id: d.id, value: randomNum(), name: d.name }));
  return ret;
}

export function findCollapsedParent(node) {
  if (!node.data.isExpanded) {
    return node;
  } else if (node.parent) {
    return findCollapsedParent(node.parent);
  } else {
    return null;
  }
}

export function getTopLeft(node, layout, orientation) {
  if (layout === 'polar') {
    const [radialX, radialY] = pointRadial(node.x, node.y);
    return {
      top: radialY,
      left: radialX
    }
  } else if (orientation === 'vertical') {
    return {
      top: node.y,
      left: node.x
    }
  } else {
    return {
      top: node.x,
      left: node.y
    }
  }
}