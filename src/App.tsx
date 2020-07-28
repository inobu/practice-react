import * as React from 'react'
import { User, Payload } from './user';

const App = () => {
  const [users, setContent] = React.useState<User[]>([]);

  React.useEffect(() => {
    fetch('https://reqres.in/api/users')
      .then((response) => response.json())
      .then((json: Payload<User>) => setContent(json.data))
  }, [])

  return (
    <ul>
      {users.map(user => (
        <li>{user.first_name} {user.last_name}</li>
      ))}
    </ul>
  )
}

export default App;