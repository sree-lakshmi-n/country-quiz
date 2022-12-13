import "./App.css";
import QuizSection from "./components/Quiz/QuizSection";

function App() {
  let optionsNum = 4;
  const generateRandomUniqueNums = (maxNum) => {
    let randomUniqueNums = [];
    while (randomUniqueNums.length < optionsNum) {
      let random = Math.floor(Math.random() * maxNum) + 1;
      if (randomUniqueNums.indexOf(random) === -1)
        randomUniqueNums.push(random);
    }
    return randomUniqueNums;
  };
  async function getCountryDetails(url) {
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    return data;
  }

  getCountryDetails(
    "https://restcountries.com/v2/all?fields=name,capital,flags"
  ).then((data) => {
    console.log("hi");
    console.log(generateRandomUniqueNums(data.length));
  });

  return (
    <div className="App">
      <QuizSection></QuizSection>
    </div>
  );
}

export default App;
