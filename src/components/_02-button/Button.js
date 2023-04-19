import css from './button.module.scss';

const FeedbackOptions = ({ addValue, BtnName }) => {
  return (
    <button
      type="button"
      className={css['feedback__button']}
      onClick={addValue}
    >
      {BtnName}
    </button>
  );
};

export default FeedbackOptions;
