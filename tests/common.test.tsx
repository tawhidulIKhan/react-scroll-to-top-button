import React from 'react'
import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import ScrollToTopButton from '../src/components/ScrollToTopButton'

test('renders GotoTop button correctly', () => {
  render(<ScrollToTopButton />)
  expect(screen.getByRole('button')).toBeInTheDocument()
})

test('scroll to top when the button is clicked', () => {
  render(<ScrollToTopButton />)
  window.scrollTo = jest.fn()
  const button = screen.getByRole('button')
  fireEvent.click(button)
  expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' })
})
