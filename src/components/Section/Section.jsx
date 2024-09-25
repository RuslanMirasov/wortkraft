import css from './Section.module.scss';
import { Container } from '../../components';

const Section = ({ children }) => {
  return (
    <section className={css.Section}>
      <Container>{children}</Container>
    </section>
  );
};

export default Section;
