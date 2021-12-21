import Head from 'next/head'
import ProjectCard from '../components/ProjectCard'
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'
import { tech, projects } from '../data'

export default function Home() {
  return (
    <div>
      <Head>
        <title>mizanxali | Portfolio</title>
        <meta name='description' content='Portfolio website built using Next.js and Tailwind CSS.' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {/* Intro */}
      <div className='flex flex-col md:flex-row justify-around items-center w-3/4 mt-5 mb-10 mx-auto py-5 px-3 rounded-lg'>
        <div><img src='/mizan.jpg' className='w-3/4 rounded-full mx-auto' /></div>
        <div className='mt-5 md:mt-0 flex-auto text-center px-5'>
          <div className='text-4xl text-gray-100'>Hey there! I am Mizan Ali, aka <em>mizanxali</em>.</div>
          <div className='text-2xl mt-2 text-gray-400'>I'm a third year student at VIT Bhopal University studying CS Engineering with specialization in Gaming Technology.<br />I build full stack web apps using the MERN stack and mobile apps using Flutter.<br />I love React, Flutter, Cricket, Rap Music, and Game of Thrones. I'm also a skilled Video Editor.</div>
          <div>
            <a href='https://drive.google.com/file/d/1ZduwTp8SBzDnM_hUklnVChQ75t8ey3w0/view?usp=sharing' target='_blank' rel='noopener noreferrer'><div className='inline-block text-base my-3 border-gray-100 border-2 hover:bg-gray-300 text-gray-100 hover:text-gray-800 cursor-pointer py-2 px-6 rounded'>Resume</div></a>
          </div>
          <div>
            <a href='https://github.com/mizanxali' target='_blank' rel='noopener noreferrer'><FaGithub className='my-3 mx-3 text-3xl text-gray-100 inline' /></a>
            <a href='https://linkedin.com/in/mizanxali' target='_blank' rel='noopener noreferrer'><FaLinkedin className='my-3 mx-3 text-3xl text-gray-100 inline' /></a>
            <a href='https://twitter.com/mizanxali' target='_blank' rel='noopener noreferrer'><FaTwitter className='my-3 mx-3 text-3xl text-gray-100 inline' /></a>
            <a href='https://instagram.com/mizanxali' target='_blank' rel='noopener noreferrer'><FaInstagram className='my-3 mx-3 text-3xl text-gray-100 inline' /></a>
          </div>
        </div>
      </div>

      {/* Tech Stack */}
      <h1 className='text-center text-white text-3xl mb-2'>Tools & Technologies I've Worked With</h1>
      <div className='grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-2 w-3/4 mx-auto py-5 px-3  rounded-lg mb-10'>
        {tech.map((item, i) => {
          return <span key={i} className='text-base bg-gray-300 hover:bg-gray-200 py-2 px-4 rounded-md text-center cursor-default'>{item}</span>
        })}
      </div>

      {/* Web Projects */}
      <h1 className='text-center text-white text-3xl mb-2'>My Web/Mobile Apps</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 w-3/4 mx-auto py-5 px-3 rounded-lg'>
        {projects.map((project, i) => {
          return project.submissionURL ?
            <ProjectCard key={i} type={project.type} title={project.title} description={project.description} imgSrc={project.imgSrc} repoURL={project.repoURL} liveURL={project.liveURL} techStack={project.techStack} submissionURL={project.submissionURL} />
            : <ProjectCard key={i} type={project.type} title={project.title} description={project.description} imgSrc={project.imgSrc} repoURL={project.repoURL} liveURL={project.liveURL} techStack={project.techStack} />
        })}
      </div>

      {/* Footer */}
      <div className='text-center mb-5 text-gray-200 italic'>This website was made using Next.js and Tailwind CSS.</div>
    </div>
  )
}
