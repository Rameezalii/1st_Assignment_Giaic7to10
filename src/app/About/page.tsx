import React from 'react'

const About = () => {
  return (
    <div className='bg-lime-100 w-[1148] h-[600]'>
    <div className="min-h-screen flex items-center justify-center">
    <div className="bg-white shadow-lg rounded-lg p-8 max-w-3xl">
      <h1 className='flex justify-center text-4xl text-sky-700 mb-9'>About Us</h1>
      <p className="text-green-700 mb-4">
      Welcome to Karachi Cattles! We are a premier platform dedicated to connecting buyers and sellers within the livestock market. With a focus on trust and quality, we aim to provide a seamless experience for cattle trading in the heart of Karachi. Whether you’re looking for the finest breeds or reliable sellers, our platform ensures transparency, authenticity, and excellence in every transaction.
      </p>
      <p className="text-green-700 mb-4">
        Our journey started in 2010, and since then, we have grown into a trusted name in the industry. We believe in innovation, dedication, and building lasting relationships with our clients.
      </p>
      <div className="mt-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">Our Values</h2>
        <ul className="list-disc list-inside text-green-700">
          <li>Integrity and Honesty</li>
          <li>Customer Satisfaction</li>
          <li>Continuous Improvement</li>
          <li>Teamwork and Collaboration</li>
        </ul>
      </div>
    </div>
  </div>
  </div>
  )
}

export default About