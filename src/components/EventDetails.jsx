import { useState } from 'react'

const EventDetails = ({ eventId, onBack }) => {
    const [isRegistered, setIsRegistered] = useState(false)

    // Event data - in real app this would come from API based on eventId
    const eventsData = {
        1: {
            id: 1,
            title: 'National AI Hackathon 2025',
            organizer: 'IIT Delhi',
            date: 'Jan 10 - Jan 12',
            location: 'Online',
            prize: '₹1,00,000',
            description: 'Compete to build impactful AI solutions for education and healthcare. Open to all Indian students and professionals. Teams of up to 4 members.',
            rules: [
                'Indian residents; age 16+',
                'Original submissions only',
                'Team size 1-4; student ID required for student track'
            ],
            timeline: [
                { event: 'Registration closes', date: '08 Jan' },
                { event: 'Hackathon', date: '10-12 Jan' },
                { event: 'Submission review', date: '13-17 Jan' },
                { event: 'Winners announced', date: '20 Jan' }
            ],
            prizes: [
                { position: 'Winner', amount: '₹1,00,000' },
                { position: 'Runner-up', amount: '₹50,000' },
                { position: 'Top 10', reward: 'Internship interviews' }
            ],
            organizer_info: {
                name: 'IIT Delhi Innovation Cell',
                status: 'Verified Host',
                events: '24 events',
                avatar: '👩‍💼'
            },
            faqs: [
                { question: 'Is there any fee?', answer: 'No, free to participate.' },
                { question: 'Can professionals join?', answer: 'Yes, in open track.' },
                { question: 'Will certificates be provided?', answer: 'Yes, for all participants.' }
            ]
        },
        2: {
            id: 2,
            title: 'Technova 2025 Coding Challenge',
            organizer: 'NIT Trichy',
            date: '28 Dec, 2024',
            location: 'NIT Trichy',
            prize: '₹75,000',
            description: 'Join the ultimate coding challenge at Technova 2025. Test your programming skills against the best coders from across India. Individual participation with exciting prizes.',
            rules: [
                'Individual participation only',
                'Valid college ID required',
                'Programming languages: C++, Java, Python allowed'
            ],
            timeline: [
                { event: 'Registration closes', date: '25 Dec' },
                { event: 'Coding Challenge', date: '28 Dec' },
                { event: 'Results announced', date: '30 Dec' }
            ],
            prizes: [
                { position: 'Winner', amount: '₹75,000' },
                { position: 'Runner-up', amount: '₹40,000' },
                { position: 'Third Place', amount: '₹25,000' }
            ],
            organizer_info: {
                name: 'NIT Trichy Tech Fest',
                status: 'Verified Host',
                events: '18 events',
                avatar: '🏛️'
            },
            faqs: [
                { question: 'What is the registration fee?', answer: '₹500 per participant.' },
                { question: 'Can I use external libraries?', answer: 'Only standard libraries allowed.' },
                { question: 'Duration of the contest?', answer: '4 hours coding challenge.' }
            ]
        },
        3: {
            id: 3,
            title: 'Data Science Workshop Series',
            organizer: 'PES University',
            date: '05 Jan, 2025',
            location: 'Hybrid',
            prize: 'Certificate',
            description: 'Comprehensive workshop series on Data Science fundamentals. Learn Python, data analysis, machine learning, and visualization techniques from industry experts.',
            rules: [
                'Basic Python knowledge required',
                'Laptop with Python installed',
                'Individual participation'
            ],
            timeline: [
                { event: 'Registration closes', date: '02 Jan' },
                { event: 'Workshop Day 1', date: '05 Jan' },
                { event: 'Workshop Day 2', date: '06 Jan' },
                { event: 'Certificate distribution', date: '07 Jan' }
            ],
            prizes: [
                { position: 'All Participants', reward: 'Certificate of Completion' },
                { position: 'Best Project', amount: '₹10,000' }
            ],
            organizer_info: {
                name: 'PES University Data Science Club',
                status: 'Verified Host',
                events: '12 events',
                avatar: '📊'
            },
            faqs: [
                { question: 'Is there a fee?', answer: '₹1,200 for the complete workshop series.' },
                { question: 'Will materials be provided?', answer: 'Yes, all datasets and code will be shared.' },
                { question: 'Can beginners attend?', answer: 'Yes, but basic Python knowledge is recommended.' }
            ]
        },
        4: {
            id: 4,
            title: 'Startup Pitch Competition',
            organizer: 'IIM Ahmedabad',
            date: '15 Jan, 2025',
            location: 'IIM Ahmedabad',
            prize: '₹2,00,000',
            description: 'Present your startup idea to industry experts and investors. Win funding, mentorship, and networking opportunities. Teams of 3-5 members required.',
            rules: [
                'Team size 3-5 members',
                'Original business idea required',
                'Pitch duration: 10 minutes + 5 minutes Q&A'
            ],
            timeline: [
                { event: 'Registration closes', date: '10 Jan' },
                { event: 'Pitch presentations', date: '15 Jan' },
                { event: 'Investor networking', date: '15 Jan' },
                { event: 'Results announced', date: '16 Jan' }
            ],
            prizes: [
                { position: 'Winner', amount: '₹2,00,000' },
                { position: 'Runner-up', amount: '₹1,00,000' },
                { position: 'Third Place', amount: '₹50,000' },
                { position: 'Best Innovation', reward: 'Mentorship Program' }
            ],
            organizer_info: {
                name: 'IIM Ahmedabad Entrepreneurship Cell',
                status: 'Verified Host',
                events: '15 events',
                avatar: '💼'
            },
            faqs: [
                { question: 'Is there an entry fee?', answer: 'No, participation is free.' },
                { question: 'Can students participate?', answer: 'Yes, students and professionals both welcome.' },
                { question: 'What should the pitch include?', answer: 'Problem, solution, market, business model, and team.' }
            ]
        },
        5: {
            id: 5,
            title: 'Web Development Quiz',
            organizer: 'BITS Pilani',
            date: '20 Dec, 2024',
            location: 'Online',
            prize: '₹25,000',
            description: 'Test your web development knowledge in this comprehensive online quiz covering HTML, CSS, JavaScript, React, and modern web technologies.',
            rules: [
                'Individual participation only',
                'Duration: 2 hours',
                'Multiple choice and coding questions'
            ],
            timeline: [
                { event: 'Registration closes', date: '18 Dec' },
                { event: 'Quiz starts', date: '20 Dec 10:00 AM' },
                { event: 'Quiz ends', date: '20 Dec 12:00 PM' },
                { event: 'Results announced', date: '21 Dec' }
            ],
            prizes: [
                { position: 'Winner', amount: '₹25,000' },
                { position: 'Runner-up', amount: '₹15,000' },
                { position: 'Third Place', amount: '₹10,000' }
            ],
            organizer_info: {
                name: 'BITS Pilani Web Development Club',
                status: 'Verified Host',
                events: '20 events',
                avatar: '💻'
            },
            faqs: [
                { question: 'Is it free to participate?', answer: 'Yes, completely free.' },
                { question: 'What topics are covered?', answer: 'HTML, CSS, JavaScript, React, Node.js, and web security.' },
                { question: 'Can I use external resources?', answer: 'No, it\'s a closed-book quiz.' }
            ]
        }
    }

    const event = eventsData[eventId] || eventsData[1] // Fallback to first event if ID not found

    const handleRegister = () => {
        setIsRegistered(!isRegistered)
    }

    return (
        <div className="max-w-4xl mx-auto space-y-6">
            {/* Back Button */}
            <button
                onClick={onBack}
                className="flex items-center space-x-2 text-orange-600 hover:text-orange-700 mb-4"
            >
                <span>←</span>
                <span>Back to Events</span>
            </button>

            {/* Header */}
            <div className="bg-white rounded-lg p-8 border border-orange-200">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">{event.title}</h1>

                <div className="flex items-center space-x-6 text-gray-600 mb-6">
                    <span className="flex items-center space-x-1">
                        <span>By</span>
                        <span className="font-medium">{event.organizer}</span>
                    </span>
                    <span>•</span>
                    <span>{event.date}</span>
                    <span>•</span>
                    <span>{event.location}</span>
                    <span>•</span>
                    <span className="flex items-center space-x-1">
                        <span>Reward:</span>
                        <span className="font-semibold text-green-600">{event.prize}</span>
                    </span>
                </div>

                <div className="flex items-center space-x-4">
                    <button
                        onClick={handleRegister}
                        className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-colors ${isRegistered
                            ? 'bg-green-600 text-white hover:bg-green-700'
                            : 'bg-orange-600 text-white hover:bg-orange-700'
                            }`}
                    >
                        <span>✓</span>
                        <span>{isRegistered ? 'Registered' : 'Register'}</span>
                    </button>

                    <button className="flex items-center space-x-2 px-4 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
                        <span>📤</span>
                        <span>Submit Entry</span>
                    </button>

                    <button className="flex items-center space-x-2 px-4 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
                        <span>📤</span>
                        <span>Share</span>
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Column - Main Content */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Overview */}
                    <div className="bg-white rounded-lg p-6 border border-orange-200">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">Overview</h2>
                        <p className="text-gray-700 leading-relaxed">{event.description}</p>
                    </div>

                    {/* Rules & Eligibility */}
                    <div className="bg-white rounded-lg p-6 border border-orange-200">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">Rules & Eligibility</h2>
                        <ul className="space-y-2">
                            {event.rules.map((rule, index) => (
                                <li key={index} className="flex items-start space-x-2">
                                    <span className="text-orange-600 mt-1">•</span>
                                    <span className="text-gray-700">{rule}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Timeline */}
                    <div className="bg-white rounded-lg p-6 border border-orange-200">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">Timeline</h2>
                        <ul className="space-y-3">
                            {event.timeline.map((item, index) => (
                                <li key={index} className="flex items-start space-x-2">
                                    <span className="text-orange-600 mt-1">•</span>
                                    <div className="flex-1">
                                        <span className="text-gray-700">{item.event}: </span>
                                        <span className="font-medium text-gray-900">{item.date}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* FAQs */}
                    <div className="bg-white rounded-lg p-6 border border-orange-200">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">FAQs</h2>
                        <div className="space-y-4">
                            {event.faqs.map((faq, index) => (
                                <div key={index}>
                                    <div className="flex items-start space-x-2 mb-1">
                                        <span className="text-orange-600 mt-1">•</span>
                                        <span className="font-medium text-gray-900">{faq.question}</span>
                                    </div>
                                    <p className="text-gray-700 ml-4">{faq.answer}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Column - Sidebar */}
                <div className="space-y-6">
                    {/* Prizes & Rewards */}
                    <div className="bg-white rounded-lg p-6 border border-orange-200">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">Prizes & Rewards</h2>
                        <ul className="space-y-2">
                            {event.prizes.map((prize, index) => (
                                <li key={index} className="flex items-start space-x-2">
                                    <span className="text-orange-600 mt-1">•</span>
                                    <div>
                                        <span className="font-medium text-gray-900">{prize.position}: </span>
                                        <span className="text-green-600 font-semibold">
                                            {prize.amount || prize.reward}
                                        </span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Organizer */}
                    <div className="bg-white rounded-lg p-6 border border-orange-200">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">Organizer</h2>
                        <div className="flex items-start space-x-3">
                            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-xl">
                                {event.organizer_info.avatar}
                            </div>
                            <div className="flex-1">
                                <h3 className="font-medium text-gray-900">{event.organizer_info.name}</h3>
                                <div className="flex items-center space-x-2 text-sm text-gray-600 mt-1">
                                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">
                                        {event.organizer_info.status}
                                    </span>
                                    <span>•</span>
                                    <span>{event.organizer_info.events}</span>
                                </div>
                                <button className="text-orange-600 text-sm font-medium mt-2 hover:text-orange-700">
                                    View Profile
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Share */}
                    <div className="bg-white rounded-lg p-6 border border-orange-200">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">Share</h2>
                        <div className="bg-gray-50 rounded-lg p-3 mb-4">
                            <input
                                type="text"
                                value="https://liftuplabs.events/ai-hackathon"
                                readOnly
                                className="w-full bg-transparent text-gray-600 text-sm focus:outline-none"
                            />
                        </div>
                        <div className="flex space-x-2">
                            <button className="flex items-center space-x-2 px-3 py-2 bg-gray-100 rounded-lg text-gray-700 text-sm hover:bg-gray-200">
                                <span>📋</span>
                                <span>Copy</span>
                            </button>
                            <button className="flex items-center space-x-2 px-3 py-2 bg-gray-100 rounded-lg text-gray-700 text-sm hover:bg-gray-200">
                                <span>𝕏</span>
                                <span>X</span>
                            </button>
                            <button className="flex items-center space-x-2 px-3 py-2 bg-gray-100 rounded-lg text-gray-700 text-sm hover:bg-gray-200">
                                <span>💼</span>
                                <span>LinkedIn</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventDetails