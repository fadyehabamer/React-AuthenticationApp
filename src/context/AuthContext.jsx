import React, { useState } from "react";


export const AuthContext = React.createContext();
AuthContext.displayName = 'AuthContext'

const readStoredAuth = () => {
    try {
        const token = localStorage.getItem('token')
        const email = localStorage.getItem('email')
        return token && email ? { token, email } : {}
    } catch {
        // storage can be unavailable (e.g. blocked cookies / some private modes)
        return {}
    }
}

const AuthProvider = (props) => {

    // read the saved session synchronously on first render so a logged-in
    // user doesn't see the login form flash before an effect restores it
    const [auth, setAuth] = useState(readStoredAuth);



    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;