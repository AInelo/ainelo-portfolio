import Image from "next/image";

const Avatar = ({imageSrc, imageWigth, imageHeight, addStyles}) => {
  return (
  <div className="hidden xl:flex xl:max-w-none">
    <Image 
    src= {imageSrc}
    width={imageWigth} 
    height={imageHeight} 
    alt='' 
    className={`translate-z-0 ${addStyles}`}/>
  </div>
  );
};

export default Avatar;
