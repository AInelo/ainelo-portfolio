
// data
const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Dev Web',
    description: "Je transforme vos idées d'application en réalité marchant dans le web.",
  },
  {
    icon: <RxMobile />,
    title: 'Dev Mobile',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: <RxDesktop />,
    title: 'Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: <SiWebpack />,
    title: 'Copywriting',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: <RxRocket />,
    title: 'SEO',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];


// import swiper react components
import {Swiper, SwiperSlide} from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import icons
import {
   
  RiInstagramLine, 
  RiDribbbleLine, 
  RiBehanceLine,
  RiPinterestLine,
  RiFacebookBoxLine,
  RiLinkedinLine,
  RiGithubLine
} from 'react-icons/ri'

import {
  SiWebpack,
  SiJenkins,
  SiGit,
  SiIos,
  SiKotlin,
  SiAndroid,
  SiNextdotjs,
  SiAdobexd,
  SiAdobephotoshop,
  SiVisualstudiocode,
  SiFirebase,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiPostman,
  SiCplusplus,
  SiTypescript
} from "react-icons/si";

import {
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
  RxArrowTopRight,
  RxMobile
} from 'react-icons/rx';

// import required modules
import { FreeMode, Pagination} from "swiper";


const ServiceSlider = () => {
  return <Swiper breakpoints={{
    320: {
      slidesPerView: 1,
      spaceBetween: 15,
    },

    640: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
  }}
    freeMode={true}
    pagination = {{
      clickable:true
    }}
    
   modules = {[FreeMode, Pagination]}
   className = 'h-[240px] sm:h-[340px]'
  >
    {
      serviceData.map((item, index) => {
        return( 
        <SwiperSlide key={index} >
          <div className='bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex
          sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)]
          transition-all diration-300'>
            {/* icon */}
            <div className='text-4xl text-accent' >{item.icon}</div>
            {/* title & desc*/}
            <div className='mb-8' >
              <div className='mb-2 text-lg' >{item.title}</div>
              <p className='max-w-[350px] leading-normal' >{item.description}</p>
            </div>
            {/* arrow */}
            <div className='text-3xl' >
            <RxArrowTopRight className='group-hover:rotate-45
            group-hover:text-accent transition-all duration-300' />
            </div>

          </div>

        </SwiperSlide>
        );
       })
    }
  </Swiper>;
};

export default ServiceSlider;
