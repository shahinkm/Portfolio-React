import { useState } from "react";
import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  const [hasAnimatedHeading, setHasAnimatedHeading] = useState(false);
  const [hasAnimatedEntries, setHasAnimatedEntries] = useState(
    new Array(EXPERIENCES.length).fill(false)
  );
  const [animatedRoles, setAnimatedRoles] = useState(
    new Array(EXPERIENCES.length).fill(false)
  );
  const [animatedProjects, setAnimatedProjects] = useState(
    EXPERIENCES.map((experience) =>
      new Array(experience.projects.length).fill(false)
    )
  );

  const handleHeadingViewportEnter = () => {
    if (!hasAnimatedHeading) setHasAnimatedHeading(true);
  };

  const handleEntryViewportEnter = (index) => {
    setHasAnimatedEntries((prev) =>
      prev.map((animated, i) => (i === index ? true : animated))
    );
  };

  const handleRoleViewportEnter = (index) => {
    setAnimatedRoles((prev) =>
      prev.map((animated, i) => (i === index ? true : animated))
    );
  };

  const handleProjectViewportEnter = (expIndex, projIndex) => {
    setAnimatedProjects((prev) =>
      prev.map((projectArray, i) =>
        i === expIndex
          ? projectArray.map((animated, j) =>
              j === projIndex ? true : animated
            )
          : projectArray
      )
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
        Experience
      </motion.h2>
      <div>
        {EXPERIENCES.map((experience, expIndex) => (
          <div key={expIndex} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={
                hasAnimatedEntries[expIndex] ? { x: 0, opacity: 1 } : undefined
              }
              transition={{ duration: 1 }}
              onViewportEnter={() => handleEntryViewportEnter(expIndex)}
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
            </motion.div>
            <div className="w-full max-w-xl lg:w-3/4">
              <motion.h6
                initial={{ x: 100, opacity: 0 }}
                animate={
                  animatedRoles[expIndex] ? { x: 0, opacity: 1 } : undefined
                }
                transition={{ duration: 1 }}
                onViewportEnter={() => handleRoleViewportEnter(expIndex)}
                className="mb-2 font-semibold"
              >
                {experience.role} -{" "}
                <span className="text-sm text-purple-100">
                  {experience.company}
                </span>
              </motion.h6>
              <div className="mt-4">
                {experience.projects.map((project, projIndex) => (
                  <motion.div
                    key={projIndex}
                    initial={{ x: 100, opacity: 0 }}
                    animate={
                      animatedProjects[expIndex][projIndex]
                        ? { x: 0, opacity: 1 }
                        : undefined
                    }
                    transition={{ duration: 0.8 }}
                    onViewportEnter={() =>
                      handleProjectViewportEnter(expIndex, projIndex)
                    }
                    className="mb-6"
                  >
                    <h6 className="text-sm text-neutral-200">
                      {project.title}
                    </h6>
                    <p className="mb-2 text-sm text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
