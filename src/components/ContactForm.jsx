import { useState } from 'react'

const ContactForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        topic: '',
        relatedTo: 'General',
        message: '',
        sendCopy: false
    })

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Form submitted:', formData)
        // Handle form submission here
    }

    return (
        <div className="bg-white rounded-lg p-6 border border-orange-200">
            <div className="mb-6">
                <h3 className="text-lg font-semibold text-orange-900 mb-2">Send us a message</h3>
                <p className="text-gray-600 text-sm">We usually respond within 24 hours</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <input
                            type="text"
                            name="fullName"
                            placeholder="Full Name"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent"
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent"
                            required
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <input
                            type="text"
                            name="topic"
                            placeholder="Topic"
                            value={formData.topic}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent"
                        />
                    </div>
                    <div>
                        <select
                            name="relatedTo"
                            value={formData.relatedTo}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent bg-white"
                        >
                            <option value="General">General</option>
                            <option value="Events">Events</option>
                            <option value="Notes">Notes</option>
                            <option value="Technical">Technical</option>
                            <option value="Partnership">Partnership</option>
                        </select>
                    </div>
                </div>

                <div>
                    <textarea
                        name="message"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={6}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent resize-none"
                        required
                    />
                </div>

                <div className="flex items-center justify-between">
                    <label className="flex items-center space-x-2 text-sm text-gray-600">
                        <input
                            type="checkbox"
                            name="sendCopy"
                            checked={formData.sendCopy}
                            onChange={handleInputChange}
                            className="rounded border-gray-300 text-orange-600 focus:ring-orange-300"
                        />
                        <span>Send me a copy</span>
                    </label>

                    <button
                        type="submit"
                        className="bg-orange-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-orange-700 transition-colors flex items-center space-x-2"
                    >
                        <span>📤</span>
                        <span>Submit</span>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default ContactForm