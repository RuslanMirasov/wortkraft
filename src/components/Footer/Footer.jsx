import { Container } from "../../components";
import css from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={css.Footer}>
      <Container>
        <p>&copy;2024 WortKraft</p>
      </Container>
    </footer>
  );
};

export default Footer;
