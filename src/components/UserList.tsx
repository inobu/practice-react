import * as React from 'react'
import { User, Payload } from './User';
import { useHistory } from 'react-router-dom';
import * as history from 'history'

export const UserListContainer = () => {
  const [users, setContent] = React.useState<User[]>([]);
  const history = useHistory()

  React.useEffect(() => {
    fetch('https://reqres.in/api/users')
      .then((response) => response.json())
      .then((json: Payload<User>) => setContent(json.data))
  }, [])

  return <UserListComponent users={users} history={history} />
}

interface UserListProps {
  users: User[],
  history: history.History<history.History.UnknownFacade>
}

const UserListComponent: React.FC<UserListProps> = ({ users, history }: UserListProps) => {
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