import React from 'react'
import { useParams } from 'react-router-dom'
import { useAxios } from '../hooks/useAxios'
// import { useFetch } from '../hooks/useFetch'

interface User {
  user:{
  _id:string;
  firstName:string
  email:string
  }
}

const UserDetails = () => {
  const { id } = useParams()
  const { data } = useAxios<User>(`users/${id}`)
  console.log(data?.user)

  if (!data) {
    return <p>Carregando...</p>
  }

  return (
    <ul>
      <li>ID: {data?.user?._id}</li>
      <li>Name: {data?.user?.firstName}</li>
      <li>Email: {data?.user?.email}</li>
    </ul>
  )
}
export default UserDetails
