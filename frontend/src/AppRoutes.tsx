import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import UserList from './pages/UserList'
import UserDetails from './pages/UserDetails'

export default function AppRoutes () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserList />}></Route>
        <Route path="/user/:id" element={<UserDetails />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
