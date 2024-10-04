import { useRouter } from 'next/router';
import { Collection, Section, TitleBox, Title } from '../../components';

const BookPage = ({ books }) => {
  const router = useRouter();
  const { book: bookSlug } = router.query;

  const book = books.find(book => book.slug === bookSlug);

  return (
    <Section>
      <TitleBox margin={20}>
        <Title tag="h2" size="h2">
          Wählen Sie ein Thema
        </Title>
      </TitleBox>
      <Collection collection={book.thems} />
    </Section>
  );
};

export default BookPage;
