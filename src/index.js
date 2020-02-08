import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./index.css";
import AppView from './App'

import registerServiceWorker from './registerServiceWorker';

class App extends Component {

  render() {

    return (
      <div className="App">

        <BrowserRouter>
          <Switch>
            <Route path="/" component={AppView} exact/>
          </Switch>
        </BrowserRouter>

      </div>
    );
  }
}

ReactDOM.render( <App /> , document.getElementById('root'));

registerServiceWorker();