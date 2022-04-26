import React, { useState, useContext, useEffect } from "react";


export const AuthContext = React.createContext();
AuthContext.displayName = 'AuthContext'

const AuthProvider = (props) => {

    const [auth, setAuth] = useState({});

    useEffect(() => {
        const token = localStorage.getItem('token')
        const email = localStorage.getItem('email')
        if (token && email) {
            setAuth({
                token,
                email
            })
        }
    }, [])



    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;