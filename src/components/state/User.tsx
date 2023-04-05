import { useState } from "react"

type AuthUser = {
    name: string,
    email: string,
}
export const User = () => {
    const [user, setUser] = useState<AuthUser | null>(null)


    const [isLoggedIn, setIsLoggedIn] = useState(false)


    const handleLogin = () => {
        setUser({
            name: 'GOutham',
            email : 'r3ddy03@gmail.com'
        })
    }
    const handleLogout = () => {
        setUser(null)
    }

    return (
    <div>
        <button onClick={handleLogin}>login</button>
        <button onClick={handleLogout}>logout</button>
        <div>User name is  {user?.name}</div>
        <div>user eamil is {user?.email}</div>
    </div>
  )
}
