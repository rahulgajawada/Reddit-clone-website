import React from "react";
import Home from './Home';
import WorkOrder from './WorkOrder';
import Register from './Register';
import Status from './Status';
import { Route } from 'react-router-dom';



export default function App() {

  return (
    <div classNeame="App">
      <Route exact path="/" component={Home} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/workorder" component={WorkOrder} />
      <Route exact path="/statusupdate" component={Status} />
    </div>
  );
}