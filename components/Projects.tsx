import { motion } from 'framer-motion';
import { PicturesInteriorQuery } from '../generated/graphql';

type Props = {
  picturesInterior: PicturesInteriorQuery['picturesInterior'] | null;
};

const Projects: React.FC<Props> = ({ picturesInterior }: Props) => {
  return (
    <>
      <h1>Projects</h1>
      <div className="projects">
        {picturesInterior?.map(({ picture, alt }, index) => (
          <motion.img
            key={index}
            style={{ maxWidth: 400, height: 'auto' }}
            src={picture?.url}
            alt={alt || ''}
          />
        ))}
      </div>
      <div className="images"></div>
    </>
  );
};

export default Projects;