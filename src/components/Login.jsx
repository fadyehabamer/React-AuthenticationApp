import React, { useState, useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [error, setError] = useState('')

    const authContextObject = useContext(AuthContext)

    const login = (e) => {
        e.preventDefault();
        setError('')
        if (password.length > 8 && email.length > 0 && email.includes('@') && email.includes('.')) {
            const token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
            localStorage.setItem('token', token)
            localStorage.setItem('email', email)
            authContextObject.setAuth({
                email,
                token
            })
        } else {
            setError('Login failed, check your email or password')
        }

    }


    return (
        <form className="my-3 container" onSubmit={login} noValidate>
            <h2 className='my-3'>
                Login
            </h2>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" value={email} onChange={e => setEmail(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <div className="input-group">
                    <input type={showPassword ? 'text' : 'password'} className="form-control" value={password} onChange={e => setPassword(e.target.value)} id="exampleInputPassword1" aria-describedby="passwordHelp" autoComplete="current-password" />
                    <button type="button" className="btn btn-outline-secondary" onClick={() => setShowPassword(shown => !shown)} aria-controls="exampleInputPassword1" aria-label={showPassword ? 'Hide password' : 'Show password'}>
                        {showPassword ? 'Hide' : 'Show'}
                    </button>
                </div>
                <div id="passwordHelp" className="form-text">Must be at least 9 characters.</div>
            </div>
            {error && <div className="alert alert-danger" role="alert">{error}</div>}
            <button type="submit" className="btn btn-dark">Submit</button>
        </form>
    )
}

export default Login