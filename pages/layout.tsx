import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
// import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

// export const metadata: Metadata = {
//   title: "Chris Vinod Kurian - AI/ML & Software Engineer",
//   description:
//     "Portfolio of Chris Vinod Kurian, AI/ML & Software Engineering Learner. Solving tomorrow's challenges with code today.",
//   keywords: "AI, Machine Learning, Software Engineer, Full Stack Developer, Computer Vision, Python, Node.js",
//   authors: [{ name: "Chris Vinod Kurian" }],
//   openGraph: {
//     title: "Chris Vinod Kurian - AI/ML & Software Engineer",
//     description: "Portfolio of Chris Vinod Kurian, AI/ML & Software Engineering expert.",
//     type: "website",
//   },
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
