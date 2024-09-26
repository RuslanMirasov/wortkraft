import { useRouter } from 'next/router';
import { Section, Title } from '../../components';

const BookPage = () => {
  const router = useRouter();
  const { book } = router.query;
  return (
    <Section>
      <Title tag="h6" size="h6">
        Book: {book}
      </Title>
      <hr />
      <Title tag="h1" size="h1">
        Wählen Sie ein Thema
      </Title>
    </Section>
  );
};

export default BookPage;
