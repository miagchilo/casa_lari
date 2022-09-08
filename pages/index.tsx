import type { NextPage } from 'next';
import Image from 'next/image';
import HomeCover from '../components/HomeCover';
import ScrollIndicator from '../components/ScrollIndicator';
import Footer from '../components/Footer';
import AnimatedParagraph from '../components/AnimatedParagraph';
import { useState } from 'react';
import HomeLoader from '../components/HomeLoader';

const Home: NextPage = () => {
  const [loader, setLoader] = useState(true);

  return (
    <>
      <HomeLoader setLoader={setLoader} title="miagchilo" />
      {!loader && (
        <div className="home-container">
          <div className="home-hero">
            <HomeCover />
            <ScrollIndicator />
          </div>
          <section className="section about-image">
            <div className="image">
              <Image src={'/images/home2.jpg'} objectFit="cover" layout="fill" />
           
            </div>
          </section>
          <section className="section about-text">
            <AnimatedParagraph
              paragraph="I’m  Front End developer, content creator , do Creative Front End development,
      and appreciate polished web design pieces. I also bake in free time."
            />
          </section>

          {/* <section className="section">
                <h1>Projects</h1>

                <p>Placeholder for some sort of webgl based images/sliders/grid</p>
              </section> */}

          <Footer />
        </div>
      )}
    </>
  );
};

export default Home;
