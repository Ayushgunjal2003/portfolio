import React, { useState } from 'react';

function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    function changeHandler(event) {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }

    function submitHandler(event) {
        event.preventDefault();
        console.log("Form data:", formData);
        // Add your form submission logic here
    }

    return (
        <form onSubmit={submitHandler} className="flex flex-col gap-4">
            <div>
                <label htmlFor='name' className="block text-white mb-2">Name</label>
                <input
                    type='text'
                    name='name'
                    id='name'
                    placeholder='Your Name'
                    onChange={changeHandler}
                    value={formData.name}
                    className="block w-full px-3 py-2 rounded bg-gray-800 text-white focus:outline-none focus:bg-gray-900"
                />
            </div>

            <div>
                <label htmlFor='email' className="block text-white mb-2">Email Address</label>
                <input
                    type='email'
                    name='email'
                    id='email'
                    placeholder='Your Email Address'
                    onChange={changeHandler}
                    value={formData.email}
                    className="block w-full px-3 py-2 rounded bg-gray-800 text-white focus:outline-none focus:bg-gray-900"
                />
            </div>

            <div>
                <label htmlFor='subject' className="block text-white mb-2">Subject</label>
                <input
                    type='text'
                    name='subject'
                    id='subject'
                    placeholder='Subject'
                    onChange={changeHandler}
                    value={formData.subject}
                    className="block w-full px-3 py-2 rounded bg-gray-800 text-white focus:outline-none focus:bg-gray-900"
                />
            </div>

            <div>
                <label htmlFor='message' className="block text-white mb-2">Message</label>
                <textarea
                    name='message'
                    id='message'
                    placeholder='Your Message'
                    onChange={changeHandler}
                    value={formData.message}
                    className="block w-full px-3 py-2 rounded bg-gray-800 text-white focus:outline-none focus:bg-gray-900"
                    rows="4"
                ></textarea>
            </div>

            <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg focus:outline-none focus:shadow-outline mt-4"
            >
                Send Message
            </button>
        </form>
    );
}

export default ContactForm;
