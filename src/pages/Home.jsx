// src/pages/Home.jsx
import React from "react";
import {motion} from'framer-motion';
import './Home.css';

function Home() {
    return (
      <motion.section className="home"initial={{opacity: 0, y:-30}}
        animate = {{opacity:1, y: 0}}
        transistion={{duration: 0.8}}>
          <h1>Hello, I'm <span className="highlight">M E Irfan Basha</span></h1>
        
          <p>A Passionate Front-end Developer.</p>
          <a href="/projects" className="btn">See My Work</a>
        </motion.section>
      

    );
  }
  
  export default Home;