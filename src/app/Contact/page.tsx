import React from 'react'

const Contact = () => {
  return (
    <div className='bg-lime-100 w-[1148] h-[600]'>
        <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl w-full">
        <h1 className='flex justify-center text-4xl text-sky-700 mb-9'>Contact Us</h1>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-blue-500"
              placeholder="Enter your full name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 font-medium mb-1">
              Message
            </label>
            <textarea
              id="message"
              className="w-full border border-gray-300 rounded-lg p-2 h-32 focus:outline-none focus:border-blue-500"
              placeholder="Write your message here"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-2 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Contact