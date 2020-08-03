import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';

import App from './App'
import { UserView } from './UserView';

ReactDOM.render(
  <div>
    <Router>
      <App />
      <Route path="/:id" exact>
        <UserView />
      </Route>
    </Router>
  </div>,
  document.getElementById('app')
)