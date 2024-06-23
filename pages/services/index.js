/* eslint-disable react/no-unescaped-entities */

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
    icon: <RxDesktop />,
    title: 'Development web',
    description: "Je transforme vos idées d'application en réalité marchant dans le web.",
  },
  {
    icon: <RxDesktop />,
    title: 'Development mobile',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: <RxCrop />,
    title: 'Software Engineering',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  
  {
    icon: <RxRocket />,
    title: 'Référencement SEO',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

// components 
import ServiceSlider from "../../components/ServiceSlider";
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles'

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';


const Services = () => {
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
                className="h2 xl:mt-8"
                >
                  Mes services<span className="text-accent" >.</span></motion.h2>
              <motion.p 
                variants={fadeIn("down",0.5)} 
                initial="hidden" 
                animate="show" 
                exit="hidden" 
                className="mb-4 max-w-[400px] mx-auto lg:mx-0" > 
                  Très passionnés de l'informatique, j'offre services divers, qui vont dans le sens de l'optimisation des principes métier 
                  et l'automatisation des tâches. 
                  
              </motion.p>
          </div>
          <motion.div 
            variants={fadeIn("up",0.7)} 
            initial="hidden" 
            animate="show" 
            exit="hidden" 
            className='w-full xl:max-w-[65%]'>
          {/* slider */}
          <ServiceSlider/>
          </motion.div>
        </div>
      </div>
      <Bulb/>

    </div>
  
  );
};

export default Services;
