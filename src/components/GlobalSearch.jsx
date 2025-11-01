import { useState, useEffect } from 'react'

const GlobalSearch = ({ onSearch, placeholder = "Search events, notes, courses..." }) => {
    const [query, setQuery] = useState('')
    const [isOpen, setIsOpen] = useState(false)
    const [results, setResults] = useState([])

    // Mock search data - in real app this would come from API
    const searchData = [
        { id: 1, title: 'National AI Hackathon 2024', type: 'event', category: 'Events' },
        { id: 2, title: 'Data Structures and Algorithms Notes', type: 'note', category: 'Notes' },
        { id: 3, title: 'Web Development Bootcamp', type: 'course', category: 'Courses' },
        { id: 4, title: 'React.js Study Group', type: 'community', category: 'Community' },
        { id: 5, title: 'Software Engineer Jobs', type: 'job', category: 'Career' }
    ]

    useEffect(() => {
        if (query.length > 2) {
            const filtered = searchData.filter(item =>
                item.title.toLowerCase().includes(query.toLowerCase()) ||
                item.category.toLowerCase().includes(query.toLowerCase())
            )
            setResults(filtered)
            setIsOpen(true)
        } else {
            setResults([])
            setIsOpen(false)
        }
    }, [query])

    const handleSelect = (item) => {
        setQuery('')
        setIsOpen(false)
        onSearch?.(item)
    }

    const getIcon = (type) => {
        switch (type) {
            case 'event': return '🎯'
            case 'note': return '📝'
            case 'course': return '📚'
            case 'community': return '👥'
            case 'job': return '💼'
            default: return '🔍'
        }
    }

    return (
        <div className="relative">
            <div className="relative">
                <input
                    type="text"
                    placeholder={placeholder}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="w-full px-3 py-2 pl-10 bg-white border border-orange-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
                />
                <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
                {query && (
                    <button
                        onClick={() => {
                            setQuery('')
                            setIsOpen(false)
                        }}
                        className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
                    >
                        ✕
                    </button>
                )}
            </div>

            {isOpen && results.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-orange-200 rounded-lg shadow-lg z-50 max-h-64 overflow-y-auto">
                    {results.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => handleSelect(item)}
                            className="w-full flex items-center space-x-3 px-4 py-3 hover:bg-orange-50 text-left border-b border-gray-100 last:border-b-0"
                        >
                            <span className="text-lg">{getIcon(item.type)}</span>
                            <div className="flex-1">
                                <div className="font-medium text-gray-900">{item.title}</div>
                                <div className="text-sm text-gray-500">{item.category}</div>
                            </div>
                        </button>
                    ))}
                </div>
            )}

            {/* Click outside to close */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-40"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </div>
    )
}

export default GlobalSearch