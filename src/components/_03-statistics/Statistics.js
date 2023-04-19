import css from './statistics.module.scss';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className={css['statistics__wrapper']}>
      <h2 className={css['statistics__text']}>Statistics</h2>
      <ul className={css['statistics__list']}>
        <li>Good {good}</li>
        <li>Neutral {neutral}</li>
        <li>Bad {bad}</li>
        <li>Total {total}</li>
        <li>Positive feedback {positivePercentage} %</li>
      </ul>
    </div>
  );
};

export default Statistics;

// import css from './statistics.module.css';

// const Statistics = ({ state, total, percentage }) => {
// 	return (
// 		<ul className={css['feedback__statistics']}>
// 			{/* <h2>Statistics</h2> */}
// 				<li>good {state.good}</li>
// 				<li>neutral {state.neutral}</li>
// 				<li>bad {state.bad}</li>
// 				<li>Total {total}</li>
// 				<li>Positive feedback {percentage} %</li>

// 		 </ul>
// 	)
// }

// export default Statistics;
