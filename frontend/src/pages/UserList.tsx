import React, { useEffect, useState } from 'react'
import api from '../services/api'
import { Link } from 'react-router-dom'
// import { mutate as mutateGlobal } from 'swr'

interface User {

  _id:string;
  firstName: string;
}

const UserList:React.FC = () => {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    api.get('users').then(({ data }) => {
      setUsers(data.users)
    })
  }, [])
  console.log(users)

  return (
    <ul>
      {users?.map(user => (
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
