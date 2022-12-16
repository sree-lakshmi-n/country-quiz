import "./QuizSection.css";
import Container from "../UI/Container";
import QuizIllustration from "./QuizIllustration";
import Question from "./Question";
import OptionsContainer from "./OptionsContainer";
const QuizSection = () => {
  return (
    <div className="wrapper">
      <h1 className="title">Country Quiz</h1>
      <Container>
        <QuizIllustration />
        <Question />
        <OptionsContainer />
      </Container>
    </div>
  );
};
export default QuizSection;
