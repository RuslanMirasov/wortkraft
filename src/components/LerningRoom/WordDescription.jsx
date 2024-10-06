import { useState, useEffect, useRef } from 'react';
import addWordStyles from '../../utils/addWordStyles';
import { BookmarkButton, Button, GoBack } from '../../components';
import css from './LerningRoom.module.scss';

const WordDescription = ({ wordId, name, translation }) => {
  const [voices, setVoices] = useState([]);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const titleRef = useRef(null);

  useEffect(() => {
    if (titleRef.current) {
      addWordStyles(titleRef.current);
    }
  }, [name]);

  // Получение голосов после загрузки компонента
  useEffect(() => {
    const loadVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      setVoices(availableVoices);
    };

    // Обновляем голоса при их загрузке
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }
    loadVoices();
  }, []);

  // Функция для озвучивания текста
  const speakText = (text, gender = 'female') => {
    if (voices.length === 0) return;

    console.log(voices);
    // Выбор голосов по полу
    const selectedVoice =
      voices.find(voice => {
        const isMale = gender === 'male' && voice.name.toLowerCase().includes('male');
        const isFemale = gender === 'female' && voice.name.toLowerCase().includes('female');
        return voice.lang.startsWith('de') && (isMale || isFemale);
      }) || voices.find(voice => voice.lang.startsWith('de')); // В случае, если нужного голоса нет, используем любой доступный

    if (!selectedVoice) {
      console.warn(`No voice found for ${gender}`);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = selectedVoice;
    utterance.lang = selectedVoice.lang;

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
  };

  const handleSpeak = gender => {
    if (!isSpeaking) {
      speakText(name, gender);
    } else {
      window.speechSynthesis.cancel();
    }
  };

  return (
    <div className={css.WordDescription}>
      <GoBack />
      <BookmarkButton position="right" wordId={wordId} points={0} />
      <div className={css.Translation}>
        <h1 ref={titleRef}>{name}</h1>
        <p>{translation}</p>
        <Button variant="green" icon="sound" full onClick={() => handleSpeak('male')}>
          {isSpeaking ? 'Stop' : 'Hören'}
        </Button>
      </div>
    </div>
  );
};

export default WordDescription;
