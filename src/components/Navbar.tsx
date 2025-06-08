import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <div className="px-4 py-4">
        <section className="w-full bg-white/30 backdrop-blur-md p-4 rounded-2xl flex flex-row justify-between fixed top-0 left-0 z-50">
        {/* Portfolio */}
            <h1 className="text-4xl font-bold mb-4">Portfolio</h1>
            {/* Top Nav Bar */}
            <div className="flex flex-row space-x-4 text-2xl font-bold p-4">
            <a href="/#home">Home</a>
            <a href="/#about">About</a>
            <Link href="/projects">Projects</Link>
            <a href="/#contact">Contact</a>
            </div>
        </section>
    </div>
  )
}

export default Navbar