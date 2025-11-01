import { useState } from 'react'
import { AuthProvider, useAuth } from './context/AuthContext'
import { NotificationProvider } from './context/NotificationContext'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import MainContent from './components/MainContent'
import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage'
import './App.css'

function AppContent() {
  const [activeSection, setActiveSection] = useState('home')
  const [authMode, setAuthMode] = useState('login') // 'login' or 'register'
  const { user, isLoading, login, register } = useAuth()

  if (isLoading) {
    return (
      <div className="min-h-screen bg-orange-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-orange-600 rounded-lg flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold text-xl">L</span>
          </div>
          <div className="text-orange-900 font-semibold text-lg">Loading Liftuplabs...</div>
        </div>
      </div>
    )
  }

  // Show login/register if user is not authenticated
  if (!user) {
    if (authMode === 'register') {
      return (
        <RegisterPage
          onRegister={register}
          onSwitchToLogin={() => setAuthMode('login')}
        />
      )
    }

    return (
      <LoginPage
        onLogin={login}
        onSwitchToRegister={() => setAuthMode('register')}
      />
    )
  }

  // Show main app if user is authenticated
  return (
    <div className="flex min-h-screen bg-orange-50">
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      <div className="flex-1 flex flex-col">
        <Header />
        <MainContent activeSection={activeSection} />
      </div>
    </div>
  )
}

function App() {
  return (
    <AuthProvider>
      <NotificationProvider>
        <AppContent />
      </NotificationProvider>
    </AuthProvider>
  )
}

export default App
