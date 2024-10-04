import { Collection, Section, Title } from '../components';
import books from '../json/books.json';

const HomePage = () => {
  return (
    <Section>
      <Title tag="h1" size="h1">
        Wählen Sie ein Buch
      </Title>
      <Collection collection={books} />
    </Section>
  );
};

export default HomePage;
