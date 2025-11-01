import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return context
}

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    // Check for existing session on app load
    useEffect(() => {
        const savedUser = localStorage.getItem('liftuplabs_user')
        if (savedUser) {
            try {
                setUser(JSON.parse(savedUser))
            } catch (error) {
                console.error('Error parsing saved user:', error)
                localStorage.removeItem('liftuplabs_user')
            }
        }
        setIsLoading(false)
    }, [])

    const login = (userData) => {
        setUser(userData)
        localStorage.setItem('liftuplabs_user', JSON.stringify(userData))
    }

    const register = (userData) => {
        setUser(userData)
        localStorage.setItem('liftuplabs_user', JSON.stringify(userData))
    }

    const logout = () => {
        setUser(null)
        localStorage.removeItem('liftuplabs_user')
    }

    const updateUser = (updatedData) => {
        const newUserData = { ...user, ...updatedData }
        setUser(newUserData)
        localStorage.setItem('liftuplabs_user', JSON.stringify(newUserData))
    }

    const value = {
        user,
        isLoading,
        login,
        register,
        logout,
        updateUser,
        isAuthenticated: !!user
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext