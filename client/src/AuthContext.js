import React, {createContext,useState,useEffect} from 'react';
import axios from 'axios';

export const AuthContext = createContext({
  user: undefined,
  isLoggedIn: false,
  updateAuthStatus: () => {}
});

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(null);

    const updateAuthStatus = () => {
      axios.get("http://localhost:4000/user/authenticated", {validateStatus:null})
      .then(res => {
        setIsLoggedIn(res.data.isAuthenticated);
        setUser(res.data.user);
      })
      .catch(err => console.log(err))
    }

    useEffect(()=>{
      updateAuthStatus()
    }, [])

    return (
      <AuthContext.Provider value={{user : user, isLoggedIn : isLoggedIn, updateAuthStatus : updateAuthStatus}}>
          { children }
      </AuthContext.Provider>
    )
}