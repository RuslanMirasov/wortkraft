import css from './TitleBox.module.scss';

const TitleBox = ({ align, margin = 0, children }) => {
  return (
    <div className={css.TitleBox} style={{ textAlign: align, margin: `${margin}px 0px` }}>
      {children}
    </div>
  );
};

export default TitleBox;
