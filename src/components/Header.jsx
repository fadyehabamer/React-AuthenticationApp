import React , {useContext} from 'react'
import { AuthContext } from '../context/AuthContext'

function Header() {
    const { auth , setAuth } = useContext(AuthContext)

    const logout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('email')
        setAuth({})
    }
    return (

        <nav className="navbar navbar-dark bg-dark ">
            <div className="container">
                <span className="navbar-brand mb-0 h1">Top Secret info</span>
                <div className="text-white ">
                    {auth.email 
                        ? <span> {auth.email} 
                            <button className="ms-3 btn btn-danger" onClick={logout}> Logout </button>
                        </span>
                        : <span>You need to login</span>}
                </div>
            </div>


        </nav>
    )
}

export default Header