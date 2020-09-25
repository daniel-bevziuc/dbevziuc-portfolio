import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Landing from "./pages/landing/landing";
import About from "./pages/about/about";
import Work from "./pages/work/work";
// import SingleProject from './pages/singleProject/SingleProject';
import { Route, BrowserRouter as Router } from "react-router-dom";
import {ProjectProvider} from './Context';
import * as serviceWorker from "./serviceWorker";

const routing = (
  <ProjectProvider>
    <Router>
        <Route exact path="/" component={Landing} />
        <Route exact path="/about" component={About} />
        <Route exact path="/work" component={Work} />
        {/* <Route exact path="/project/:slug" component={SingleProject} /> */}
    </Router>
  </ProjectProvider>
);
ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();