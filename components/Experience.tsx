import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Award, Briefcase, GraduationCap, Calendar } from "lucide-react"

interface Experience {
  type: string
  title: string
  organization: string
  location: string
  period: string
  description: React.ReactNode
}

interface ExperienceProps {
  experiences: Experience[]
}

const getExperienceIcon = (type: string) => {
  switch (type) {
    case "education":
      return <GraduationCap className="w-4 h-4" />
    case "internship":
      return <Briefcase className="w-4 h-4" />
    case "achievement":
      return <Award className="w-4 h-4" />
    case "leadership":
      return <Award className="w-4 h-4" />
    default:
      return <Calendar className="w-4 h-4" />
  }
}

export default function Experience({ experiences }: ExperienceProps) {
  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">Experience & Timeline</h2>
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-300"></div>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start space-x-6">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg">
                  {getExperienceIcon(exp.type)}
                </div>
                <div className="flex-grow">
                  <Card className="border-slate-200 hover:border-blue-300 transition-colors">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg font-bold text-slate-900">{exp.title}</CardTitle>
                          <CardDescription className="text-blue-600 font-medium">{exp.organization}</CardDescription>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {exp.period}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center space-x-2 text-sm text-slate-500 mb-2">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                      <p className="text-slate-600">{exp.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}