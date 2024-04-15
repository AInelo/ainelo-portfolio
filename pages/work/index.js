
import {
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from 'react-icons/rx';

// data
const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Branding',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: <RxDesktop />,
    title: 'Development',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: <RxReader />,
    title: 'Copywriting',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: <RxRocket />,
    title: 'SEO',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

// components 
import WorkSlider from "../../components/WorkSlider";
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles'

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants'


const Work = () => {
  return( 
    <div className="h-full bg-primary/30 py-36 flex items-center" >
      <Circles/>
      <div className="container mx-auto" >
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div className="text-center flex xl:w-[30w] flex-col lg:text-left mb-4 
          xl:mb-0" >
              <motion.h2 
                variants={fadeIn("up",0.3)} 
                initial="hidden" 
                animate="show" 
                exit="hidden" 
                className="h2 xl:mt-12"
                >
                  My Work<span className="text-accent" >.</span></motion.h2>
              <motion.p 
                variants={fadeIn("down",0.5)} 
                initial="hidden" 
                animate="show" 
                exit="hidden" 
                className="mb-4 max-w-[400px] mx-auto lg:mx-0" > 
                  Labore id nisi tempor velit. Proident voluptate ex cillum 
                  aute velit laboris voluptate aliquip esse eiusmod occaecat et. 
                  Minim ad id adipisicing cupidatat esse eiusmod id duis consectetur 
                  sint est sunt sunt. Aliqua dolore occaecat excepteur pariatur id esse 
                  
              </motion.p>
          </div>
          <motion.div 
            variants={fadeIn("up",0.7)} 
            initial="hidden" 
            animate="show" 
            exit="hidden" 
            className='w-full xl:max-w-[65%]'>
          {/* slider */}
          <WorkSlider/>
          </motion.div>
        </div>
      </div>
      <Bulb/>

    </div>
  
  );
};

export default Work;
