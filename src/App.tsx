import * as React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { UserViewContainer } from './components/UserView';
import { UserListContainer } from './components/UserList'

const App = () => {
  return (
    <div>
      <Router>
        <UserListContainer />
        <Route path="/:id" exact>
          <UserViewContainer />
        </Route>
      </Router>
    </div>
  )
}

export default App;