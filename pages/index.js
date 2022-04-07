import Head from "next/head"
import ProjectCard from "../components/ProjectCard"
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa"
import { tech, projects } from "../data"

export default function Home() {
  return (
    <div>
      <Head>
        <title>mizanxali | Portfolio</title>
        <meta
          name="description"
          content="Portfolio website built using Next.js and Tailwind CSS."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Intro */}
      <div className="flex flex-col md:flex-row justify-around items-center w-full md:w-3/4 mt-5 mb-10 mx-auto py-5 px-3 rounded-lg">
        <div className="w-3/4 md:w-1/4 px-5 md:order-last">
          <img src="/mizan1.jpg" className="rounded-full mx-auto" />
        </div>
        <div className="md:w-3/4 mt-5 md:mt-0 flex-auto text-center md:text-left px-5">
          <div className="my-2 text-4xl text-purple-700">Hey there!</div>
          <div className="my-2 text-4xl text-purple-700 font-semibold">
            {" "}
            I'm Mizan Ali, aka{" "}
            <span className="italic font-normal">mizanxali</span>.
          </div>
          <div className="text-xl my-4 text-purple-300">
            I'm a third year student at VIT Bhopal University studying CS
            Engineering with specialization in Gaming Technology.
            <br />I build full stack web apps using the MERN stack and mobile
            apps using React Native and Flutter.
            <br />
            I'm currently an SDE Intern at Trell.
            <br />I love React, Cricket, Rap Music, and Game of Thrones.
            <br />
            I'm also a skilled Video Editor.
          </div>
          <div>
            <a
              href="https://drive.google.com/file/d/1yck0lIZWoBfuoXpIJxU4vxL3w2uSuYDM/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="inline-block text-base my-2 border-purple-700 border-2 hover:bg-purple-700 text-purple-700 hover:text-white cursor-pointer py-2 px-6 rounded">
                Resume
              </div>
            </a>
          </div>
          <div>
            <a
              href="https://github.com/mizanxali"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="my-3 mr-3 text-3xl text-purple-700 inline" />
            </a>
            <a
              href="https://linkedin.com/in/mizanxali"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="my-3 mx-3 text-3xl text-purple-700 inline" />
            </a>
            <a
              href="https://twitter.com/mizanxali"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="my-3 mx-3 text-3xl text-purple-700 inline" />
            </a>
            <a
              href="https://instagram.com/mizanxali"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="my-3 ml-3 text-3xl text-purple-700 inline" />
            </a>
          </div>
        </div>
      </div>

      {/* Tech Stack */}
      <h1 className="text-center text-yellow-600 text-3xl mb-2">
        Some Tools & Technologies I've Worked With
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-2 w-3/4 mx-auto py-5 px-3 rounded-lg mb-10">
        {tech.map((item, i) => {
          return (
            <span
              key={i}
              className="text-base cursor-pointer border-yellow-600 border-2 hover:bg-yellow-600 text-yellow-600 hover:text-white py-2 px-1 rounded-md text-center"
            >
              {item}
            </span>
          )
        })}
      </div>

      {/* Web Projects */}
      <h1 style={{ color: "#c7b69d" }} className="text-center text-3xl mb-2">
        My Web/Mobile Apps
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4 w-3/4 mx-auto py-5 px-3 rounded-lg">
        {projects.map((project, i) => {
          return project.submissionURL ? (
            <ProjectCard
              key={i}
              type={project.type}
              title={project.title}
              description={project.description}
              imgSrc={project.imgSrc}
              repoURL={project.repoURL}
              liveURL={project.liveURL}
              techStack={project.techStack}
              submissionURL={project.submissionURL}
            />
          ) : (
            <ProjectCard
              key={i}
              type={project.type}
              title={project.title}
              description={project.description}
              imgSrc={project.imgSrc}
              repoURL={project.repoURL}
              liveURL={project.liveURL}
              techStack={project.techStack}
            />
          )
        })}
      </div>

      {/* Footer */}
      <div className="text-center mb-5 text-gray-200 italic">
        This website was made using Next.js and Tailwind CSS.
      </div>
    </div>
  )
}
