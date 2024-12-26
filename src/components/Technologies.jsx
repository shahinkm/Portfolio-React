import { useState } from "react";
import {
  SiPython,
  SiPytorch,
  SiHuggingface,
  SiLangchain,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  const [hasAnimatedHeading, setHasAnimatedHeading] = useState(false);
  const [hasAnimatedIcons, setHasAnimatedIcons] = useState(false);

  const handleHeadingViewportEnter = () => {
    if (!hasAnimatedHeading) setHasAnimatedHeading(true);
  };

  const handleIconsViewportEnter = () => {
    if (!hasAnimatedIcons) setHasAnimatedIcons(true);
  };

  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        initial={{ y: -100, opacity: 0 }}
        animate={hasAnimatedHeading ? { y: 0, opacity: 1 } : undefined}
        transition={{ duration: 1.5 }}
        onViewportEnter={handleHeadingViewportEnter}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={hasAnimatedIcons ? { x: 0, opacity: 1 } : undefined}
        transition={{ duration: 1.5 }}
        onViewportEnter={handleIconsViewportEnter}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {[
          { Icon: SiPython, color: "text-blue-500", duration: 5 },
          { Icon: SiPytorch, color: "text-orange-500", duration: 4 },
          { Icon: SiHuggingface, color: "text-yellow-500", duration: 3 },
          { Icon: SiLangchain, color: "text-green-900", duration: 3.5 },
          { Icon: FaAws, color: "text-amber-500", duration: 4 },
          { Icon: RiReactjsLine, color: "text-cyan-400", duration: 3 },
        ].map(({ Icon, color, duration }, index) => (
          <motion.div
            key={index}
            variants={iconVariants(duration)}
            initial="initial"
            animate={hasAnimatedIcons ? "animate" : undefined}
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <Icon className={`text-7xl ${color}`} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;
