import { onAuthStateChanged } from "firebase/auth"
import { useEffect, useState } from "react"
import AuthContext from './context'

export default function AuthProvider({children}){
    const [user, setUser] = useState(null)
    return (
        <AuthContext.Provider value={{user,setUser}}>
            {children}
        </AuthContext.Provider>
    )
}