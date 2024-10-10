import mixArray from '../../utils/mixArray';
import { useAuth } from '../../hooks/useAuth';
import { Title, Button, TitleBox } from '../../components';
import css from './LerningRoom.module.scss';
import { useEffect, useState } from 'react';

const Quiz = ({ translates, step, setSubstep, setResult }) => {
  const { user } = useAuth();
  const [transteList, setTransteList] = useState([]);

  useEffect(() => {
    const transletesVariants = translates.find(item => item.language === user.language).translation;
    const transteMixed = mixArray(transletesVariants);
    setTransteList(transteMixed);
  }, [translates]);

  const handleClick = e => {
    e.preventDefault();
    const isTrueAnswer = e.target.dataset.js;
    if (step >= 3 && step < 5) {
      isTrueAnswer === 'true' ? setSubstep(2) : setResult('loss');
      return;
    }
    isTrueAnswer === 'true' ? setResult('win') : setResult('loss');
  };

  return (
    <div className={css.Quize}>
      <TitleBox>
        <Title tag="h2">Wählen Sie eine Übersetzung:</Title>
      </TitleBox>

      <ul className={css.QuizeList}>
        {transteList.map(button => (
          <li key={button._id}>
            <Button variant="green" icon="arrow-right" full onClick={handleClick} dataJs={button.status}>
              {button.name}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Quiz;
