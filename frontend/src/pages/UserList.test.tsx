/* eslint-disable no-undef */
import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import UserList from './UserList'

describe('UserList component', () => {
  it('should show loading... before show the list', () => {
    const { getByTestId } = render(<UserList />)
    expect(getByTestId('loading')).toBeInTheDocument()
  })
})
