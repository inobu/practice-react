import * as React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { UserView } from './UserView';
import { UserList } from './UserList'

const App = () => {
  return (
    <div>
      <Router>
        <UserList />
        <Route path="/:id" exact>
          <UserView />
        </Route>
      </Router>
    </div>
  )
}

export default App;