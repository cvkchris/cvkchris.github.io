"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Menu,
  X,
  MapPin,
  Phone,
  Calendar,
  Award,
  Briefcase,
  GraduationCap,
} from "lucide-react"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "skills", "projects", "experience", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const skills = [
    "Node.js",
    "Python",
    "Java",
    "MongoDB",
    "MySQL",
    "AWS",
    "REST APIs",
    "Computer Vision",
    "Machine Learning",
    "React",
    "Express.js",
    "TensorFlow",
    "Docker",
    "Git",
  ]

  const projects = [
    {
      title: "WayfinderBot - Warehouse Navigation using Reinforcement Learning",
      description:
        "A grid-based warehouse navigation simulation using Q-Learning. The bot learns to navigate \
         efficiently from start to goal while avoiding obstacles (walls). It also visualizes the learned \
          Q-values using heatmaps and tracks agent performance.",
      github: "https://github.com/cvkchris/WayfinderBot",
      demo: "https://github.com/cvkchris/WayfinderBot",
      tech: ["Python", "Matplotlib", "Reinforcement Learning", "Q-Learning", "NumPy"],
    },
    {
      title: "SafeVision - Real-time Violence Detection System Using Deep Learning",
      description:
        "SafeVision is a real-time crowd surveillance system designed to detect violent behavior in video footage \
        using deep learning models. The goal is to assist in public safety monitoring by automatically flagging \
        potential violent actions for rapid response.",
      github: "https://github.com/cvkchris/Safe-Vision",
      demo: "https://github.com/cvkchris/Safe-Vision",
      tech: ["Python", "Flask", "Tensorflow", "Telegram Bot API", "OpenCV"],
    },
    {
      title: "Supply Chain Management",
      description:
        "A simple Supply Chain Management Desktop Application for stationary products made using Java and Swing. This \
        application is designed to streamline the management of stationary supplies, allowing for efficient inventory \
        control, order processing, and data visualization through a user-friendly dashboard.",
      github: "https://github.com/cvkchris/SupplyChainManagement",
      demo: "https://github.com/cvkchris/SupplyChainManagement",
      tech: ["Java", "Swing", "MySQL", "JDBC"],
    },
    {
      title: "Heart Disease Prediction",
      description:
        "AI-powered heart health prediction app designed to assist individuals in making informed decisions \
        about their well-being. This application leverages machine learning to assess the risk of heart disease \
        based on key health indicators.",
      github: "https://github.com/cvkchris/Heart-Disease-Prediction",
      demo: "https://heart-disease-prediction-cvk.streamlit.app/",
      tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "Streamlit", "Matplotlib", "Seaborn"],
    },
  ]

  const experiences = [
    {
      type: "education",
      title: "B.Tech in AI & Machine Learning",
      organization: "Symbiosis Institute of Technology",
      location: "Pune, India",
      period: "2022 - 2026",
      description: "Specializing in AI/ML with Security and Privacy as a minor. ",
    },
    {
      type: "achievement",
      title: "Ideathon Winner",
      organization: "IEEE Bombay Section",
      location: "Pune, India",
      period: "2022",
      description: "First place for a ground-breaking idea on Education theme.",
    },
    {
      type: "internship",
      title: "Marketing Team Leader",
      organization: "AIESEC in Pune",
      location: "Pune, India",
      period: "Feb,2024 - June,2024",
      description: "Handling digital marketing for B2B and B2C.",
    },
    {
      type: "internship",
      title: "Cyber Security and Machine Learning Intern",
      organization: "All Safe",
      location: "Pune, India",
      period: "Sep,2024 - March,2025",
      description: "Learned OPWAT Top 10 vulnerabilities and solved Portswigger Academy courses.",
    },

    {
      type: "leadership",
      title: "Website and Technical Lead",
      organization: "SymbiTech25",
      location: "Pune, India",
      period: "2025",
      description: (
    <>
      Lead a team of 6 along with another lead to build the website and manage technical aspects.{" "}
      Check it out:{" "}
      <a
        href="https://symbitech2025.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline hover:text-blue-800"
      >
        symbitech2025.vercel.app
      </a>
    </>
  ),
    },
  ]

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

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-slate-900">Chris Vinod Kurian</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    activeSection === item.toLowerCase() ? "text-blue-600" : "text-slate-600"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600 hover:text-slate-900">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-slate-200">
              {["About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-4 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-slate-50"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Abstract Background */}
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

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">About Me</h2>
          <div className="prose prose-lg mx-auto text-slate-600">
            <p className="text-xl leading-relaxed mb-6">
              I'm a passionate B.Tech student specializing in AI & Machine Learning at Symbiosis Institute of
              Technology, Pune. With hands-on experience in backend development and computer vision projects, I bring a
              unique blend of theoretical knowledge and practical expertise to every challenge.
            </p>
            <p className="text-xl leading-relaxed mb-6">
              My proven track record includes building scalable, secure applications using the MERN stack, Python, and
              AWS. I thrive in high-ownership environments where I can take projects from zero to one, leveraging my
              quick learning ability to adapt to new technologies and solve complex problems.
            </p>
            <p className="text-xl leading-relaxed">
              Whether it's developing AI-powered solutions, architecting robust backend systems, or leading technical
              teams, I'm driven by the opportunity to create meaningful impact through code and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
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

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-slate-200 hover:border-blue-300"
              >
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-slate-600">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center space-x-2 hover:bg-slate-50 bg-transparent"
                      onClick={() => window.open(project.github, "_blank")}
                    >
                      <Github className="w-4 h-4" />
                      <span>GitHub</span>
                    </Button>
                    <Button
                      size="sm"
                      className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700"
                      onClick={() => window.open(project.demo, "_blank")}
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">Experience & Timeline</h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-300"></div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative flex items-start space-x-6">
                  {/* Timeline dot */}
                  <div className="flex-shrink-0 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg">
                    {getExperienceIcon(exp.type)}
                  </div>

                  {/* Content */}
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

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">Get In Touch</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">Let's Connect</h3>
              <p className="text-lg text-slate-600 mb-8">
                I'm always open to discussing new opportunities, interesting projects, or just having a chat about
                technology and innovation.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">Email</p>
                    <p className="text-slate-600">chris@example.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <Phone className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">Phone</p>
                    <p className="text-slate-600">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <MapPin className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">Location</p>
                    <p className="text-slate-600">Symbiosis Institute of Technology, Pune</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form
                className="space-y-6"
                onSubmit={(e) => {
                  e.preventDefault()
                  // Handle form submission - you can integrate with a form service
                  alert("Thank you for your message! I'll get back to you soon.")
                }}
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    required
                    className="w-full border-slate-300 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    className="w-full border-slate-300 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    required
                    rows={5}
                    className="w-full border-slate-300 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-slate-300">© 2024 Chris Vinod Kurian. All rights reserved.</p>
            </div>
            <div className="flex items-center space-x-6">
              <a
                href="https://github.com/chrisvinod/portfolio"
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
    </div>
  )
}
