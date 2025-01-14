import Image from 'next/image'

export function About() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8">About Me</h1>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <Image src="/placeholder.svg?height=400&width=400" alt="Your Name" width={400} height={400} className="rounded-lg shadow-lg" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Professional Summary</h2>
          <p className="mb-4 text-gray-700">
            [Write a comprehensive professional summary here. Highlight your key skills, experiences, and what you're passionate about in your field. Discuss your career goals and what drives you in your profession.]
          </p>
          <h2 className="text-2xl font-semibold mb-4">Education</h2>
          <ul className="list-disc list-inside mb-4 text-gray-700">
            <li>Degree in [Your Field] - University Name, Year</li>
            <li>Relevant Certifications or Additional Education</li>
          </ul>
          <h2 className="text-2xl font-semibold mb-4">Professional Philosophy</h2>
          <p className="mb-4 text-gray-700">
            [Discuss your approach to work, your values, and what sets you apart in your field.]
          </p>
        </div>
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Professional Experience</h2>
        <div className="space-y-8">
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="text-xl font-semibold">Senior [Your Position] - Company Name</h3>
            <p className="text-gray-600">Start Date - End Date</p>
            <ul className="list-disc list-inside mt-2 text-gray-700">
              <li>Key responsibility or achievement 1</li>
              <li>Key responsibility or achievement 2</li>
              <li>Key responsibility or achievement 3</li>
            </ul>
          </div>
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="text-xl font-semibold">[Your Position] - Previous Company Name</h3>
            <p className="text-gray-600">Start Date - End Date</p>
            <ul className="list-disc list-inside mt-2 text-gray-700">
              <li>Key responsibility or achievement 1</li>
              <li>Key responsibility or achievement 2</li>
              <li>Key responsibility or achievement 3</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

