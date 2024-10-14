import { useState, useEffect } from 'react';
import { Button } from '../../../components';

const SoundButton = ({ name }) => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [voices, setVoices] = useState([]);

  useEffect(() => {
    const loadVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      if (availableVoices.length) {
        setVoices(availableVoices);
      } else {
        setTimeout(() => setVoices(window.speechSynthesis.getVoices()), 1000);
      }
    };

    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }

    loadVoices();
  }, []);

  const speakText = text => {
    if (!voices.length) {
      return;
    }
    const selectedVoice = voices.find(voice => voice.lang.startsWith('de')) || voices[0];
    if (!selectedVoice) {
      return;
    }
    console.log(text);
    const utterance = new SpeechSynthesisUtterance(text);

    utterance.voice = selectedVoice;
    utterance.lang = selectedVoice.lang;

    utterance.onstart = () => {
      setIsSpeaking(true);
    };

    utterance.onend = () => {
      setIsSpeaking(false);
    };

    utterance.onerror = event => {
      setIsSpeaking(false);
    };

    setTimeout(() => {
      window.speechSynthesis.speak(utterance);
    }, 10);
  };

  const handleSpeak = () => {
    if (!isSpeaking) {
      speakText(name);
    } else {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  return (
    <Button variant="green" icon={isSpeaking ? 'stop' : 'sound'} full onClick={handleSpeak}>
      {isSpeaking ? 'Stop' : 'Hören'}
    </Button>
  );
};

export default SoundButton;
