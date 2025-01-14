'use client'

import Link from 'next/link'
import { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-gray-800">Your Name</Link>
          <div className="hidden md:flex space-x-4">
            <Link href="/" className="text-gray-800 hover:text-blue-600">Home</Link>
            <Link href="/about" className="text-gray-800 hover:text-blue-600">About</Link>
            <Link href="/projects" className="text-gray-800 hover:text-blue-600">Projects</Link>
            <Link href="/skills" className="text-gray-800 hover:text-blue-600">Skills</Link>
            <Link href="/contact" className="text-gray-800 hover:text-blue-600">Contact</Link>
          </div>
          <button 
            className="md:hidden focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
              ) : (
                <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
              )}
            </svg>
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <Link href="/" className="block py-2 text-gray-800 hover:text-blue-600">Home</Link>
            <Link href="/about" className="block py-2 text-gray-800 hover:text-blue-600">About</Link>
            <Link href="/projects" className="block py-2 text-gray-800 hover:text-blue-600">Projects</Link>
            <Link href="/skills" className="block py-2 text-gray-800 hover:text-blue-600">Skills</Link>
            <Link href="/contact" className="block py-2 text-gray-800 hover:text-blue-600">Contact</Link>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header

