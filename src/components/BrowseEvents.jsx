import { useState } from 'react'

const BrowseEvents = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedFilters, setSelectedFilters] = useState({
        type: 'All',
        location: 'All',
        date: 'All'
    })

    const events = [
        {
            id: 1,
            title: 'Inter-IIT Hackathon 2025',
            organizer: 'IIT Bombay',
            date: 'Jan 15-17, 2025',
            location: 'Mumbai, Maharashtra',
            type: 'Hackathon',
            image: '/api/placeholder/300/200',
            tags: ['Coding', 'Innovation', 'Tech'],
            participants: '500+ registered',
            deadline: 'Jan 10, 2025'
        },
        {
            id: 2,
            title: 'National Coding Challenge',
            organizer: 'CodeChef',
            date: 'Jan 20-22, 2025',
            location: 'Online',
            type: 'Competition',
            image: '/api/placeholder/300/200',
            tags: ['Programming', 'Algorithms'],
            participants: '1000+ registered',
            deadline: 'Jan 18, 2025'
        },
        {
            id: 3,
            title: 'Data Science Workshop',
            organizer: 'Analytics Vidhya',
            date: 'Jan 25-26, 2025',
            location: 'Bangalore, Karnataka',
            type: 'Workshop',
            image: '/api/placeholder/300/200',
            tags: ['Data Science', 'ML', 'AI'],
            participants: '200+ registered',
            deadline: 'Jan 23, 2025'
        },
        {
            id: 4,
            title: 'The Smart Science Quiz',
            organizer: 'Science Club',
            date: 'Feb 1, 2025',
            location: 'Delhi, India',
            type: 'Quiz',
            image: '/api/placeholder/300/200',
            tags: ['Science', 'Knowledge'],
            participants: '300+ registered',
            deadline: 'Jan 28, 2025'
        }
    ]

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="bg-white rounded-lg p-6 border border-orange-200">
                <div className="flex items-center justify-between mb-4">
                    <h1 className="text-3xl font-bold text-orange-900">Browse Events</h1>
                    <button className="bg-orange-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-orange-700 transition-colors">
                        Host Event
                    </button>
                </div>
                <p className="text-gray-700">
                    Discover hackathons, competitions, workshops, and academic events happening across India
                </p>
            </div>

            {/* Search and Filters */}
            <div className="bg-white rounded-lg p-6 border border-orange-200">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                    <input
                        type="text"
                        placeholder="Search events..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
                    />
                    <select
                        value={selectedFilters.type}
                        onChange={(e) => setSelectedFilters({ ...selectedFilters, type: e.target.value })}
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
                    >
                        <option>All Types</option>
                        <option>Hackathon</option>
                        <option>Competition</option>
                        <option>Workshop</option>
                        <option>Quiz</option>
                    </select>
                    <select
                        value={selectedFilters.location}
                        onChange={(e) => setSelectedFilters({ ...selectedFilters, location: e.target.value })}
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
                    >
                        <option>All Locations</option>
                        <option>Online</option>
                        <option>Mumbai</option>
                        <option>Delhi</option>
                        <option>Bangalore</option>
                    </select>
                    <select
                        value={selectedFilters.date}
                        onChange={(e) => setSelectedFilters({ ...selectedFilters, date: e.target.value })}
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
                    >
                        <option>All Dates</option>
                        <option>This Week</option>
                        <option>This Month</option>
                        <option>Next Month</option>
                    </select>
                </div>
            </div>

            {/* Events Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {events.map((event) => (
                    <div key={event.id} className="bg-white rounded-lg border border-orange-200 overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="bg-gray-200 h-48 flex items-center justify-center">
                            <span className="text-gray-500">Event Image</span>
                        </div>
                        <div className="p-6">
                            <div className="flex items-start justify-between mb-3">
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{event.title}</h3>
                                    <p className="text-gray-600 text-sm">by {event.organizer}</p>
                                </div>
                                <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded text-xs font-medium">
                                    {event.type}
                                </span>
                            </div>

                            <div className="space-y-2 mb-4">
                                <div className="flex items-center text-sm text-gray-600">
                                    <span className="mr-2">📅</span>
                                    <span>{event.date}</span>
                                </div>
                                <div className="flex items-center text-sm text-gray-600">
                                    <span className="mr-2">📍</span>
                                    <span>{event.location}</span>
                                </div>
                                <div className="flex items-center text-sm text-gray-600">
                                    <span className="mr-2">👥</span>
                                    <span>{event.participants}</span>
                                </div>
                                <div className="flex items-center text-sm text-gray-600">
                                    <span className="mr-2">⏰</span>
                                    <span>Deadline: {event.deadline}</span>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {event.tags.map((tag, index) => (
                                    <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex space-x-3">
                                <button className="flex-1 bg-orange-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-orange-700 transition-colors">
                                    Register
                                </button>
                                <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                                    Details
                                </button>
                                <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                                    Share
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Event Details Modal Placeholder */}
            <div className="bg-white rounded-lg p-6 border border-orange-200">
                <h2 className="text-2xl font-semibold text-orange-900 mb-4">Event Details</h2>
                <div className="bg-gradient-to-r from-blue-500 to-teal-400 h-64 rounded-lg mb-6 flex items-center justify-center">
                    <span className="text-white text-lg">Event Banner</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">National Hackathon 2025</h3>
                        <div className="space-y-3">
                            <div className="flex items-center">
                                <span className="w-4 h-4 bg-orange-600 rounded-full mr-3"></span>
                                <span className="text-gray-700">48-hour coding marathon</span>
                            </div>
                            <div className="flex items-center">
                                <span className="w-4 h-4 bg-orange-600 rounded-full mr-3"></span>
                                <span className="text-gray-700">Team size: 2-4 members</span>
                            </div>
                            <div className="flex items-center">
                                <span className="w-4 h-4 bg-orange-600 rounded-full mr-3"></span>
                                <span className="text-gray-700">Prize pool: ₹5,00,000</span>
                            </div>
                        </div>

                        <div className="mt-6">
                            <h4 className="font-semibold text-gray-900 mb-2">Timeline</h4>
                            <div className="space-y-2 text-sm text-gray-600">
                                <div>• Registration opens: Dec 15</div>
                                <div>• Registration closes: Jan 10</div>
                                <div>• Event dates: Jan 15-17</div>
                                <div>• Results: Jan 20</div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Quick Actions</h4>
                        <div className="space-y-3">
                            <button className="w-full bg-orange-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-orange-700 transition-colors">
                                Register Now
                            </button>
                            <button className="w-full border border-gray-300 text-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                                Download Brochure
                            </button>
                            <button className="w-full border border-gray-300 text-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                                Share Event
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* My Events Dashboard */}
            <div className="bg-white rounded-lg p-6 border border-orange-200">
                <h2 className="text-2xl font-semibold text-orange-900 mb-6">My Events Dashboard</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Events I Hosted</h3>
                        <div className="space-y-3">
                            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                <div>
                                    <div className="font-medium text-gray-900">Campus Coding Contest</div>
                                    <div className="text-sm text-gray-600">120 participants • Completed</div>
                                </div>
                                <button className="text-orange-600 hover:text-orange-700 text-sm font-medium">View</button>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                <div>
                                    <div className="font-medium text-gray-900">Tech Talk Series</div>
                                    <div className="text-sm text-gray-600">85 participants • Ongoing</div>
                                </div>
                                <button className="text-orange-600 hover:text-orange-700 text-sm font-medium">Manage</button>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Events I'm Registered For</h3>
                        <div className="space-y-3">
                            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                <div>
                                    <div className="font-medium text-gray-900">AI Workshop</div>
                                    <div className="text-sm text-gray-600">Starts Jan 25 • Confirmed</div>
                                </div>
                                <button className="text-orange-600 hover:text-orange-700 text-sm font-medium">Details</button>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                <div>
                                    <div className="font-medium text-gray-900">Data Science Bootcamp</div>
                                    <div className="text-sm text-gray-600">Starts Feb 1 • Waitlisted</div>
                                </div>
                                <button className="text-orange-600 hover:text-orange-700 text-sm font-medium">Check Status</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BrowseEvents