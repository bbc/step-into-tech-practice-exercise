import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

test('renders eastenders header', () => {
  const { getByText } = render(<App />)
  const title = getByText(/Eastenders Database/i)
  expect(title).toBeInTheDocument()
})
