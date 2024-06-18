import './App.css';
import BarChart from './BarChart';
import React from 'react';
import Tree from "./Tree";
import {data} from "./data";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Canvas } from "@react-vertex/core";
import { useViewportSize } from "@react-vertex/dom-hooks";
import Scene from "./Scene";
import Navbar from './bar';

function TreeNode() {
  return (
    <Tree data={data} width={600} height={500} />
  )
}

function Example() {
  const { width, height } = useViewportSize();

  return (
    <Canvas width={width} height={height}>
      <Scene />
    </Canvas>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
        <Switch>
          <Route path='/' exact={true} component={BarChart} />
          <Route path='/tree' exact={true} component={TreeNode} />
          <Route path='/lightorb' exact={true} component={Example} />
        </Switch>
      </Router>
  );
}

export default App;