import React from 'react'

function Skills() {
  return (
    <div>
        {/* Skills */}
        <p className="flex justify-baseline text-4xl font-bold p-4">
        Skills and Tools
        </p>
        <div className="flex flex-row justify-between">
        <div className="w-full max-w-4xl bg-white/30 backdrop-blur-md p-4 rounded-2xl flex flex-row">
        <p className="text-lg text-gray-700">
            Skills : Python, Java, HTML, CSS, React, Spring, Data Analysis, AWS
        </p>
        </div>
        <div className="w-full max-w-4xl bg-white/30 backdrop-blur-md p-4 rounded-2xl flex flex-row">
            <p className="text-lg text-gray-700">
            Tools : Git Hub, vscode, tableau, Pentaho 
            </p>
        </div>
        </div>
    </div>
  )
}

export default Skills