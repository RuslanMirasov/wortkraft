import { useRouter } from 'next/router';
import { Section } from '../../components';

const BookPage = () => {
  const router = useRouter();
  const { book } = router.query;
  return (
    <Section>
      <h1>Book &quot;{book}&quot;</h1>
    </Section>
  );
};

export default BookPage;
