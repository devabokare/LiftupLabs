import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useNotification } from '../context/NotificationContext'
import EventDetails from './EventDetails'

const EventsSection = () => {
    const [selectedEvent, setSelectedEvent] = useState(null)
    const [registeredEvents, setRegisteredEvents] = useState(new Set())
    const { user } = useAuth()
    const { showSuccess, showError } = useNotification()

    // Filter states
    const [filters, setFilters] = useState({
        category: 'All',
        institution: '',
        city: '',
        date: '',
        mode: '',
        sort: 'Latest',
        deadline: '',
        price: '',
        tags: []
    })

    const events = [
        {
            id: 1,
            title: 'National AI Hackathon 2025',
            organizer: 'IIT Delhi',
            institution: 'IIT Delhi',
            date: 'Jan 10-12, 2025',
            dateObj: new Date('2025-01-10'),
            location: 'Online',
            city: 'Delhi',
            type: 'Hackathon',
            category: 'Hackathon',
            participants: 2500,
            prize: '₹1,00,000',
            priceAmount: 100000,
            fee: 'Free',
            image: '🤖',
            status: 'Open',
            deadline: '12 Jan',
            deadlineObj: new Date('2025-01-12'),
            mode: 'Online',
            tags: ['AI/ML', 'Web3', 'Open Source'],
            teamSize: 'Team of 2-4',
            skills: ['Python', 'Machine Learning', 'AI']
        },
        {
            id: 2,
            title: 'Technova 2025 Coding Challenge',
            organizer: 'NIT Trichy',
            institution: 'NIT Trichy',
            date: '28 Dec, 2024',
            dateObj: new Date('2024-12-28'),
            location: 'NIT Trichy',
            city: 'Trichy',
            type: 'Tech Fest',
            category: 'Tech Fest',
            participants: 1800,
            prize: '₹75,000',
            priceAmount: 75000,
            fee: '₹500',
            image: '💻',
            status: 'Open',
            deadline: '25 Dec',
            deadlineObj: new Date('2024-12-25'),
            mode: 'Offline',
            tags: ['DSA', 'Robotics'],
            teamSize: 'Individual',
            skills: ['C++', 'Algorithms', 'Problem Solving']
        },
        {
            id: 3,
            title: 'Data Science Workshop Series',
            organizer: 'PES University',
            institution: 'PES University',
            date: '05 Jan, 2025',
            dateObj: new Date('2025-01-05'),
            location: 'Hybrid',
            city: 'Bangalore',
            type: 'Workshop',
            category: 'Workshop',
            participants: 300,
            prize: 'Certificate',
            priceAmount: 0,
            fee: '₹1,200',
            image: '📊',
            status: 'Open',
            deadline: '02 Jan',
            deadlineObj: new Date('2025-01-02'),
            mode: 'Hybrid',
            tags: ['AI/ML', 'Python'],
            teamSize: 'Individual',
            skills: ['Python', 'Data Analysis', 'Statistics']
        },
        {
            id: 4,
            title: 'Startup Pitch Competition',
            organizer: 'IIM Ahmedabad',
            institution: 'IIM Ahmedabad',
            date: '15 Jan, 2025',
            dateObj: new Date('2025-01-15'),
            location: 'IIM Ahmedabad',
            city: 'Ahmedabad',
            type: 'Seminar',
            category: 'Seminar',
            participants: 150,
            prize: '₹2,00,000',
            priceAmount: 200000,
            fee: 'Free',
            image: '💡',
            status: 'Open',
            deadline: '10 Jan',
            deadlineObj: new Date('2025-01-10'),
            mode: 'Offline',
            tags: ['Business', 'Startup'],
            teamSize: 'Team of 3-5',
            skills: ['Business Strategy', 'Presentation', 'Innovation']
        },
        {
            id: 5,
            title: 'Web Development Quiz',
            organizer: 'BITS Pilani',
            institution: 'BITS Pilani',
            date: '20 Dec, 2024',
            dateObj: new Date('2024-12-20'),
            location: 'Online',
            city: 'Pilani',
            type: 'Quiz',
            category: 'Quiz',
            participants: 800,
            prize: '₹25,000',
            priceAmount: 25000,
            fee: 'Free',
            image: '❓',
            status: 'Open',
            deadline: '18 Dec',
            deadlineObj: new Date('2024-12-18'),
            mode: 'Online',
            tags: ['Web3', 'Open Source'],
            teamSize: 'Individual',
            skills: ['HTML', 'CSS', 'JavaScript', 'React']
        }
    ]

    // Filter options
    const categories = ['All', 'Hackathon', 'Quiz', 'Workshop', 'Seminar', 'Tech Fest']
    const institutions = ['All', ...new Set(events.map(e => e.institution))]
    const cities = ['All', ...new Set(events.map(e => e.city))]
    const modes = ['All', 'Online', 'Offline', 'Hybrid']
    const sortOptions = ['Latest', 'Oldest', 'Prize Amount', 'Deadline', 'Participants']
    const deadlineOptions = ['All', 'This Week', 'This Month', 'Next Month']
    const priceOptions = ['All', 'Free', '₹500+', '₹1000+', '₹50k+']
    const trendingTags = ['AI/ML', 'Web3', 'Robotics', 'Open Source', 'DSA', 'Python', 'Business', 'Startup']

    // Hosts data
    const nearbyHosts = [
        {
            id: 1,
            name: 'IIT Madras',
            location: 'Chennai',
            events: 12,
            avatar: '🏛️',
            verified: true
        },
        {
            id: 2,
            name: 'Startup India',
            location: 'Online',
            events: 8,
            avatar: '🚀',
            verified: true
        }
    ]

    // Apply filters
    const getFilteredEvents = () => {
        let filtered = [...events]

        // Category filter
        if (filters.category !== 'All') {
            filtered = filtered.filter(event => event.category === filters.category)
        }

        // Institution filter
        if (filters.institution && filters.institution !== 'All') {
            filtered = filtered.filter(event => event.institution === filters.institution)
        }

        // City filter
        if (filters.city && filters.city !== 'All') {
            filtered = filtered.filter(event => event.city === filters.city)
        }

        // Mode filter
        if (filters.mode && filters.mode !== 'All') {
            filtered = filtered.filter(event => event.mode === filters.mode)
        }

        // Deadline filter
        if (filters.deadline && filters.deadline !== 'All') {
            const now = new Date()
            const oneWeek = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000)
            const oneMonth = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000)

            switch (filters.deadline) {
                case 'This Week':
                    filtered = filtered.filter(event => event.deadlineObj <= oneWeek)
                    break
                case 'This Month':
                    filtered = filtered.filter(event => event.deadlineObj <= oneMonth)
                    break
                case 'Next Month':
                    filtered = filtered.filter(event => event.deadlineObj > oneMonth)
                    break
            }
        }

        // Price filter
        if (filters.price && filters.price !== 'All') {
            switch (filters.price) {
                case 'Free':
                    filtered = filtered.filter(event => event.fee === 'Free')
                    break
                case '₹500+':
                    filtered = filtered.filter(event => event.priceAmount >= 500)
                    break
                case '₹1000+':
                    filtered = filtered.filter(event => event.priceAmount >= 1000)
                    break
                case '₹50k+':
                    filtered = filtered.filter(event => event.priceAmount >= 50000)
                    break
            }
        }

        // Tags filter
        if (filters.tags.length > 0) {
            filtered = filtered.filter(event =>
                filters.tags.some(tag => event.tags.includes(tag))
            )
        }

        // Sort
        switch (filters.sort) {
            case 'Latest':
                filtered.sort((a, b) => b.dateObj - a.dateObj)
                break
            case 'Oldest':
                filtered.sort((a, b) => a.dateObj - b.dateObj)
                break
            case 'Prize Amount':
                filtered.sort((a, b) => b.priceAmount - a.priceAmount)
                break
            case 'Deadline':
                filtered.sort((a, b) => a.deadlineObj - b.deadlineObj)
                break
            case 'Participants':
                filtered.sort((a, b) => b.participants - a.participants)
                break
        }

        return filtered
    }

    const filteredEvents = getFilteredEvents()

    const updateFilter = (key, value) => {
        setFilters(prev => ({ ...prev, [key]: value }))
    }

    const toggleTag = (tag) => {
        setFilters(prev => ({
            ...prev,
            tags: prev.tags.includes(tag)
                ? prev.tags.filter(t => t !== tag)
                : [...prev.tags, tag]
        }))
    }

    const clearFilters = () => {
        setFilters({
            category: 'All',
            institution: '',
            city: '',
            date: '',
            mode: '',
            sort: 'Latest',
            deadline: '',
            price: '',
            tags: []
        })
    }

    const EventCard = ({ event }) => (
        <div className="bg-white border border-orange-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-video bg-gradient-to-r from-orange-400 to-orange-600 flex items-center justify-center">
                <span className="text-4xl">{event.image}</span>
            </div>

            <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">{event.title}</h3>
                        <p className="text-orange-600 text-sm">By {event.organizer} • Deadline: {event.deadline} • Reward: {event.prize}</p>
                    </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded">
                        {event.category}
                    </span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">
                        {event.mode}
                    </span>
                    <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">
                        {event.teamSize}
                    </span>
                </div>

                <div className="flex space-x-3">
                    <button
                        onClick={() => setSelectedEvent(event.id)}
                        className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm hover:bg-gray-50"
                    >
                        View Details
                    </button>
                    <button
                        onClick={() => {
                            if (registeredEvents.has(event.id)) {
                                setRegisteredEvents(prev => {
                                    const newSet = new Set(prev)
                                    newSet.delete(event.id)
                                    return newSet
                                })
                                showSuccess(`Unregistered from ${event.title}`)
                            } else {
                                setRegisteredEvents(prev => new Set(prev).add(event.id))
                                showSuccess(`Successfully registered for ${event.title}!`)
                            }
                        }}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${registeredEvents.has(event.id)
                            ? 'bg-green-600 text-white hover:bg-green-700'
                            : 'bg-orange-600 text-white hover:bg-orange-700'
                            }`}
                    >
                        {registeredEvents.has(event.id) ? '✓ Registered' : 'Register'}
                    </button>
                </div>
            </div>
        </div>
    )

    // If an event is selected, show the event details
    if (selectedEvent) {
        return (
            <EventDetails
                eventId={selectedEvent}
                onBack={() => setSelectedEvent(null)}
            />
        )
    }

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="bg-white rounded-lg p-6 border border-orange-200">
                <div className="flex items-center justify-between mb-4">
                    <div>
                        <h1 className="text-3xl font-bold text-orange-900 mb-2">Browse Events</h1>
                        <p className="text-gray-700">Discover and participate in exciting events and competitions</p>
                    </div>
                    <button className="bg-orange-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-orange-700">
                        🎯 Host Event
                    </button>
                </div>
            </div>

            {/* Filters */}
            <div className="bg-white rounded-lg p-6 border border-orange-200">
                {/* Category Filters */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => updateFilter('category', category)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filters.category === category
                                ? 'bg-orange-600 text-white'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                        >
                            🏷️ Category: {category}
                        </button>
                    ))}
                </div>

                {/* Advanced Filters */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-4">
                    {/* Institution */}
                    <select
                        value={filters.institution}
                        onChange={(e) => updateFilter('institution', e.target.value)}
                        className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
                    >
                        <option value="">🏛️ Institution</option>
                        {institutions.map(inst => (
                            <option key={inst} value={inst}>{inst}</option>
                        ))}
                    </select>

                    {/* City */}
                    <select
                        value={filters.city}
                        onChange={(e) => updateFilter('city', e.target.value)}
                        className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
                    >
                        <option value="">📍 City</option>
                        {cities.map(city => (
                            <option key={city} value={city}>{city}</option>
                        ))}
                    </select>

                    {/* Date */}
                    <input
                        type="date"
                        value={filters.date}
                        onChange={(e) => updateFilter('date', e.target.value)}
                        className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
                        placeholder="📅 Date"
                    />

                    {/* Mode */}
                    <select
                        value={filters.mode}
                        onChange={(e) => updateFilter('mode', e.target.value)}
                        className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
                    >
                        <option value="">🌐 Mode: Online/Offline</option>
                        {modes.map(mode => (
                            <option key={mode} value={mode}>{mode}</option>
                        ))}
                    </select>

                    {/* Sort */}
                    <select
                        value={filters.sort}
                        onChange={(e) => updateFilter('sort', e.target.value)}
                        className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
                    >
                        <option value="">🔄 Sort: Latest</option>
                        {sortOptions.map(sort => (
                            <option key={sort} value={sort}>{sort}</option>
                        ))}
                    </select>

                    {/* Clear Filters */}
                    <button
                        onClick={clearFilters}
                        className="px-3 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm hover:bg-gray-50"
                    >
                        🗑️ Clear
                    </button>
                </div>

                {/* Additional Filters Row */}
                <div className="flex flex-wrap gap-4 mb-4">
                    {/* Deadline */}
                    <select
                        value={filters.deadline}
                        onChange={(e) => updateFilter('deadline', e.target.value)}
                        className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
                    >
                        <option value="">Deadline: This Month</option>
                        {deadlineOptions.map(deadline => (
                            <option key={deadline} value={deadline}>{deadline}</option>
                        ))}
                    </select>

                    {/* Price */}
                    <select
                        value={filters.price}
                        onChange={(e) => updateFilter('price', e.target.value)}
                        className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
                    >
                        <option value="">Prize: ₹50k+</option>
                        {priceOptions.map(price => (
                            <option key={price} value={price}>{price}</option>
                        ))}
                    </select>

                    <button className="px-3 py-2 bg-blue-100 text-blue-700 rounded-lg text-sm">
                        Online
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* Events List */}
                <div className="lg:col-span-3">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {filteredEvents.map((event) => (
                            <EventCard key={event.id} event={event} />
                        ))}
                    </div>

                    {filteredEvents.length === 0 && (
                        <div className="text-center py-12 bg-white rounded-lg border border-orange-200">
                            <div className="text-6xl mb-4">🔍</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">No events found</h3>
                            <p className="text-gray-600 mb-4">Try adjusting your filters to see more events</p>
                            <button
                                onClick={clearFilters}
                                className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700"
                            >
                                Clear Filters
                            </button>
                        </div>
                    )}
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                    {/* Quick Sort */}
                    <div className="bg-white rounded-lg p-6 border border-orange-200">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Sort</h3>
                        <div className="space-y-2">
                            {sortOptions.map((sort) => (
                                <button
                                    key={sort}
                                    onClick={() => updateFilter('sort', sort)}
                                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${filters.sort === sort
                                        ? 'bg-orange-100 text-orange-700'
                                        : 'text-gray-700 hover:bg-gray-50'
                                        }`}
                                >
                                    {sort}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Trending Tags */}
                    <div className="bg-white rounded-lg p-6 border border-orange-200">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Trending Tags</h3>
                        <div className="flex flex-wrap gap-2">
                            {trendingTags.map((tag) => (
                                <button
                                    key={tag}
                                    onClick={() => toggleTag(tag)}
                                    className={`px-3 py-1 rounded-full text-sm transition-colors ${filters.tags.includes(tag)
                                        ? 'bg-orange-600 text-white'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                        }`}
                                >
                                    {tag}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Hosts Near You */}
                    <div className="bg-white rounded-lg p-6 border border-orange-200">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Hosts Near You</h3>
                        <div className="space-y-4">
                            {nearbyHosts.map((host) => (
                                <div key={host.id} className="flex items-center justify-between">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                                            <span>{host.avatar}</span>
                                        </div>
                                        <div>
                                            <div className="font-medium text-gray-900 flex items-center space-x-1">
                                                <span>{host.name}</span>
                                                {host.verified && <span className="text-green-600">✓</span>}
                                            </div>
                                            <div className="text-sm text-gray-600">{host.location} • {host.events} events</div>
                                        </div>
                                    </div>
                                    <button className="text-orange-600 text-sm font-medium hover:text-orange-700">
                                        Follow
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventsSection