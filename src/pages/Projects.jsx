// src/pages/Projects.jsx
import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import './projects.css'

  const projects =[
    {
      title:"E-Commerce Website.",
      description:'An e-commerce website designed for testing using the Selenium automation tool with Java.',
      link:"https://github.com/Irfan1819/SauceDemoAutomation.git"
    }
  ];
  function Projects(){
    return (
      <motion.section className="projects" initial={{opacity: 1,y:50}} 
      animate={{opacity:1, y:0}}
      transition={{duration: 0.8}}>
        <h1>My Projects</h1>
        <div className="project-grid">
          {projects.map((proj,index) =>(
            <ProjectCard key={index} project={proj}/>

          ))}
        </div>
        </motion.section>
    );
  
          }
  export default Projects;