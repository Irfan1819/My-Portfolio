import {motion} from 'framer-motion';
import './ProjectCard.css';

function ProjectCard({ project }) {
  return (
    <motion.div className="project-card"
    whileHover={{scale:1.05}}
    initial={{opacity: 0, y:20}}
    whileInView={{opacity:1, y:0}}
    transition={{duration: 0.5}}
    viewport={{once:true}}
    >
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <a href={project.link} target="_blank" rel=
      "noopener noreferrer" className="btn">🔗 View Project
      </a>
    
    </motion.div>
  );
}

export default ProjectCard;
