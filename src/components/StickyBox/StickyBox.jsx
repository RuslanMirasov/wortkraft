import css from './StickyBox.module.scss';

const StickyBox = ({ children }) => {
  return <div className={css.StickyBox}>{children}</div>;
};

export default StickyBox;
