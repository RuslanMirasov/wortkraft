import { useRouter } from 'next/router';
import { Hero, Section, TitleBox, Title } from '../../../components';

const ThemaPage = ({ books }) => {
  const router = useRouter();
  const { book: bookSlug, thema: themaSlug } = router.query;

  const thema = books.find(book => book.slug === bookSlug).thems.find(theme => theme.slug === themaSlug);

  const themaContent = {
    ...thema,
    words_count: thema.words_count ? thema.words_count.toString() : '0',
    learnt: 10,
  };

  return (
    <Section>
      <Hero content={themaContent} />
      <TitleBox margin={20}>
        <Title tag="h2" size="h2">
          Deine Lernfortschritte:
        </Title>
      </TitleBox>
    </Section>
  );
};

export default ThemaPage;
