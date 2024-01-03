import css from './Feedback.module.css';
export const FeedBackOptions = ({ options, reviewsReceiver }) => {
  return (
    <div className={css.buttons}>
      {options.map(option => (
        <button
          className={css.button}
          key={option}
          onClick={() => reviewsReceiver(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
