'use client'

import { useEffect, useState } from 'react'

interface GitHubRepo {
  name: string
  description: string
  stargazers_count: number
  forks_count: number
  open_issues_count: number
  owner: {
    login: string
    avatar_url: string
    html_url: string
  }
  html_url: string
}

export default function ProjectCard({ repoName , userName }: { repoName: string, userName: string }) {
  const [repoData, setRepoData] = useState<GitHubRepo | null>(null)

  useEffect(() => {
    fetch(`https://api.github.com/repos/${userName}/${repoName}`)
      .then((res) => res.json())
      .then((data) => setRepoData(data))
      .catch(console.error)
  }, [repoName])

  if (!repoData) return <div className="text-gray-500">Loading...</div>

  return (
    <div className="flex p-5 border rounded-2xl shadow-sm bg-white max-w-2xl items-center space-x-4">
      <img
        src={repoData.owner.avatar_url}
        alt="Owner Avatar"
        className="w-20 h-20 rounded-full"
      />
      <div className="flex-1">
        <h2 className="text-xl font-semibold text-blue-600">
          {repoData.owner.login}/<span className="text-black">{repoData.name}</span>
        </h2>
        <p className="text-sm text-gray-600 mt-1 mb-3">
          {repoData.description}
        </p>
        <div className="text-sm text-gray-700 space-x-4 mb-3">
          <span>⭐ {repoData.stargazers_count} Stars</span>
          <span>🍴 {repoData.forks_count} Forks</span>
          <span>❗ {repoData.open_issues_count} Issues</span>
        </div>
        <a
          href={repoData.html_url}
          target="_blank"
          className="inline-block text-sm text-white bg-gray-800 px-4 py-1 rounded hover:bg-gray-700 transition"
        >
          View on GitHub
        </a>
      </div>
    </div>
  )
}