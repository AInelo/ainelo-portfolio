// links
import Link from "next/link";

//icons 
import {
  RiYoutubeLine, 
  RiInstagramLine, 
  RiDribbbleLine, 
  RiBehanceLine,
  RiPinterestLine,
  RiFacebookBoxLine,
  RiLinkedinLine,
  RiGithubLine
} from 'react-icons/ri'

const Socials = () => {
  return (
  <div className="flex items-center gap-x-5 text-lg" >
    

    <Link href={'https://www.linkedin.com/in/ainelo/'} className="hover:text-accent transition-all duration-300">
      <RiLinkedinLine/> 
    </Link>

    <Link href={'https://github.com/AInelo'} className="hover:text-accent transition-all duration-300">
      <RiGithubLine/> 
    </Link>

    <Link href={'https://www.youtube.com/@AInelo'} className="hover:text-accent transition-all duration-300">
      <RiYoutubeLine/> 
    </Link>

    <Link href={'https://www.instagram.com/lioneltoton/'} className="hover:text-accent transition-all duration-300">
      <RiInstagramLine/> 
    </Link>

    <Link href={'https://web.facebook.com/ainelodev/'} className="hover:text-accent transition-all duration-300">
      <RiFacebookBoxLine/> 
    </Link>

    

  </div>
  );
};

export default Socials;
