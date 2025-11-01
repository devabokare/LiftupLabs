import { useState } from 'react'

const CommunitySection = () => {
    const [activeTab, setActiveTab] = useState('discussions')

    const discussions = [
        {
            id: 1,
            title: 'Best resources for learning React in 2024?',
            author: 'Rahul Sharma',
            avatar: '👨‍💻',
            category: 'Programming',
            replies: 23,
            likes: 45,
            timeAgo: '2 hours ago',
            tags: ['React', 'JavaScript', 'Frontend'],
            isAnswered: true
        },
        {
            id: 2,
            title: 'How to prepare for technical interviews at FAANG companies?',
            author: 'Priya Patel',
            avatar: '👩‍💼',
            category: 'Career',
            replies: 67,
            likes: 128,
            timeAgo: '5 hours ago',
            tags: ['Interview', 'FAANG', 'Career'],
            isAnswered: false
        },
        {
            id: 3,
            title: 'Data Structures vs Algorithms - What to focus on first?',
            author: 'Amit Kumar',
            avatar: '🧑‍🎓',
            category: 'Computer Science',
            replies: 34,
            likes: 89,
            timeAgo: '1 day ago',
            tags: ['DSA', 'Learning', 'Computer Science'],
            isAnswered: true
        }
    ]

    const studyGroups = [
        {
            id: 1,
            name: 'GATE 2025 Preparation',
            description: 'Collaborative study group for GATE Computer Science preparation',
            members: 245,
            category: 'Exam Prep',
            isActive: true,
            nextSession: 'Dec 16, 2024 at 7:00 PM',
            image: '📚'
        },
        {
            id: 2,
            name: 'Web Development Bootcamp',
            description: 'Learn full-stack web development together',
            members: 189,
            category: 'Programming',
            isActive: true,
            nextSession: 'Dec 15, 2024 at 6:00 PM',
            image: '💻'
        },
        {
            id: 3,
            name: 'Data Science Study Circle',
            description: 'Explore data science concepts and projects',
            members: 156,
            category: 'Data Science',
            isActive: false,
            nextSession: 'Dec 20, 2024 at 8:00 PM',
            image: '📊'
        }
    ]

    const mentors = [
        {
            id: 1,
            name: 'Dr. Rajesh Kumar',
            title: 'Senior Software Engineer at Google',
            expertise: ['System Design', 'Algorithms', 'Career Guidance'],
            experience: '8+ years',
            rating: 4.9,
            sessions: 150,
            avatar: '👨‍🏫',
            isAvailable: true
        },
        {
            id: 2,
            name: 'Ms. Anita Sharma',
            title: 'Data Scientist at Microsoft',
            expertise: ['Machine Learning', 'Python', 'Statistics'],
            experience: '6+ years',
            rating: 4.8,
            sessions: 98,
            avatar: '👩‍🔬',
            isAvailable: false
        },
        {
            id: 3,
            name: 'Mr. Vikash Patel',
            title: 'Product Manager at Amazon',
            expertise: ['Product Strategy', 'Leadership', 'Business Analysis'],
            experience: '10+ years',
            rating: 4.7,
            sessions: 203,
            avatar: '👨‍💼',
            isAvailable: true
        }
    ]

    const DiscussionCard = ({ discussion }) => (
        <div className="bg-white border border-orange-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                        <span>{discussion.avatar}</span>
                    </div>
                    <div>
                        <p className="font-medium text-gray-900">{discussion.author}</p>
                        <p className="text-sm text-gray-500">{discussion.timeAgo}</p>
                    </div>
                </div>
                {discussion.isAnswered && (
                    <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                        Answered
                    </span>
                )}
            </div>

            <h3 className="text-lg font-semibold text-gray-900 mb-3">{discussion.title}</h3>

            <div className="flex flex-wrap gap-2 mb-4">
                {discussion.tags.map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded">
                        {tag}
                    </span>
                ))}
            </div>

            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                        <span>💬</span>
                        <span>{discussion.replies} replies</span>
                    </div>
                    <div className="flex items-center space-x-1">
                        <span>👍</span>
                        <span>{discussion.likes} likes</span>
                    </div>
                </div>
                <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">
                    {discussion.category}
                </span>
            </div>
        </div>
    )

    const StudyGroupCard = ({ group }) => (
        <div className="bg-white border border-orange-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-2xl">
                        {group.image}
                    </div>
                    <div>
                        <span className={`px-2 py-1 text-xs rounded-full ${group.isActive ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                            }`}>
                            {group.isActive ? 'Active' : 'Scheduled'}
                        </span>
                    </div>
                </div>
            </div>

            <h3 className="text-lg font-semibold text-gray-900 mb-2">{group.name}</h3>
            <p className="text-gray-600 text-sm mb-4">{group.description}</p>

            <div className="space-y-2 mb-4 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                    <span>👥</span>
                    <span>{group.members} members</span>
                </div>
                <div className="flex items-center space-x-2">
                    <span>📅</span>
                    <span>Next: {group.nextSession}</span>
                </div>
            </div>

            <div className="flex items-center justify-between">
                <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">
                    {group.category}
                </span>
                <button className="bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-700">
                    Join Group
                </button>
            </div>
        </div>
    )

    const MentorCard = ({ mentor }) => (
        <div className="bg-white border border-orange-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-2xl">
                        {mentor.avatar}
                    </div>
                    <div>
                        <span className={`px-2 py-1 text-xs rounded-full ${mentor.isAvailable ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                            }`}>
                            {mentor.isAvailable ? 'Available' : 'Busy'}
                        </span>
                    </div>
                </div>
            </div>

            <h3 className="text-lg font-semibold text-gray-900 mb-1">{mentor.name}</h3>
            <p className="text-orange-600 font-medium text-sm mb-3">{mentor.title}</p>

            <div className="space-y-2 mb-4 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                    <span>⭐</span>
                    <span>{mentor.rating}/5 ({mentor.sessions} sessions)</span>
                </div>
                <div className="flex items-center space-x-2">
                    <span>💼</span>
                    <span>{mentor.experience} experience</span>
                </div>
            </div>

            <div className="mb-4">
                <div className="flex flex-wrap gap-1">
                    {mentor.expertise.slice(0, 2).map((skill, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                            {skill}
                        </span>
                    ))}
                    {mentor.expertise.length > 2 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                            +{mentor.expertise.length - 2} more
                        </span>
                    )}
                </div>
            </div>

            <button
                className={`w-full py-2 rounded-lg text-sm font-medium transition-colors ${mentor.isAvailable
                        ? 'bg-orange-600 text-white hover:bg-orange-700'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                disabled={!mentor.isAvailable}
            >
                {mentor.isAvailable ? 'Book Session' : 'Currently Unavailable'}
            </button>
        </div>
    )

    return (
        <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 border border-orange-200">
                <h1 className="text-3xl font-bold text-orange-900 mb-2">Community</h1>
                <p className="text-gray-700">Connect, learn, and grow with fellow students and mentors</p>
            </div>

            <div className="bg-white rounded-lg border border-orange-200">
                <div className="border-b border-orange-200">
                    <nav className="flex space-x-8 px-6">
                        {[
                            { id: 'discussions', label: 'Discussions', icon: '💬' },
                            { id: 'study-groups', label: 'Study Groups', icon: '👥' },
                            { id: 'mentors', label: 'Mentors', icon: '🎓' }
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center space-x-2 py-4 border-b-2 font-medium text-sm transition-colors ${activeTab === tab.id
                                        ? 'border-orange-600 text-orange-600'
                                        : 'border-transparent text-gray-500 hover:text-gray-700'
                                    }`}
                            >
                                <span>{tab.icon}</span>
                                <span>{tab.label}</span>
                            </button>
                        ))}
                    </nav>
                </div>

                <div className="p-6">
                    {activeTab === 'discussions' && (
                        <div className="space-y-6">
                            <div className="flex items-center justify-between">
                                <h2 className="text-xl font-semibold text-gray-900">Recent Discussions</h2>
                                <button className="bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-700">
                                    Start Discussion
                                </button>
                            </div>
                            <div className="space-y-4">
                                {discussions.map((discussion) => (
                                    <DiscussionCard key={discussion.id} discussion={discussion} />
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === 'study-groups' && (
                        <div className="space-y-6">
                            <div className="flex items-center justify-between">
                                <h2 className="text-xl font-semibold text-gray-900">Study Groups</h2>
                                <button className="bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-700">
                                    Create Group
                                </button>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {studyGroups.map((group) => (
                                    <StudyGroupCard key={group.id} group={group} />
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === 'mentors' && (
                        <div className="space-y-6">
                            <h2 className="text-xl font-semibold text-gray-900">Available Mentors</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {mentors.map((mentor) => (
                                    <MentorCard key={mentor.id} mentor={mentor} />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default CommunitySection