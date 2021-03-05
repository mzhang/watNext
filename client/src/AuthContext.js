import { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const AuthContext = createContext({
  user: undefined,
  isLoggedIn: false,
  refreshAuthStatus: () => {},
})

export default function AuthProvider ({ children }) {
  const [user, setUser] = useState(null)
  const [isLoggedIn, setIsLoggedIn] = useState(null)

  const refreshAuthStatus = () => {
    axios.get('/api/user/authenticated', { validateStatus: null })
      .then(res => {
        setIsLoggedIn(res.data.isAuthenticated)
        setUser(res.data.user)
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    refreshAuthStatus()
  }, [])

  return (
    <AuthContext.Provider value={{
      user: user,
      isLoggedIn: isLoggedIn,
      refreshAuthStatus: refreshAuthStatus,
    }}>
      {children}
    </AuthContext.Provider>
  )
}