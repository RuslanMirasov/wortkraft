import css from "./Container.module.scss";

const Container = ({ children }) => {
  return <div className={css.Container}>{children}</div>;
};

export default Container;
