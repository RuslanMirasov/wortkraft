import { Books, Section } from '../components';
import books from '../json/books.json';

const HomePage = () => {
  return (
    <Section>
      <Books books={books} />
    </Section>
  );
};

export default HomePage;
