import quizIllustration from "../../images/undraw_adventure_4hum 1.svg";
import "./QuizIllustration.css";
const QuizIllustration = () => {
  return (
    <div className="illustration-container__quiz">
      <img
        src={quizIllustration}
        alt="illustration showing a person travelling around the world"
        className="illustration__quiz"
      />
    </div>
  );
};
export default QuizIllustration;
