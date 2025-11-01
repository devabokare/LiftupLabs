import { useState } from 'react'

const RegisterPage = ({ onRegister, onSwitchToLogin }) => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
        role: 'Student',
        agreeToTerms: false
    })
    const [isLoading, setIsLoading] = useState(false)

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match!')
            return
        }

        if (!formData.agreeToTerms) {
            alert('Please agree to the Terms & Policies')
            return
        }

        setIsLoading(true)

        // Simulate API call
        setTimeout(() => {
            // Mock successful registration
            const userData = {
                id: 1,
                name: formData.fullName,
                email: formData.email,
                role: formData.role.toLowerCase(),
                avatar: formData.role === 'Student' ? '👨‍🎓' : formData.role === 'Professional' ? '👨‍💼' : '🏛️'
            }
            onRegister(userData)
            setIsLoading(false)
        }, 1000)
    }

    return (
        <div className="min-h-screen bg-orange-50 flex">
            {/* Left Sidebar */}
            <div className="w-64 bg-orange-100 border-r border-orange-200 flex flex-col">
                {/* Logo */}
                <div className="p-4 border-b border-orange-200">
                    <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-sm">L</span>
                        </div>
                        <span className="font-semibold text-orange-900">Liftuplabs</span>
                    </div>
                </div>

                {/* Search */}
                <div className="p-4">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-full px-3 py-2 bg-white border border-orange-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
                        />
                        <span className="absolute right-3 top-2.5 text-gray-400">🔍</span>
                    </div>
                </div>

                {/* Navigation */}
                <div className="flex-1 px-2">
                    <div className="text-xs font-medium text-orange-700 px-2 mb-2">Main</div>
                    <nav className="space-y-1">
                        {[
                            { label: 'Home', icon: '🏠' },
                            { label: 'Events & Competitions', icon: '🎯' },
                            { label: 'Notes & PYQs', icon: '📝' },
                            { label: 'Courses & Lectures', icon: '📚' },
                            { label: 'Institutions & Hosts', icon: '🏛️' },
                            { label: 'Community', icon: '👥' },
                            { label: 'Career & Guidance', icon: '💼' },
                            { label: 'About / Contact', icon: '📞' }
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center space-x-3 px-3 py-2 text-sm text-orange-700 opacity-60"
                            >
                                <span>{item.icon}</span>
                                <span>{item.label}</span>
                            </div>
                        ))}
                    </nav>
                </div>

                {/* Bottom Actions */}
                <div className="p-4 border-t border-orange-200 space-y-2">
                    <div className="flex items-center space-x-2 px-3 py-2 text-sm text-orange-700 opacity-60">
                        <span>📚</span>
                        <span>My Library</span>
                    </div>
                    <div className="bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium opacity-60 text-center">
                        📤 Upload Notes
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Header */}
                <header className="bg-white border-b border-orange-200 px-6 py-4">
                    <div className="flex items-center justify-between">
                        <span className="text-orange-700 font-medium">Welcome</span>
                        <div className="flex items-center space-x-4">
                            <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">
                                BETA
                            </span>
                            <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center">
                                <span className="text-white text-sm">👤</span>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Register Content */}
                <main className="flex-1 p-6 flex items-center justify-center">
                    <div className="max-w-2xl w-full">
                        <div className="bg-white rounded-lg p-8 border border-orange-200">
                            <div className="flex items-center justify-between mb-6">
                                <h1 className="text-3xl font-bold text-orange-900">Create Account</h1>
                                <div className="flex items-center space-x-4">
                                    <button className="flex items-center space-x-2 px-4 py-2 border border-orange-300 rounded-lg text-orange-700 hover:bg-orange-50">
                                        <span>🔒</span>
                                        <span>Privacy</span>
                                    </button>
                                    <button className="flex items-center space-x-2 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700">
                                        <span>❓</span>
                                        <span>Need Help</span>
                                    </button>
                                </div>
                            </div>

                            <p className="text-gray-700 mb-8">Join Liftuplabs to access events, resources, and your learning hub</p>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent"
                                        required
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                                        <input
                                            type="password"
                                            name="password"
                                            value={formData.password}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                                        <input
                                            type="password"
                                            name="confirmPassword"
                                            value={formData.confirmPassword}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent"
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-3">Role</label>
                                    <div className="flex space-x-4">
                                        {['Student', 'Professional', 'Institution'].map((role) => (
                                            <label key={role} className="flex items-center space-x-2">
                                                <input
                                                    type="radio"
                                                    name="role"
                                                    value={role}
                                                    checked={formData.role === role}
                                                    onChange={handleInputChange}
                                                    className="text-orange-600 focus:ring-orange-300"
                                                />
                                                <span className="text-sm text-gray-700">{role}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex items-start space-x-2">
                                    <input
                                        type="checkbox"
                                        name="agreeToTerms"
                                        checked={formData.agreeToTerms}
                                        onChange={handleInputChange}
                                        className="mt-1 rounded border-gray-300 text-orange-600 focus:ring-orange-300"
                                        required
                                    />
                                    <label className="text-sm text-gray-600">
                                        I agree to the <button type="button" className="text-orange-600 hover:text-orange-700">Terms & Policies</button>
                                    </label>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full bg-orange-600 text-white py-3 rounded-lg font-medium hover:bg-orange-700 transition-colors disabled:opacity-50 flex items-center justify-center space-x-2"
                                >
                                    <span>👤</span>
                                    <span>{isLoading ? 'Creating Account...' : 'Create Account'}</span>
                                </button>

                                <div className="text-center">
                                    <span className="text-gray-600">Already have an account? </span>
                                    <button
                                        type="button"
                                        onClick={onSwitchToLogin}
                                        className="text-orange-600 hover:text-orange-700 font-medium"
                                    >
                                        Sign in
                                    </button>
                                </div>
                            </form>

                            {/* Password Requirements */}
                            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                                <h4 className="text-sm font-medium text-gray-900 mb-2">Password Requirements:</h4>
                                <ul className="text-xs text-gray-600 space-y-1">
                                    <li>• Use your institute email for faster verification</li>
                                    <li>• Strong password: 8+ chars, symbol, number</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default RegisterPage