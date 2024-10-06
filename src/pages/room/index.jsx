import { useAuth } from '../../hooks/useAuth';
import { Section, PrivatePage, LerningRoom } from '../../components';
import { useState, useEffect } from 'react';

const StatisticPage = () => {
  const { room } = useAuth();
  const [word, setWord] = useState([]);
  const [prevIndex, setPrevIndex] = useState(null);

  const getNewWord = () => {
    const firstTenWords = room.filter(word => word.points < 5).slice(0, 10);

    if (firstTenWords.length === 1) {
      setWord(firstTenWords[0]);
      return;
    }

    let randomIndex;

    do {
      randomIndex = Math.floor(Math.random() * firstTenWords.length);
    } while (randomIndex === prevIndex);

    const randomWord = firstTenWords[randomIndex];
    setWord(randomWord);
    setPrevIndex(randomIndex);
  };

  useEffect(() => {
    getNewWord();
  }, [room]);

  return (
    <PrivatePage>
      <Section>
        <LerningRoom word={word} getNewWord={getNewWord} />
      </Section>
    </PrivatePage>
  );
};

export default StatisticPage;
