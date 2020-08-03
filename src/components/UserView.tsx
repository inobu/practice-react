import * as React from 'react'
import { UserDetail, Coating } from './User';
import { useLocation } from 'react-router-dom';

export const UserViewContainer: React.FC = () => {
  const location = useLocation();
  const id: number = parseInt(location.pathname.slice(1), 10);
  const [user, setUser] = React.useState<UserDetail>()

  React.useEffect(() => {
    fetch(`https://reqres.in/api/users/${id}`)
      .then((resposne) => resposne.json())
      .then((json: Coating<UserDetail>) => setUser(json.data))
  }, [id])

  return <UserViewComponent userDetail={user} ></UserViewComponent>
}

interface UserViewProps {
  userDetail: UserDetail | undefined
}

const UserViewComponent: React.FC<UserViewProps | undefined> = (props: UserViewProps) => {
  return (
    <div>
      <div>{props.userDetail?.id}</div>
      <div>{props.userDetail?.first_name}</div>
      <div>{props.userDetail?.last_name}</div>
      <div>{props.userDetail?.email}</div>
      <div><img src={props.userDetail?.avatar} alt={"avater"} /></div>
    </div>
  )
}