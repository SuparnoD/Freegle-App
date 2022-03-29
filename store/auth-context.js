import { createContext, useState } from "react";

export const AuthContext = createContext({
    token: '',
    email: '',
    setEmail: () => {},
    isAuthenticated: false,
    authenticate: () => {},
    logout: () => {},
});

function AuthContextProvider({children}) {
    const [authToken, setAuthToken] = useState();
    const [userEmail, setUserEmail] = useState();

    function authenticate(token) {
        setAuthToken(token);
    }

    function setEmail(userEmail){
        setUserEmail(userEmail);
    }

    function logout() {
        setAuthToken(null);
        setEmail(null);
    }

    const value = {
        token: authToken,
        email: userEmail,
        setEmail: setEmail,
        isAuthenticated: !!authToken,
        authenticate: authenticate,
        logout: logout
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthContextProvider;