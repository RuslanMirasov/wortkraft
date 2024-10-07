import { useState, useEffect } from 'react';
import { Button } from '../../../components';

const SoundButton = ({ name }) => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [voices, setVoices] = useState([]);

  useEffect(() => {
    const loadVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      setVoices(availableVoices);
    };

    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }

    loadVoices();
  }, []);

  const speakText = text => {
    const selectedVoice = voices.find(voice => voice.lang.startsWith('de')) || voices[0];
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = selectedVoice;
    utterance.lang = selectedVoice.lang;

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
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
