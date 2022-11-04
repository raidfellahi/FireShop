import React, { useContext, createContext, useState,useEffect} from 'react'
import { auth } from '../Firebase.js'

const AuthContext = createContext()

export function useAuth (){
    return useContext(AuthContext)
    
}
export  function AuthProvider ({children}) {
    const [user, setUser] = useState(null)

    useEffect(()=>{
     const unsubscribe =  auth.onAuthStateChanged(user =>{
            setUser(user)
        })
        return unsubscribe
    },[user])

    const value = {
      user}
  return (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
  )
}