import useSWR from 'swr';
import Link from 'next/link';
import fetcher from '../../utils/fatcher';
import { useAuth } from '../../hooks/useAuth';
import { Section, PrivatePage, Preloader, LerningRoom, InfoBlock, Button } from '../../components';
import { useState, useEffect } from 'react';
import css from '../../components/PageNotFound/PageNotFound.module.scss';

const RoomPage = () => {
  const { room, setRoom } = useAuth();
  const [isEmpty, setIsEmpty] = useState(false);
  const [prevIndex, setPrevIndex] = useState(null);
  const [randomWordId, setRandomWordId] = useState(null);
  const [randomWordPoints, setRandomWordPoints] = useState(null);

  useEffect(() => {
    if (room && room.length > 0) {
      const wordsWithLowPoints = room.filter(word => word.points < 5);

      if (wordsWithLowPoints.length > 0) {
        getRandomWord();
      } else {
        setIsEmpty(true);
      }
    } else {
      setIsEmpty(true);
    }
  }, [room]);

  const getRandomWord = () => {
    if (!room) return;

    const firstTenWords = room.filter(word => word.points < 5).slice(0, 10);

    if (firstTenWords.length === 1) {
      setPrevIndex(null);
      setRandomWordId(firstTenWords[0]._id);
      setRandomWordPoints(firstTenWords[0].points);
      return;
    }

    let randomIndex;

    do {
      randomIndex = Math.floor(Math.random() * firstTenWords.length);
    } while (randomIndex === prevIndex);

    setPrevIndex(randomIndex);
    setRandomWordId(firstTenWords[randomIndex]._id);
    setRandomWordPoints(firstTenWords[randomIndex].points);
  };

  const { data, isLoading } = useSWR(randomWordId ? `/api/words/${randomWordId}` : null, fetcher);
  if (isLoading) return <Preloader />;

  if (isEmpty || !data) {
    return (
      <Section className={css.PageNotFound}>
        <InfoBlock
          name="404"
          subtitle={`Sie haben alle Wörter auf dieser Liste gelernt.\n Wählen Sie eine neue Stufe.`}
        >
          <Link href="/">
            <Button size="small" full icon="arrow-right">
              Zu den Bücher
            </Button>
          </Link>
        </InfoBlock>
      </Section>
    );
  }

  const randomWord = { ...data, points: randomWordPoints };

  return (
    <PrivatePage>
      <Section>{!isEmpty ? <LerningRoom word={randomWord} getRandomWord={getRandomWord} /> : <p>Пусто</p>}</Section>
    </PrivatePage>
  );
};

export default RoomPage;
