import * as React from 'react'

import { UserDetail, Coating } from './user';
import { useLocation } from 'react-router-dom';

export const UserView = () => {
  const location = useLocation();
  const id: number = parseInt(location.pathname.slice(1), 10);
  const [user, setUser] = React.useState<UserDetail>()

  React.useEffect(() => {
    fetch(`https://reqres.in/api/users/${id}`)
      .then((resposne) => resposne.json())
      .then((json: Coating<UserDetail>) => setUser(json.data))
  }, [id])


  return (
    <div>
      <div>{user?.id}</div>
      <div>{user?.first_name}</div>
      <div>{user?.last_name}</div>
      <div>{user?.email}</div>
      <div><img src={user?.avatar} alt={"avater"} /></div>
    </div>
  )
}