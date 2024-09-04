import s from "./Feedback.module.css";

const Feedback = ({ goodCom, badCom, neutralCom, totalFeedback }) => {
  const goodPercent = Math.round((goodCom / totalFeedback) * 100);

  return (
    <>
      <ul className={s.list}>
        <li>Good: {goodCom}</li>
        <li>Neutral: {neutralCom}</li>
        <li>Bad: {badCom}</li>
        <li>Total: {totalFeedback}</li>
        <li>Positive: {goodPercent}%</li>
      </ul>
    </>
  );
};

export default Feedback;
