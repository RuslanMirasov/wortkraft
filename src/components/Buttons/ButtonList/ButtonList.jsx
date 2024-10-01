import css from './ButtonList.module.scss';

const ButtonList = ({ children, align = 'center' }) => {
  return <div className={`${css.ButtonList} ${css[align]}`}>{children}</div>;
};

export default ButtonList;
