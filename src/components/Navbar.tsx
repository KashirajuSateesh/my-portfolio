import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <div className="px-4 py-4">
        <section className="w-full bg-white/30 backdrop-blur-md p-4 flex flex-row justify-between fixed top-0 left-0 z-50">
        {/* Portfolio */}
            <h1 className="text-4xl font-bold px-40 py-2">Portfolio</h1>
            {/* Top Nav Bar */}
            <div className="flex flex-row space-x-20 text-2xl font-bold px-10 py-4">
            <a href="/#home" className="hover:scale-110 transform transition-transform duration-300 hover:border-b-2 hover:border-black">Home</a>
            <a href="/#about" className="hover:scale-110 transform transition-transform duration-300 hover:border-b-2 hover:border-black">About</a>
            <Link href="/projects" className="hover:scale-110 transform transition-transform duration-300 hover:border-b-2 hover:border-black">Projects</Link>
            <a href="/#contact" className="hover:scale-110 transform transition-transform duration-300 hover:border-b-2 hover:border-black">Contact</a>
            </div>
        </section>
    </div>
  )
}

export default Navbar