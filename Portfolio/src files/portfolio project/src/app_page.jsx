import Hero from './Components/app_components_Hero.jsx';

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="container mx-auto px-6 py-12">
        {/* Featured Projects Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <div key={project} className="border rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={`/placeholder.svg`} 
                  alt={`Project ${project}`} 
                  className="w-full h-auto" 
                  style={{ width: '300px', height: '200px' }}
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">Project {project}</h3>
                  <p className="text-gray-600 mb-4">Brief description of Project {project}</p>
                  <a href={`/projects#project-${project}`} className="text-blue-500 hover:underline">
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a href="/projects" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              View All Projects
            </a>
          </div>
        </section>

        {/* Skills Overview Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Skills Overview</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {['Web Development', 'UI/UX Design', 'Database Management'].map((skill) => (
              <div key={skill} className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">{skill}</h3>
                <p className="text-gray-600">Brief description of your expertise in {skill}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a href="/skills" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              View All Skills
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
