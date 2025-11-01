import { useState } from 'react'

const NotesSection = () => {
    const [selectedSubject, setSelectedSubject] = useState('all')
    const [searchQuery, setSearchQuery] = useState('')

    const notes = [
        {
            id: 1,
            title: 'Data Structures and Algorithms - Complete Notes',
            subject: 'Computer Science',
            category: 'notes',
            author: 'Rahul Sharma',
            university: 'IIT Delhi',
            semester: 'Semester 3',
            downloads: 1250,
            rating: 4.8,
            pages: 120,
            uploadDate: '2 days ago',
            fileSize: '15.2 MB',
            type: 'PDF'
        },
        {
            id: 2,
            title: 'Engineering Mathematics - Previous Year Questions',
            subject: 'Mathematics',
            category: 'pyq',
            author: 'Priya Patel',
            university: 'NIT Trichy',
            semester: 'Semester 2',
            downloads: 890,
            rating: 4.6,
            pages: 85,
            uploadDate: '1 week ago',
            fileSize: '8.7 MB',
            type: 'PDF'
        },
        {
            id: 3,
            title: 'Digital Electronics Lab Manual',
            subject: 'Electronics',
            category: 'lab',
            author: 'Amit Kumar',
            university: 'BITS Pilani',
            semester: 'Semester 4',
            downloads: 567,
            rating: 4.7,
            pages: 45,
            uploadDate: '3 days ago',
            fileSize: '12.1 MB',
            type: 'PDF'
        },
        {
            id: 4,
            title: 'Operating Systems - Lecture Slides',
            subject: 'Computer Science',
            category: 'slides',
            author: 'Sneha Gupta',
            university: 'IIT Bombay',
            semester: 'Semester 5',
            downloads: 1100,
            rating: 4.9,
            pages: 200,
            uploadDate: '5 days ago',
            fileSize: '25.3 MB',
            type: 'PPT'
        }
    ]

    const subjects = [
        { id: 'all', label: 'All Subjects', count: notes.length },
        { id: 'Computer Science', label: 'Computer Science', count: notes.filter(n => n.subject === 'Computer Science').length },
        { id: 'Mathematics', label: 'Mathematics', count: notes.filter(n => n.subject === 'Mathematics').length },
        { id: 'Electronics', label: 'Electronics', count: notes.filter(n => n.subject === 'Electronics').length }
    ]

    const categories = [
        { id: 'notes', label: 'Notes', icon: '📝' },
        { id: 'pyq', label: 'PYQs', icon: '❓' },
        { id: 'lab', label: 'Lab Manuals', icon: '🔬' },
        { id: 'slides', label: 'Slides', icon: '📊' }
    ]

    const filteredNotes = notes.filter(note => {
        const matchesSubject = selectedSubject === 'all' || note.subject === selectedSubject
        const matchesSearch = note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            note.author.toLowerCase().includes(searchQuery.toLowerCase())
        return matchesSubject && matchesSearch
    })

    const NoteCard = ({ note }) => (
        <div className="bg-white border border-orange-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                        <span className="text-orange-600 text-xl">
                            {categories.find(c => c.id === note.category)?.icon || '📄'}
                        </span>
                    </div>
                    <div>
                        <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                            {note.type}
                        </span>
                    </div>
                </div>
                <button className="text-gray-400 hover:text-orange-600">
                    ⭐
                </button>
            </div>

            <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">{note.title}</h3>
            <p className="text-orange-600 font-medium mb-1">{note.author}</p>
            <p className="text-gray-600 text-sm mb-3">{note.university} • {note.semester}</p>

            <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                    <span>📥</span>
                    <span>{note.downloads} downloads</span>
                </div>
                <div className="flex items-center space-x-1">
                    <span>⭐</span>
                    <span>{note.rating}/5</span>
                </div>
                <div className="flex items-center space-x-1">
                    <span>📄</span>
                    <span>{note.pages} pages</span>
                </div>
                <div className="flex items-center space-x-1">
                    <span>💾</span>
                    <span>{note.fileSize}</span>
                </div>
            </div>

            <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-500">{note.uploadDate}</span>
                <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                    {note.subject}
                </span>
            </div>

            <div className="flex space-x-3">
                <button className="flex-1 bg-orange-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-orange-700">
                    📥 Download
                </button>
                <button className="px-4 py-2 border border-orange-300 text-orange-700 rounded-lg text-sm font-medium hover:bg-orange-50">
                    👁️ Preview
                </button>
            </div>
        </div>
    )

    return (
        <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 border border-orange-200">
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h1 className="text-3xl font-bold text-orange-900 mb-2">Notes & PYQs</h1>
                        <p className="text-gray-700">Access study materials, notes, and previous year questions</p>
                    </div>
                    <button className="bg-orange-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-orange-700">
                        📤 Upload Notes
                    </button>
                </div>

                <div className="flex flex-col md:flex-row gap-4 mb-6">
                    <div className="flex-1">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search notes, authors, or topics..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full px-4 py-2 pl-10 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
                            />
                            <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
                        </div>
                    </div>

                    <div className="flex space-x-2">
                        {subjects.map((subject) => (
                            <button
                                key={subject.id}
                                onClick={() => setSelectedSubject(subject.id)}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${selectedSubject === subject.id
                                        ? 'bg-orange-600 text-white'
                                        : 'bg-orange-100 text-orange-700 hover:bg-orange-200'
                                    }`}
                            >
                                {subject.label} ({subject.count})
                            </button>
                        ))}
                    </div>
                </div>

                <div className="flex space-x-4 mb-6">
                    {categories.map((category) => (
                        <div key={category.id} className="flex items-center space-x-2 px-3 py-2 bg-orange-50 rounded-lg">
                            <span>{category.icon}</span>
                            <span className="text-sm font-medium text-orange-700">{category.label}</span>
                            <span className="text-xs bg-orange-200 text-orange-700 px-2 py-1 rounded-full">
                                {notes.filter(n => n.category === category.id).length}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredNotes.map((note) => (
                    <NoteCard key={note.id} note={note} />
                ))}
            </div>

            {filteredNotes.length === 0 && (
                <div className="text-center py-12 bg-white rounded-lg border border-orange-200">
                    <div className="text-6xl mb-4">📚</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">No notes found</h3>
                    <p className="text-gray-600">Try adjusting your search or filters</p>
                </div>
            )}
        </div>
    )
}

export default NotesSection