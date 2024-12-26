import { useState } from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  const [hasAnimatedHeading, setHasAnimatedHeading] = useState(false);
  const [hasAnimatedProjects, setHasAnimatedProjects] = useState(
    new Array(PROJECTS.length).fill(false)
  );

  const handleHeadingViewportEnter = () => {
    if (!hasAnimatedHeading) setHasAnimatedHeading(true);
  };

  const handleProjectViewportEnter = (index) => {
    setHasAnimatedProjects((prev) =>
      prev.map((animated, i) => (i === index ? true : animated))
    );
  };

  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        initial={{ y: -100, opacity: 0 }}
        animate={hasAnimatedHeading ? { y: 0, opacity: 1 } : undefined}
        transition={{ duration: 0.5 }}
        onViewportEnter={handleHeadingViewportEnter}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={
                hasAnimatedProjects[index] ? { x: 0, opacity: 1 } : undefined
              }
              transition={{ duration: 1 }}
              onViewportEnter={() => handleProjectViewportEnter(index)}
              className="w-full lg:w-1/4"
            >
              <img
                src={project.image}
                width={150}
                height={150}
                alt={project.title}
                className="mb-6 rounded-2xl"
              />
            </motion.div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={
                hasAnimatedProjects[index] ? { x: 0, opacity: 1 } : undefined
              }
              transition={{ duration: 1 }}
              onViewportEnter={() => handleProjectViewportEnter(index)}
              className="w-full max-w-xl lg:w-3/4"
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-neutral-200 hover:underline"
              >
                <h6 className="mb-2">{project.title}</h6>
              </a>
              <p className="mb-2 text-sm text-neutral-400">
                {project.description}
              </p>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm text-medium text-purple-900"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
