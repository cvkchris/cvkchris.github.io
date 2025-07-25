import ProjectCard from "./projectcard"

interface Project {
  repository: string
}

interface ProjectsProps {
  projects: Project[]
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Array.isArray(projects) && projects.map((project, idx) => (
            <ProjectCard key={idx} repoName={project.repository} />
          ))}
        </div>
      </div>
    </section>  
  )
}