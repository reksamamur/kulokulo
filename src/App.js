import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import HomeActivity from "./pages/HomeActivity";
import ListMenuActivity from "./pages/ListMenuActivity";
import DetailActivity from "./pages/DetailActivity";
import CartActivity from "./pages/CartActivity";
import DoneActivity from "./pages/DoneActivity";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomeActivity}/>
        <Route exact path="/listmenu" component={ListMenuActivity}/>
        <Route path="/listmenu/:id" component={DetailActivity}/>
        <Route path="/cart" component={CartActivity}/>
        <Route path="/done" component={DoneActivity}/>
      </Switch>
    </Router>
  );
}

export default App;
