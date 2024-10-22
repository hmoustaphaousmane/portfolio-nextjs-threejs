import React from 'react'
import ProjectLayout from './ProjectLayout'

const ProjectList = ({ projects }) => {
  return (
    <div className='w-full max-w-auto xl:max-w-4xl px-4 lg:px-16 mx:auto space-y-6 md:space-y-8 flex flex-col items-center'>
      {projects.map((project, index) =>
        <ProjectLayout key={index} {...project} />
      )}
    </div>
  )
}

export default ProjectList