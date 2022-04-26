import React, { useState, useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const authContextObject = useContext(AuthContext)

    const login = (e) => {
        e.preventDefault();
        if (password.length > 8 && email.length > 0 && email.includes('@') && email.includes('.')) {
            const token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
            localStorage.setItem('token', token)
            localStorage.setItem('email', email)
            authContextObject.setAuth({
                email,
                token
            })
        } else {
            alert('Login failed , check your email or password')
        }

    }


    return (
        <form className="my-3 container">
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
                <input type="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)} id="exampleInputPassword1" />
            </div>
            <button type="submit" className="btn btn-dark" onClick={login}>Submit</button>
        </form>
    )
}

export default Login