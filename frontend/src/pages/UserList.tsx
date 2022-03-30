import React from 'react'
import { Link } from 'react-router-dom'
import { useAxios } from '../hooks/useAxios'
// import { useAxios } from '../hooks/useAxios'

interface Users {
  users:[{
     _id:string,
      firstName: string,
    }]
}

const UserList:React.FC = () => {
  const { data } = useAxios<Users>('users')

  if (!data) {
    return <p>Carregando...</p>
  }

  return (
    <ul>
      {data?.users?.map(user => (
        <li key={user._id}>
          <Link to={`/user/${user._id}`}>
            {user.firstName}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default UserList
