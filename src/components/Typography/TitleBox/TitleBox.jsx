import css from './TitleBox.module.scss';

const TitleBox = ({ align, children }) => {
  return (
    <div style={align && { textAlign: align }} className={css.TitleBox}>
      {children}
    </div>
  );
};

export default TitleBox;
