import css from "./Main.module.scss";

const Main = ({ children }) => {
  return <main className={css.Main}>{children}</main>;
};

export default Main;
