import React from 'react'
import PropTypes from 'prop-types'
import { FaPlay, FaGithub, FaCode } from 'react-icons/fa'

const ProjectCard = props => {
    return (
        <div style={{ backgroundColor: '#c7b69d' }} className='max-w-96 rounded-lg text-black text-center flex flex-col justify-between'>
            <div>
                <div>
                    <img className='rounded-t-lg w-full' src={props.imgSrc} />
                </div>
                {/* <div className='text-gray-800 text-base bg-gray-300 hover:bg-gray-200 py-2 px-4 text-center cursor-default'>{props.type}</div> */}
                <div className='my-2 text-2xl font-medium'>{props.title}</div>
                <div className='my-2 h-52 sm:h-40 text-lg px-3'>{props.description}</div>
                <div className='my-4 mx-4 flex flex-row flex-wrap justify-center'>
                    {props.techStack.map((item, i) => {
                        return <span key={i} className='m-1 border-black border-2 hover:bg-black text-black hover:text-white py-1 px-2 rounded-xl text-center cursor-default'>{item}</span>
                    })}
                </div>
            </div>
            <div className='mb-2'>
                {props.liveURL && <a href={props.liveURL} target='_blank' rel='noopener noreferrer'><div className='inline-block text-sm mr-2 my-2 border-black border-2 hover:bg-black text-black hover:text-white cursor-pointer py-2 px-4 rounded'><FaPlay className='inline' /> APP</div></a>}
                {props.repoURL && <a href={props.repoURL} target='_blank' rel='noopener noreferrer'><div className='inline-block text-sm ml-2 my-2 border-black border-2 hover:bg-black text-black hover:text-white cursor-pointer py-2 px-4 rounded'><FaGithub className='inline' /> REPO</div></a>}
                {props.submissionURL && <a href={props.submissionURL} target='_blank' rel='noopener noreferrer'><div className='inline-block text-sm ml-2 my-2 border-black border-2 hover:bg-black text-black hover:text-white cursor-pointer py-2 px-4 rounded'><FaCode className='inline' /> SUBMISSION</div></a>}
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
    techStack: PropTypes.array.isRequired,
    submissionURL: PropTypes.string
}

export default ProjectCard
