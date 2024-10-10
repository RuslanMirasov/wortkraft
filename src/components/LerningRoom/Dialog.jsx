import css from './LerningRoom.module.scss';
import { Title, TitleBox, SoundButton } from '../../components';

const Dialog = ({ examples }) => {
  return (
    <div className={css.Dialog}>
      <TitleBox margin="10">
        <Title tag="h2" size="h5">
          Beispiele:
        </Title>
      </TitleBox>

      {examples.map((text, index) => (
        <p key={index} data-index={index} className={css.DialogItem}>
          {text}
        </p>
      ))}
      <SoundButton name={`${examples[0]} ${examples[1]}`} />
    </div>
  );
};

export default Dialog;
