import { useRouter } from 'next/router';
import useSWR from 'swr';
import fetcher from '../../../utils/fatcher';
import { useAuth } from '../../../hooks/useAuth';
import { Hero, Section, TitleBox, Title, Preloader, Words, StartButton, StickyBox } from '../../../components';

const ThemaPage = ({ books }) => {
  const router = useRouter();
  const { user } = useAuth();
  const { book: bookSlug, thema: themaSlug } = router.query;

  const { data: words, isLoading } = useSWR(
    bookSlug && themaSlug ? `/api/words?book=${bookSlug}&theme=${themaSlug}` : null,
    fetcher
  );

  if (!words || isLoading) return <Preloader />;

  const thema = books.find(book => book.slug === bookSlug).thems.find(theme => theme.slug === themaSlug);
  const successes = user ? user.progress.filter(wort => wort.points === 5) : [];
  const alreadyLearnt = successes.filter(success => words.some(word => word._id === success.id));

  const themaContent = {
    ...thema,
    words_count: words.length > 0 ? thema.words_count.toString() : '0',
    learnt: alreadyLearnt.length,
  };

  const wordsWithProgress = words
    .map(word => {
      const userProgress = user ? user.progress.find(progress => progress.id === word._id) : null;
      return userProgress ? { ...word, points: userProgress.points } : { ...word, points: 0 };
    })
    .sort((a, b) => b.points - a.points);

  return (
    <Section>
      <Hero content={themaContent} />
      {words.length > 0 ? (
        <>
          <StickyBox>
            <StartButton words={wordsWithProgress}>Starten Sie</StartButton>
          </StickyBox>
          <TitleBox margin={20}>
            <Title tag="h2" size="h2">
              Deine Lernfortschritte:
            </Title>
          </TitleBox>
          <Words words={wordsWithProgress} />
        </>
      ) : (
        <TitleBox margin={20}>
          <Title tag="h2" size="h2">
            Es gibt keine Wörter
          </Title>
        </TitleBox>
      )}
    </Section>
  );
};

export default ThemaPage;
