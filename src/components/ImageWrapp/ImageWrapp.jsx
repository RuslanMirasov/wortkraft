import Image from 'next/image';
import { useState } from 'react';
import css from './ImageWrapp.module.scss';

const ImageWrapp = ({ src, width, height, alt }) => {
  const [isLoad, setIsLoad] = useState('');

  const handleImageLoad = () => {
    setIsLoad('isLoad');
  };

  return (
    <div className={`${css.ImageWrapp} ${isLoad ? css[isLoad] : ''}`}>
      <Image src={src} width={width} height={height} alt={alt} priority onLoad={handleImageLoad} />
    </div>
  );
};

export default ImageWrapp;
