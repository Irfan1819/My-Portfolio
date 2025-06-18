// src/pages/About.jsx
import React from "react";
import {motion} from 'framer-motion';
function About() {
    return (
      <motion.section className="about" initial={{opacity:0,x:-50}}
      animate={{opacity: 1, x:0}}
      transition={{duration: 0.8}}>
        <h1>About Me</h1>
        
          
        <p> Hello I'm <strong>M E Irfan Basha</strong>, a passionate Frontend Developer specializing in building responsive React.js applications.
        I love transforming ideas into real-world projects with clean maintainable code.
        </p>
        

        
        <div className="about-grid">
          <div>
        <h2>🎓 Education</h2>
        <ul>
          <li>Master Of Computer Applications (<strong>M.C.A</strong>) - Rayalaseema University (2021-2023)</li>

          <li>Bachelor Of Science (<strong>Computer Science</strong>) - Sri Venkateswara Degree College (2018-2021)</li>
        </ul>
        </div>
        <div className="section">
        <h2>🛠 Skills</h2>

        <div className="skills">
        
          <span>React.js</span> <br/>
          <span>JavaScript</span> <br/>
          <span>HTML</span> <br/>
          <span>CSS</span> <br/>
          <span>Git & Selenium</span> <br/>
          <span>TestNG</span> <br/>
          <span>SQL</span> <br/>
          </div>
        </div>
        <div className="section">
          <h2>💼 Experience</h2>
          <p>
            As a fresher, I have worked on multiple personal projects that demonstrate my understanding of React, automation testing with Selenium, and basic full-stack integration.
          </p>
          </div>
          </div>
      </motion.section>
    );
  }
  
  export default About;