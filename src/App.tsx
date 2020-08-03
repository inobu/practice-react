import * as React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { UserViewContainer } from './components/UserView';
import { UserList } from './components/UserList'

const App = () => {
  return (
    <div>
      <Router>
        <UserList />
        <Route path="/:id" exact>
          <UserViewContainer />
        </Route>
      </Router>
    </div>
  )
}

export default App;