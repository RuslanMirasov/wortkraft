import fetcher from '../../utils/fatcher';
import useSWR from 'swr';
import { useAuth } from '../../hooks/useAuth';
import { Section, PrivatePage, Preloader, LerningRoom } from '../../components';
import { useState, useEffect } from 'react';

const RoomPage = () => {
  const { room } = useAuth();
  const [points, setPoints] = useState(null);
  const [prevIndex, setPrevIndex] = useState(0);
  const [wordId, setWordId] = useState(null);

  const { data: word, isLoading } = useSWR(wordId ? `/api/words/${wordId}` : null, fetcher);

  const getRandomWord = () => {
    if (!room) return;
    const firstTenWords = room.filter(word => word.points < 5).slice(0, 10);

    if (firstTenWords.length === 1) {
      setWordId(firstTenWords[0]._id);
      setPoints(firstTenWords[0].points);
      return;
    }

    let randomIndex;

    do {
      randomIndex = Math.floor(Math.random() * firstTenWords.length);
    } while (randomIndex === prevIndex);

    const randomWord = firstTenWords[randomIndex];

    setWordId(randomWord._id);
    setPoints(randomWord.points);
    setPrevIndex(randomIndex);
  };

  useEffect(() => {
    getRandomWord();
  }, [room]);

  if (!word || isLoading) return <Preloader />;

  console.log(word);

  return (
    <PrivatePage>
      <Section>
        <LerningRoom word={word} points={points} getRandomWord={getRandomWord} />
      </Section>
    </PrivatePage>
  );
};

export default RoomPage;
