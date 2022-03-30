import React, { useCallback } from 'react'
import { Link } from 'react-router-dom'
import { useAxios } from '../hooks/useAxios'
import api from '../services/api'
import { mutate as mutateGlobal } from 'swr'

interface User{
  _id:string,
  firstName: string,
}

const UserList:React.FC = () => {
  const { data, mutate } = useAxios('users')

  const handleNameChange = useCallback((id: string) => {
    api.put(`users/${id}`, { firstName: 'Roberto' })

    const updatedUsers = {
      users: data?.users.map((user:User) => {
        if (user._id === id) {
          return { ...user, firstName: 'Roberto' }
        }
        return user
      })
    }
    mutate(updatedUsers, false)
    mutateGlobal(`users/${id}`, { id, firstName: 'Roberto' })
  }, [data, mutate])

  if (!data) {
    return <p>Carregando...</p>
  }

  return (
    <ul>
      {data?.users?.map((user:User) => (
        <li key={user._id}>
          <Link to={`/user/${user._id}`}>
            {user.firstName}
          </Link>
          <button type='button' onClick={() => handleNameChange(user._id)}>Mudar nome</button>
        </li>
      ))}
    </ul>
  )
}

export default UserList
