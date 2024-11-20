import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
    <div className="container mx-auto text-center">
      <div className="mb-4">
        <h4 className="text-lg font-semibold">Follow Us</h4>
        <div className="flex justify-center space-x-4 mt-2">
          <Link href="#" className="hover:text-gray-400">Facebook</Link>
          <Link href="#" className="hover:text-gray-400">Twitter</Link>
          <Link href="#" className="hover:text-gray-400">Instagram</Link>
          <Link href="#" className="hover:text-gray-400">LinkedIn</Link>
          
        </div>
      </div>
      <p className="text-sm">
        © 2024 Company. All rights reserved.
      </p>
    </div>
  </footer>
  )
}

export default Footer