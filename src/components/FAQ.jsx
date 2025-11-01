import { useState } from 'react'

const FAQ = () => {
    const [openFAQ, setOpenFAQ] = useState(null)

    const faqs = [
        {
            id: 1,
            question: "What is Liftuplabs?",
            answer: "A central hub to discover events, share notes and PYQs, and access courses and guidance.",
            icon: "❓"
        },
        {
            id: 2,
            question: "How do I host an event?",
            answer: "Create an account, go to Events & Competitions, and use Host Event to publish details.",
            icon: "📅"
        },
        {
            id: 3,
            question: "Is my data secure?",
            answer: "We follow modern security standards and provide transparent privacy controls.",
            icon: "🔒"
        }
    ]

    const toggleFAQ = (id) => {
        setOpenFAQ(openFAQ === id ? null : id)
    }

    return (
        <div className="bg-white rounded-lg p-6 border border-orange-200">
            <h3 className="text-lg font-semibold text-orange-900 mb-6">Frequently Asked Questions</h3>

            <div className="space-y-4">
                {faqs.map((faq) => (
                    <div key={faq.id} className="border border-gray-200 rounded-lg">
                        <button
                            onClick={() => toggleFAQ(faq.id)}
                            className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                        >
                            <div className="flex items-center space-x-3">
                                <span className="text-orange-600">{faq.icon}</span>
                                <span className="font-medium text-gray-900">{faq.question}</span>
                            </div>
                            <span className={`transform transition-transform ${openFAQ === faq.id ? 'rotate-180' : ''}`}>
                                ▼
                            </span>
                        </button>

                        {openFAQ === faq.id && (
                            <div className="px-4 pb-4">
                                <p className="text-gray-600 pl-8">{faq.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FAQ