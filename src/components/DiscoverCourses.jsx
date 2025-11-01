import { useState } from 'react'

const DiscoverCourses = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedFilters, setSelectedFilters] = useState({
        category: 'All',
        level: 'All',
        duration: 'All'
    })

    const courses = [
        {
            id: 1,
            title: 'Data Structures in C++',
            instructor: 'Prof. Rajesh Kumar',
            institution: 'IIT Delhi',
            category: 'Computer Science',
            level: 'Intermediate',
            duration: '8 weeks',
            rating: 4.8,
            students: '2.3k',
            price: 'Free',
            image: '/api/placeholder/300/200',
            tags: ['Programming', 'Algorithms', 'C++']
        },
        {
            id: 2,
            title: 'Machine Learning Fundamentals',
            instructor: 'Dr. Priya Sharma',
            institution: 'IISC Bangalore',
            category: 'Data Science',
            level: 'Beginner',
            duration: '12 weeks',
            rating: 4.7,
            students: '1.8k',
            price: '₹2,999',
            image: '/api/placeholder/300/200',
            tags: ['ML', 'Python', 'Statistics']
        },
        {
            id: 3,
            title: 'Business Analytics Basics',
            instructor: 'Prof. Amit Gupta',
            institution: 'IIM Ahmedabad',
            category: 'Business',
            level: 'Beginner',
            duration: '6 weeks',
            rating: 4.6,
            students: '950',
            price: '₹1,999',
            image: '/api/placeholder/300/200',
            tags: ['Analytics', 'Excel', 'Business']
        },
        {
            id: 4,
            title: 'Digital Electronics',
            instructor: 'Dr. Suresh Patel',
            institution: 'NIT Trichy',
            category: 'Electronics',
            level: 'Intermediate',
            duration: '10 weeks',
            rating: 4.5,
            students: '1.2k',
            price: 'Free',
            image: '/api/placeholder/300/200',
            tags: ['Electronics', 'Logic Gates', 'Circuits']
        }
    ]

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="bg-white rounded-lg p-6 border border-orange-200">
                <div className="flex items-center justify-between mb-4">
                    <h1 className="text-3xl font-bold text-orange-900">Discover Courses & Lectures</h1>
                    <button className="bg-orange-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-orange-700 transition-colors">
                        Create Course
                    </button>
                </div>
                <p className="text-gray-700">
                    Access high-quality courses and lectures from top institutions and industry experts
                </p>
            </div>

            {/* Search and Filters */}
            <div className="bg-white rounded-lg p-6 border border-orange-200">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                    <input
                        type="text"
                        placeholder="Search courses..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
                    />
                    <select
                        value={selectedFilters.category}
                        onChange={(e) => setSelectedFilters({ ...selectedFilters, category: e.target.value })}
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
                    >
                        <option>All Categories</option>
                        <option>Computer Science</option>
                        <option>Data Science</option>
                        <option>Business</option>
                        <option>Electronics</option>
                        <option>Mathematics</option>
                    </select>
                    <select
                        value={selectedFilters.level}
                        onChange={(e) => setSelectedFilters({ ...selectedFilters, level: e.target.value })}
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
                    >
                        <option>All Levels</option>
                        <option>Beginner</option>
                        <option>Intermediate</option>
                        <option>Advanced</option>
                    </select>
                    <select
                        value={selectedFilters.duration}
                        onChange={(e) => setSelectedFilters({ ...selectedFilters, duration: e.target.value })}
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
                    >
                        <option>All Durations</option>
                        <option>1-4 weeks</option>
                        <option>5-8 weeks</option>
                        <option>9-12 weeks</option>
                        <option>12+ weeks</option>
                    </select>
                </div>
            </div>

            {/* Courses Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {courses.map((course) => (
                    <div key={course.id} className="bg-white rounded-lg border border-orange-200 overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="bg-gray-800 h-48 flex items-center justify-center">
                            <span className="text-white">Course Preview</span>
                        </div>
                        <div className="p-6">
                            <div className="flex items-start justify-between mb-3">
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{course.title}</h3>
                                    <p className="text-gray-600 text-sm">by {course.instructor}</p>
                                    <p className="text-gray-500 text-xs">{course.institution}</p>
                                </div>
                                <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded text-xs font-medium">
                                    {course.level}
                                </span>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-600">
                                <div>
                                    <span className="font-medium">Duration:</span> {course.duration}
                                </div>
                                <div>
                                    <span className="font-medium">Students:</span> {course.students}
                                </div>
                                <div>
                                    <span className="font-medium">Rating:</span> ⭐ {course.rating}
                                </div>
                                <div>
                                    <span className="font-medium">Price:</span> {course.price}
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {course.tags.map((tag, index) => (
                                    <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex space-x-3">
                                <button className="flex-1 bg-orange-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-orange-700 transition-colors">
                                    Enroll Now
                                </button>
                                <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                                    Preview
                                </button>
                                <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                                    Details
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Course Details */}
            <div className="bg-white rounded-lg p-6 border border-orange-200">
                <h2 className="text-2xl font-semibold text-orange-900 mb-4">Course Details</h2>
                <div className="bg-gray-800 h-64 rounded-lg mb-6 flex items-center justify-center">
                    <span className="text-white text-lg">Data Structures in C++</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">What you'll learn</h3>
                        <ul className="space-y-2 text-gray-700 mb-6">
                            <li>• Fundamental data structures and their implementations</li>
                            <li>• Algorithm analysis and complexity</li>
                            <li>• Trees, graphs, and advanced data structures</li>
                            <li>• Problem-solving techniques</li>
                            <li>• Real-world applications and case studies</li>
                        </ul>

                        <h4 className="font-semibold text-gray-900 mb-2">Prerequisites</h4>
                        <ul className="text-sm text-gray-600 space-y-1 mb-6">
                            <li>• Basic programming knowledge in C++</li>
                            <li>• Understanding of basic mathematics</li>
                            <li>• Familiarity with computer science concepts</li>
                        </ul>

                        <h4 className="font-semibold text-gray-900 mb-2">Course Structure</h4>
                        <div className="text-sm text-gray-600 space-y-1">
                            <div>• 8 weeks of content</div>
                            <div>• 24 video lectures</div>
                            <div>• 12 programming assignments</div>
                            <div>• 4 quizzes and 1 final project</div>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Instructor</h4>
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="w-12 h-12 bg-orange-200 rounded-full flex items-center justify-center">
                                <span className="text-orange-700 font-medium">RK</span>
                            </div>
                            <div>
                                <div className="font-medium text-gray-900">Prof. Rajesh Kumar</div>
                                <div className="text-sm text-gray-600">Computer Science Department, IIT Delhi</div>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <button className="w-full bg-orange-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-orange-700 transition-colors">
                                Enroll for Free
                            </button>
                            <button className="w-full border border-gray-300 text-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                                Add to Wishlist
                            </button>
                            <button className="w-full border border-gray-300 text-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                                Share Course
                            </button>
                        </div>

                        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                            <h5 className="font-semibold text-gray-900 mb-2">Course Stats</h5>
                            <div className="text-sm text-gray-600 space-y-1">
                                <div>• 2,345 students enrolled</div>
                                <div>• 4.8/5 average rating</div>
                                <div>• 89% completion rate</div>
                                <div>• Certificate available</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* My Courses */}
            <div className="bg-white rounded-lg p-6 border border-orange-200">
                <h2 className="text-2xl font-semibold text-orange-900 mb-6">My Courses</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Currently Enrolled</h3>
                        <div className="space-y-3">
                            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                <div>
                                    <div className="font-medium text-gray-900">Machine Learning Basics</div>
                                    <div className="text-sm text-gray-600">Progress: 65% • 4 weeks left</div>
                                </div>
                                <button className="text-orange-600 hover:text-orange-700 text-sm font-medium">Continue</button>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                <div>
                                    <div className="font-medium text-gray-900">Web Development</div>
                                    <div className="text-sm text-gray-600">Progress: 30% • 8 weeks left</div>
                                </div>
                                <button className="text-orange-600 hover:text-orange-700 text-sm font-medium">Resume</button>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Completed Courses</h3>
                        <div className="space-y-3">
                            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                <div>
                                    <div className="font-medium text-gray-900">Data Structures in C++</div>
                                    <div className="text-sm text-gray-600">Completed • Certificate earned</div>
                                </div>
                                <button className="text-orange-600 hover:text-orange-700 text-sm font-medium">Certificate</button>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                <div>
                                    <div className="font-medium text-gray-900">Digital Marketing</div>
                                    <div className="text-sm text-gray-600">Completed • Certificate earned</div>
                                </div>
                                <button className="text-orange-600 hover:text-orange-700 text-sm font-medium">Review</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DiscoverCourses