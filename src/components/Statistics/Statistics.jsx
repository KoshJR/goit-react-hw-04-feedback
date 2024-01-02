import css from './Statistics.module.css';
export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <ul className={css.statisticList}>
      <li>
        Good: <span className={css.listEl}>{good}</span>
      </li>
      <li>
        Neutral: <span className={css.listEl}>{neutral}</span>
      </li>
      <li>
        Bad: <span className={css.listEl}>{bad}</span>
      </li>
      <li>
        Total: <span className={css.listEl}>{total}</span>
      </li>
      <li>
        Rating: <span className={css.listEl}>{positivePercentage}</span>
      </li>
    </ul>
  );
};
