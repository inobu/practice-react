import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';

import App from './App'
import { UserView } from './UserView';

ReactDOM.render(
  <div>
    <Router>
      <Route path="/" exact>
        <App />
      </Route>
      <Route path="/:id" exact>
        <App />
        <UserView />
      </Route>
    </Router>
  </div>,
  document.getElementById('app')
)