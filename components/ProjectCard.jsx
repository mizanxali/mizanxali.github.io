import React from 'react'
import PropTypes from 'prop-types'
import { FaPlay, FaGithub } from 'react-icons/fa'

const ProjectCard = props => {
    return (
        <div className='max-w-96 bg-gray-400 text-center hover:shadow-2xl'>
            <div>
                <img className='w-full' src={props.imgSrc} />
            </div>
            <div className='text-gray-800 text-base bg-gray-300 hover:bg-gray-200 py-2 px-4 text-center cursor-default'>{props.type}</div>
            <div className='text-gray-800 my-2 text-2xl font-medium'>{props.title}</div>
            <div className='text-gray-800 my-2 h-44 sm:h-32 text-lg px-3'>{props.description}</div>
            <div className='mx-4 flex flex-row flex-wrap justify-center'>
                {props.techStack.map(item => {
                    return <span className='m-1 bg-gray-300 hover:bg-gray-200 py-1 px-2 rounded-xl text-center cursor-default'>{item}</span>
                })}
            </div>
            <div className='mb-2'>
                <a href={props.liveURL} target='_blank' rel='noopener noreferrer'><div className='inline-block text-base mr-2 my-2 bg-gray-300 hover:bg-gray-800 hover:text-gray-300 cursor-pointer py-2 px-4 rounded'><FaPlay className='inline' /> LIVE</div></a>
                <a href={props.repoURL} target='_blank' rel='noopener noreferrer'><div className='inline-block text-base ml-2 my-2 bg-gray-300 hover:bg-gray-800 hover:text-gray-300 cursor-pointer py-2 px-4 rounded'><FaGithub className='inline' /> REPO</div></a>
            </div>
        </div>
    )
}

ProjectCard.propTypes = {
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    repoURL: PropTypes.string,
    liveURL: PropTypes.string,
    imgSrc: PropTypes.string.isRequired,
    techStack: PropTypes.array.isRequired
}

export default ProjectCard
