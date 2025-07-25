"use client"

import { useState, useEffect } from "react"
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

import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Skills from "@/components/Skills"
import Projects from "@/components/Projects"
import Experience from "@/components/Experience"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

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
      repository: "WayfinderBot",
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
      repository: "Safe-Vision",
      tech: ["Python", "Flask", "Tensorflow", "Telegram Bot API", "OpenCV"],
    },
    {
      title: "Supply Chain Management",
      description:
        "A simple Supply Chain Management Desktop Application for stationary products made using Java and Swing. This \
        application is designed to streamline the management of stationary supplies, allowing for efficient inventory \
        control, order processing, and data visualization through a user-friendly dashboard.",
      github: "https://github.com/cvkchris/SupplyChainManagement",
      repository: "SupplyChainManagement",
      demo:"https://github.com/cvkchris/SupplyChainManagement",
      tech: ["Java", "Swing", "MySQL", "JDBC"],
    },
    {
      title: "Heart Disease Prediction",
      description:
        "AI-powered heart health prediction app designed to assist individuals in making informed decisions \
        about their well-being. This application leverages machine learning to assess the risk of heart disease \
        based on key health indicators.",
      github: "https://github.com/cvkchris/Heart-Disease-Prediction",
      repository: "Heart-Disease-Prediction",
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

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />
      <Hero scrollToSection={scrollToSection} />

      <About />
      <Skills skills={skills} />
      <Projects projects={projects} />
      <Experience experiences={experiences} />
      <Contact scrollToSection={scrollToSection} />
      <Footer />
    </div>
  )
}
