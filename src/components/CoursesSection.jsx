import { useState } from 'react'

const CoursesSection = () => {
    const [selectedCategory, setSelectedCategory] = useState('all')

    const courses = [
        {
            id: 1,
            title: 'Complete Web Development Bootcamp',
            instructor: 'Dr. Rajesh Kumar',
            institution: 'IIT Bombay',
            category: 'programming',
            level: 'Beginner',
            duration: '12 weeks',
            students: 2500,
            rating: 4.8,
            price: '₹4,999',
            image: '💻',
            topics: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'],
            status: 'Ongoing'
        },
        {
            id: 2,
            title: 'Data Science with Python',
            instructor: 'Prof. Anita Sharma',
            institution: 'IISC Bangalore',
            category: 'data-science',
            level: 'Intermediate',
            duration: '16 weeks',
            students: 1800,
            rating: 4.9,
            price: '₹7,999',
            image: '📊',
            topics: ['Python', 'Pandas', 'NumPy', 'Machine Learning', 'Visualization'],
            status: 'Starting Soon'
        },
        {
            id: 3,
            title: 'Digital Marketing Fundamentals',
            instructor: 'Mr. Vikash Patel',
            institution: 'IIM Ahmedabad',
            category: 'marketing',
            level: 'Beginner',
            duration: '8 weeks',
            students: 950,
            rating: 4.6,
            price: '₹2,999',
            image: '📱',
            topics: ['SEO', 'Social Media', 'Content Marketing', 'Analytics'],
            status: 'Open'
        }
    ]

    const lectures = [
        {
            id: 1,
            title: 'Introduction to Quantum Computing',
            speaker: 'Dr. Priya Nair',
            date: 'Dec 15, 2024',
            time: '6:00 PM IST',
            duration: '90 minutes',
            attendees: 500,
            type: 'Live',
            category: 'technology',
            description: 'Explore the fundamentals of quantum computing and its applications'
        },
        {
            id: 2,
            title: 'Entrepreneurship in the Digital Age',
            speaker: 'Mr. Arjun Mehta',
            date: 'Dec 18, 2024',
            time: '7:00 PM IST',
            duration: '60 minutes',
            attendees: 750,
            type: 'Live',
            category: 'business',
            description: 'Learn how to build and scale digital businesses'
        }
    ]

    const categories = [
        { id: 'all', label: 'All Courses' },
        { id: 'programming', label: 'Programming' },
        { id: 'data-science', label: 'Data Science' },
        { id: 'marketing', label: 'Marketing' },
        { id: 'business', label: 'Business' }
    ]

    const [activeTab, setActiveTab] = useState('courses')

    const CourseCard = ({ course }) => (
        <div className="bg-white border border-orange-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-2xl">
                        {course.image}
                    </div>
                    <div>
                        <span className={`px-2 py-1 text-xs rounded-full ${course.status === 'Ongoing' ? 'bg-green-100 text-green-700' :
                                course.status === 'Starting Soon' ? 'bg-blue-100 text-blue-700' :
                                    'bg-orange-100 text-orange-700'
                            }`}>
                            {course.status}
                        </span>
                    </div>
                </div>
                <span className="text-xl font-bold text-green-600">{course.price}</span>
            </div>

            <h3 className="text-lg font-semibold text-gray-900 mb-2">{course.title}</h3>
            <p className="text-orange-600 font-medium mb-1">{course.instructor}</p>
            <p className="text-gray-600 text-sm mb-4">{course.institution}</p>

            <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                    <span>⏱️</span>
                    <span>{course.duration}</span>
                </div>
                <div className="flex items-center space-x-1">
                    <span>👥</span>
                    <span>{course.students} students</span>
                </div>
                <div className="flex items-center space-x-1">
                    <span>⭐</span>
                    <span>{course.rating}/5</span>
                </div>
                <div className="flex items-center space-x-1">
                    <span>📚</span>
                    <span>{course.level}</span>
                </div>
            </div>

            <div className="mb-4">
                <div className="flex flex-wrap gap-1">
                    {course.topics.slice(0, 3).map((topic, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                            {topic}
                        </span>
                    ))}
                    {course.topics.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                            +{course.topics.length - 3} more
                        </span>
                    )}
                </div>
            </div>

            <div className="flex space-x-3">
                <button className="flex-1 bg-orange-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-orange-700">
                    Enroll Now
                </button>
                <button className="px-4 py-2 border border-orange-300 text-orange-700 rounded-lg text-sm font-medium hover:bg-orange-50">
                    Preview
                </button>
            </div>
        </div>
    )

    const LectureCard = ({ lecture }) => (
        <div className="bg-white border border-orange-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
                <div>
                    <span className="px-2 py-1 bg-red-100 text-red-700 text-xs rounded-full">
                        {lecture.type}
                    </span>
                </div>
                <div className="text-right">
                    <p className="text-sm text-gray-600">{lecture.date}</p>
                    <p className="text-sm font-medium text-orange-600">{lecture.time}</p>
                </div>
            </div>

            <h3 className="text-lg font-semibold text-gray-900 mb-2">{lecture.title}</h3>
            <p className="text-orange-600 font-medium mb-2">{lecture.speaker}</p>
            <p className="text-gray-600 text-sm mb-4">{lecture.description}</p>

            <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                    <span>⏱️</span>
                    <span>{lecture.duration}</span>
                </div>
                <div className="flex items-center space-x-1">
                    <span>👥</span>
                    <span>{lecture.attendees} registered</span>
                </div>
            </div>

            <button className="w-full bg-orange-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-orange-700">
                Register for Lecture
            </button>
        </div>
    )

    return (
        <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 border border-orange-200">
                <h1 className="text-3xl font-bold text-orange-900 mb-2">Courses & Lectures</h1>
                <p className="text-gray-700">Learn from industry experts and academic professionals</p>
            </div>

            <div className="bg-white rounded-lg border border-orange-200">
                <div className="border-b border-orange-200">
                    <nav className="flex space-x-8 px-6">
                        {[
                            { id: 'courses', label: 'Courses', icon: '📚' },
                            { id: 'lectures', label: 'Live Lectures', icon: '🎥' }
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
                    {activeTab === 'courses' && (
                        <div className="space-y-6">
                            <div className="flex space-x-4">
                                {categories.map((category) => (
                                    <button
                                        key={category.id}
                                        onClick={() => setSelectedCategory(category.id)}
                                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${selectedCategory === category.id
                                                ? 'bg-orange-600 text-white'
                                                : 'bg-orange-100 text-orange-700 hover:bg-orange-200'
                                            }`}
                                    >
                                        {category.label}
                                    </button>
                                ))}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {courses
                                    .filter(course => selectedCategory === 'all' || course.category === selectedCategory)
                                    .map((course) => (
                                        <CourseCard key={course.id} course={course} />
                                    ))}
                            </div>
                        </div>
                    )}

                    {activeTab === 'lectures' && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {lectures.map((lecture) => (
                                <LectureCard key={lecture.id} lecture={lecture} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default CoursesSection