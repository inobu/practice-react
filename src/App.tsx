import * as React from 'react'
import { User, Payload } from './user';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import { UserView } from './UserView';

const App = () => {
  const [users, setContent] = React.useState<User[]>([]);
  const history = useHistory()

  React.useEffect(() => {
    fetch('https://reqres.in/api/users')
      .then((response) => response.json())
      .then((json: Payload<User>) => setContent(json.data))
  }, [])

  return (
    <div>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <a href="#" onClick={() => history.push(`/${user.id}`)}>{user.first_name} {user.last_name}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App;