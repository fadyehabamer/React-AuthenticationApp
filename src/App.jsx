import { useState, useContext } from 'react'
import './App.css'

import Header from './components/Header'
import Login from './components/Login'
import Welcome from './components/Welcome'

import { AuthContext } from './context/AuthContext'
import AuthProvider from './context/AuthContext'

function App() {

  // get auth from context
  const { auth } = useContext(AuthContext)
  // console.log(auth)

  return (
    <div className="app">
      <Header />
      {auth.email ? <Welcome /> : <Login />}
    </div>
  )
}

function AppWithStore() {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  )
}

export default AppWithStore


// before useContext
{/* <AuthContext.Consumer>
  {(value) => {
    console.log(value)
    return value.auth.email ? <Welcome /> : <Login />
  }}
</AuthContext.Consumer> */}