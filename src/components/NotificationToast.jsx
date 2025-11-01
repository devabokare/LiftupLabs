import { useState, useEffect } from 'react'

const NotificationToast = ({ message, type = 'success', duration = 3000, onClose }) => {
    const [isVisible, setIsVisible] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false)
            setTimeout(onClose, 300) // Wait for fade out animation
        }, duration)

        return () => clearTimeout(timer)
    }, [duration, onClose])

    const getToastStyles = () => {
        switch (type) {
            case 'success':
                return 'bg-green-500 text-white'
            case 'error':
                return 'bg-red-500 text-white'
            case 'warning':
                return 'bg-yellow-500 text-white'
            case 'info':
                return 'bg-blue-500 text-white'
            default:
                return 'bg-gray-500 text-white'
        }
    }

    const getIcon = () => {
        switch (type) {
            case 'success':
                return '✅'
            case 'error':
                return '❌'
            case 'warning':
                return '⚠️'
            case 'info':
                return 'ℹ️'
            default:
                return '📢'
        }
    }

    return (
        <div
            className={`fixed top-4 right-4 z-50 px-6 py-4 rounded-lg shadow-lg transition-all duration-300 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
                } ${getToastStyles()}`}
        >
            <div className="flex items-center space-x-3">
                <span className="text-lg">{getIcon()}</span>
                <span className="font-medium">{message}</span>
                <button
                    onClick={() => {
                        setIsVisible(false)
                        setTimeout(onClose, 300)
                    }}
                    className="ml-4 text-white hover:text-gray-200"
                >
                    ✕
                </button>
            </div>
        </div>
    )
}

export default NotificationToast