import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"

interface HeroProps {
  scrollToSection: (sectionId: string) => void
}

export default function Hero({ scrollToSection }: HeroProps) {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* ...SVG background... */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#60a5fa" />
                <stop offset="100%" stopColor="#1e3a8a" />
              </linearGradient>
            </defs>
            <circle cx="200" cy="200" r="100" fill="url(#grad1)" opacity="0.3" />
            <circle cx="800" cy="300" r="150" fill="url(#grad1)" opacity="0.2" />
            <circle cx="600" cy="700" r="120" fill="url(#grad1)" opacity="0.25" />
            <polygon points="100,800 200,600 300,800" fill="url(#grad1)" opacity="0.15" />
            <polygon points="700,100 850,200 750,300" fill="url(#grad1)" opacity="0.2" />
          </svg>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 mb-6">Chris Vinod Kurian</h1>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-blue-600 mb-8">
          AI/ML & Software Engineer
        </h2>
        <p className="text-xl sm:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto">
          Solving tomorrow's challenges with code today.
        </p>
        
        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-12">
          <a
              href="https://github.com/cvkchris"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <Github className="w-6 h-6 text-slate-700" />
            </a>
            <a
              href="https://www.linkedin.com/in/chris-vinod-kurian/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-6 h-6 text-blue-600" />
            </a>
            <a
              href="mailto:chris11.vinod@gmail.com"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <Mail className="w-6 h-6 text-slate-700" />
            </a>
        </div>
        <Button
          onClick={() => scrollToSection("about")}
          size="lg"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Explore My Work
        </Button>
      </div>
    </section>
  )
}