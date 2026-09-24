import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

describe('App', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  afterEach(() => {
    cleanup()
  })

  it('rejects a password shorter than 9 characters', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.type(screen.getByLabelText('Email address'), 'demo@example.com')
    await user.type(screen.getByLabelText('Password'), 'short')
    await user.click(screen.getByRole('button', { name: 'Submit' }))
    expect(screen.getByRole('alert')).toHaveProperty('textContent', 'Login failed, check your email or password')
    expect(localStorage.getItem('token')).toBeNull()
  })

  it('logs in, persists the session and logs out', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.type(screen.getByLabelText('Email address'), 'demo@example.com')
    await user.type(screen.getByLabelText('Password'), 'longenough')
    await user.click(screen.getByRole('button', { name: 'Submit' }))
    expect(screen.getByRole('heading', { name: 'Welcome to the app' })).toBeTruthy()
    expect(localStorage.getItem('email')).toBe('demo@example.com')
    expect(localStorage.getItem('token')).toBeTruthy()

    await user.click(screen.getByRole('button', { name: 'Logout' }))
    expect(screen.getByRole('heading', { name: 'Login' })).toBeTruthy()
    expect(localStorage.getItem('token')).toBeNull()
  })

  it('restores a saved session on load', () => {
    localStorage.setItem('token', 'abc')
    localStorage.setItem('email', 'saved@example.com')
    render(<App />)
    expect(screen.getByRole('heading', { name: 'Welcome to the app' })).toBeTruthy()
    expect(screen.getByText('saved@example.com')).toBeTruthy()
  })

})
