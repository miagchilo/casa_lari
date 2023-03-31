import React from 'react';
import SplitText  from '../hooks/useSplitText';
import{motion,AnimatePresence }  from 'framer-motion';

export default function HomeCover() {
  return (
    <div className="home-cover">
        <AnimatePresence>
       <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <SplitText
                initial={{ y: '100%' }}
                animate="visible"
                variants={{
                  visible: i => ({
                    y: 0,
                    transition: {
                      delay: i * 0.1
                    }
                  })
                }}
              >
                 interior design studio 
              </SplitText>
            </motion.div> 
     </AnimatePresence>
  
    </div>
  );
}
