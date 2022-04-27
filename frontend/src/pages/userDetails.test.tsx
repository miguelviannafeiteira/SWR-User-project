/* eslint-disable no-undef */
import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import UserDetails from './UserDetails'

describe('UserDetails component', () => {
  it('should show loading... before show the list', () => {
    const { getByTestId } = render(<UserDetails />)
    expect(getByTestId('loading')).toBeInTheDocument()
  })
})
