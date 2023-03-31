import React from 'react';
import { motion, Variants } from 'framer-motion';

const variants: Variants = {
  initial: {
    y: -100,
    opacity: 0
  },

  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 1, ease: [0.43, 0.13, 0.23, 0.96], delay: 0.6 }
  }
};
export default function Header() {
  return (
    <div className="nav-bar">
      <div className="nav-bar-left">
        <motion.img className="nav-bar-img" variants={variants}  src={'/images/CasaLari.png'} initial="initial" animate="animate"/>
        <motion.h6 variants={variants} initial="initial" animate="animate">
          Based in <br /> Barcelona
        </motion.h6>
      </div>
    </div>
  );
}
