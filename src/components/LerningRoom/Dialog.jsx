import css from './LerningRoom.module.scss';
import { Title, TitleBox, SoundButton, Icon } from '../../components';

const Dialog = ({ examples }) => {
  return (
    <>
      <TitleBox margin="20">
        <Title tag="h2" size="h2">
          Beispiele:
        </Title>
      </TitleBox>
      <div className={css.Dialog}>
        {examples.map((text, index) => (
          <p key={index} data-index={index} className={css.DialogItem}>
            {text}
            <Icon
              name="dialog"
              fill={index === 0 ? `var(--invalid-color)` : `var(--yellow-color)`}
              stroke={index === 0 ? `var(--white-color)` : `var(--text-color)`}
            />
          </p>
        ))}
        <SoundButton name={`${examples[0]} ${examples[1]}`} />
      </div>
    </>
  );
};

export default Dialog;
