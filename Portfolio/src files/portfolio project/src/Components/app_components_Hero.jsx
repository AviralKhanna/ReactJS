import Link from 'next/link'

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-5xl font-bold mb-4">Your Name</h1>
        <p className="text-xl mb-8">Professional [Your Profession] specializing in [Your Specialties]</p>
        <div className="space-x-4">
          <Link href="/projects" className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-full">
            View Projects
          </Link>
          <Link href="/contact" className="bg-transparent hover:bg-white hover:text-blue-600 border border-white font-bold py-3 px-6 rounded-full">
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero

