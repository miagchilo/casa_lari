import type { NextPage } from 'next';
import Image from 'next/image';
import HomeCover from '../components/HomeCover';
import ScrollIndicator from '../components/ScrollIndicator';
import Footer from '../components/Footer';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion'
import { request } from 'graphql-request';
import { sdk } from '../lib/client';
import { PicturesInteriorQuery } from '../generated/graphql';
import SplitText from '../hooks/useSplitText'

const Home: NextPage = () => {
  const [loader, setLoader] = useState(true);
  const [picturesInterior, setPicturesInterior] = useState<PicturesInteriorQuery['picturesInterior'] | null>(null);

  useEffect(() => {
    const fetchPictures = async () => {
      const res = await sdk.PicturesInterior()
      
      setPicturesInterior(res.picturesInterior);
      setLoader(false);
    };

    fetchPictures();
  }, []);
  return (
    <>
    
  
        <div className="home-container">
          <div className="home-hero">
            <HomeCover />
            <ScrollIndicator />
          </div>
          <section className="section about-image">
            <div className="image">
              <motion.img className='hero' src={'/images/casa_lari_7.jpg'}  alt='hero' />
        
           
            </div>
          </section>
          <section className="section about-text">
            <AnimatePresence>
              <motion.div className='paragraph'
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}>
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
                Lari Casa is a luxury interior design studio based in Barcelona, dedicated to creating exceptional and sophisticated spaces that are tailored to each client's unique vision and lifestyle. 
              </SplitText></motion.div> </AnimatePresence>
          </section>

          <section className="section">
                
                <div className='projects'>
                {picturesInterior?.map(({picture, alt}, index) => (
                <motion.img
                  key={index}
                  style={{ maxWidth: 300, height: 'auto' }}
                  src={picture?.url}
                  alt={alt || ''}
                />
              ))}
                </div>
                <div className="images">
        
          </div>

    
              </section>

          <Footer />
        </div>
      
    </>
  );
};

export default Home;
