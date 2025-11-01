import { useState } from 'react'
import { useAuth } from '../context/AuthContext'

const MyEventsDashboard = () => {
    const [activeTab, setActiveTab] = useState('registered')
    const { user } = useAuth()

    const registeredEvents = [
        {
            id: 1,
            title: 'National AI Hackathon 2024',
            date: 'Dec 20-22, 2024',
            status: 'Confirmed',
            location: 'IIT Bombay',
            registrationDate: 'Nov 28, 2024',
            type: 'Competition'
        },
        {
            id: 2,
            title: 'Web Development Workshop',
            date: 'Dec 18, 2024',
            status: 'Waitlist',
            location: 'Online',
            registrationDate: 'Nov 30, 2024',
            type: 'Workshop'
        }
    ]

    const hostedEvents = [
        {
            id: 1,
            title: 'React.js Study Group',
            date: 'Dec 25, 2024',
            participants: 45,
            status: 'Active',
            type: 'Study Group'
        }
    ]

    return (
        <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 border border-orange-200">
                <h1 className="text-3xl font-bold text-orange-900 mb-2">My Events Dashboard</h1>
                <p className="text-gray-700">Manage your registered and hosted events</p>
            </div>

            <div className="bg-white rounded-lg border border-orange-200">
                <div className="border-b border-orange-200">
                    <nav className="flex space-x-8 px-6">
                        {[
                            { id: 'registered', label: 'Registered Events', count: registeredEvents.length },
                            { id: 'hosted', label: 'Hosted Events', count: hostedEvents.length }
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center space-x-2 py-4 border-b-2 font-medium text-sm transition-colors ${activeTab === tab.id
                                    ? 'border-orange-600 text-orange-600'
                                    : 'border-transparent text-gray-500 hover:text-gray-700'
                                    }`}
                            >
                                <span>{tab.label}</span>
                                <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs">
                                    {tab.count}
                                </span>
                            </button>
                        ))}
                    </nav>
                </div>

                <div className="p-6">
                    {activeTab === 'registered' && (
                        <div className="space-y-4">
                            {registeredEvents.map((event) => (
                                <div key={event.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                                    <div className="flex items-center justify-between">
                                        <div className="flex-1">
                                            <h3 className="text-lg font-semibold text-gray-900">{event.title}</h3>
                                            <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                                                <span>📅 {event.date}</span>
                                                <span>📍 {event.location}</span>
                                                <span>📝 Registered: {event.registrationDate}</span>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${event.status === 'Confirmed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                                                }`}>
                                                {event.status}
                                            </span>
                                            <div className="mt-2">
                                                <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">
                                                    {event.type}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {activeTab === 'hosted' && (
                        <div className="space-y-4">
                            {hostedEvents.map((event) => (
                                <div key={event.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                                    <div className="flex items-center justify-between">
                                        <div className="flex-1">
                                            <h3 className="text-lg font-semibold text-gray-900">{event.title}</h3>
                                            <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                                                <span>📅 {event.date}</span>
                                                <span>👥 {event.participants} participants</span>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                                                {event.status}
                                            </span>
                                            <div className="mt-2 space-x-2">
                                                <button className="px-3 py-1 bg-orange-600 text-white text-xs rounded hover:bg-orange-700">
                                                    Manage
                                                </button>
                                                <button className="px-3 py-1 border border-orange-300 text-orange-700 text-xs rounded hover:bg-orange-50">
                                                    View
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default MyEventsDashboard