import "./QuizSection.css";
import Container from "../UI/Container";
import QuizIllustration from "./QuizIllustration";
const QuizSection = () => {
  return (
    <div className="wrapper">
      <h1 className="title">Country Quiz</h1>
      <Container>
        <QuizIllustration />
        <p className="question"></p>
      </Container>
    </div>
  );
};
export default QuizSection;
