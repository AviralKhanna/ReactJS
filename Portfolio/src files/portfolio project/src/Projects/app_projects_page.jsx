import Image from 'next/image'

const projects = [
  {
    id: 1,
    title: "Project 1",
    description: "A comprehensive description of Project 1, including the technologies used, your role, and the impact of the project.",
    image: "/placeholder.svg?height=300&width=500",
    link: "#",
    technologies: ["React", "Node.js", "MongoDB"]
  },
  {
    id: 2,
    title: "Project 2",
    description: "Detailed explanation of Project 2, highlighting the challenges overcome and the solutions implemented.",
    image: "/placeholder.svg?height=300&width=500",
    link: "#",
    technologies: ["Vue.js", "Express", "PostgreSQL"]
  },
  {
    id: 3,
    title: "Project 3",
    description: "In-depth overview of Project 3, showcasing your problem-solving skills and the project's success metrics.",
    image: "/placeholder.svg?height=300&width=500",
    link: "#",
    technologies: ["Angular", "Django", "MySQL"]
  },
]

export function Projects() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8">My Projects</h1>
      <div className="space-y-12">
        {projects.map((project) => (
          <div key={project.id} id={`project-${project.id}`} className="border rounded-lg overflow-hidden shadow-lg">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <Image src={project.image} alt={project.title} width={500} height={300} className="h-full w-full object-cover md:w-48" />
              </div>
              <div className="p-8">I'll continue the text stream from the cut-off point:

cover md:w-48" />
              </div>
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="mb-4">
                  <h3 className="text-lg font-semibold mb-2">Technologies Used:</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <a href={project.link} className="text-blue-500 hover:underline">View Project</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

