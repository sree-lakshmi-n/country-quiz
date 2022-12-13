import "./QuizSection.css";
import Container from "../UI/Container";
import quizIllustration from "../../images/undraw_adventure_4hum 1.svg";
const QuizSection = () => {
  return (
    <div className="wrapper">
      <h1 className="title">Country Quiz</h1>
      <Container>
        <div className="illustration-container">
          <img
            src={quizIllustration}
            alt="illustration showing a person travelling around the world"
          />
        </div>
        <p className="question"></p>
      </Container>
    </div>
  );
};
export default QuizSection;
