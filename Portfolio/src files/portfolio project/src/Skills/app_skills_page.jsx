const skills = [
  {
    category: "Frontend Development",
    technologies: ["HTML5", "CSS3", "JavaScript", "React", "Vue.js", "Angular"]
  },
  {
    category: "Backend Development",
    technologies: ["Node.js", "Express", "Django", "Ruby on Rails"]
  },
  {
    category: "Database Management",
    technologies: ["MongoDB", "PostgreSQL", "MySQL", "Redis"]
  },
  {
    category: "DevOps & Tools",
    technologies: ["Git", "Docker", "Kubernetes", "AWS", "CI/CD"]
  }
]

export function Skills() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8">My Skills</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {skills.map((skillSet, index) => (
          <div key={index} className="border rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-4">{skillSet.category}</h2>
            <div className="flex flex-wrap gap-2">
              {skillSet.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm font-semibold">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

