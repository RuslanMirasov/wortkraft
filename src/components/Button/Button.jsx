import css from './Button.module.scss';

const Button = ({ onClick, variant, size, full, disabled, children }) => {
  const allButtonClasses = {
    [css.Button]: true,
    [css.Big]: size === 'big',
    [css.Small]: size === 'small',
    [css.BorderLight]: variant === 'border-light',
    [css.BorderDark]: variant === 'border-dark',
    [css.Black]: variant === 'black',
    [css.White]: variant === 'white',
    [css.Full]: full,
  };

  const currentClasses = Object.keys(allButtonClasses)
    .filter(key => allButtonClasses[key])
    .join(' ');

  return (
    <button type={onClick ? 'button' : 'submit'} className={currentClasses} disabled={disabled} onClick={onClick}>
      <span>{children}</span>
    </button>
  );
};

export default Button;
