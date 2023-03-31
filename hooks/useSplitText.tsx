import React, { FC } from 'react';
import { motion } from 'framer-motion';

interface SplitTextProps {
  children: string;
}

const SplitText: FC<SplitTextProps> = ({ children, ...rest }) => {
  let words = children.split(' ');
  return (
    <div>
      {words.map((word, i) => {
        return (
          <div
            key={children + i}
            style={{ display: 'inline-block', overflow: 'hidden' }}
          >
            <motion.div
              {...rest}
              style={{ display: 'inline-block', willChange: 'transform' }}
              custom={i}
            >
              {word + (i !== words.length - 1 ? '\u00A0' : '')}
            </motion.div>
          </div>
        );
      })}
    </div>
  );
};

export default SplitText;