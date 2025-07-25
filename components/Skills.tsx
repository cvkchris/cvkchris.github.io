import { Badge } from "@/components/ui/badge"

interface SkillsProps {
  skills: string[]
}

export default function Skills({ skills }: SkillsProps) {
  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">Skills & Technologies</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="px-6 py-3 text-lg font-medium bg-white text-slate-700 border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 cursor-default"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  )
}