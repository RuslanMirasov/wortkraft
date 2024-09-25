import { useState, useEffect } from 'react';
import css from './PopupAnimation.module.scss';

const PopupAnimation = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const animationClasses = {
    [css.PopupAnimation]: true,
    [css.Visible]: isVisible === true,
  };

  const currentAnimationClasses = Object.keys(animationClasses)
    .filter(key => animationClasses[key])
    .join(' ');

  return <div className={currentAnimationClasses}>{children}</div>;
};

export default PopupAnimation;
