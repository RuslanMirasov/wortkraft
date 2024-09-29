import css from './Section.module.scss';
import { Container } from '../../components';

const Section = ({ className, children }) => {
  return (
    <section className={`${css.Section} ${className ? className : ''}`}>
      <Container>{children}</Container>
    </section>
  );
};

export default Section;
