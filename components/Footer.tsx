import { Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-slate-300">© 2025 Chris Vinod Kurian. All rights reserved.</p>
            </div>
            <div className="flex items-center space-x-6">
              <a
                href="https://github.com/cvkchris/cvkchris.github.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-white transition-colors flex items-center space-x-2"
              >
                <Github className="w-4 h-4" />
                <span>View Source</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
  )
}