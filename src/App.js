import "./App.css";
import QuizSection from "./components/Quiz/QuizSection";

function App() {
  const optionsNum = 4;
  const generateRandomNum = (maxNum) => {
    return Math.floor(Math.random() * maxNum);
  };
  const generateRandomUniqueNums = (maxNum) => {
    let randomUniqueNums = [];
    while (randomUniqueNums.length < optionsNum) {
      let random = generateRandomNum(maxNum);
      if (randomUniqueNums.indexOf(random) === -1)
        randomUniqueNums.push(random);
    }
    return randomUniqueNums;
  };
  const generateQn = (countryData) => {
    const random = generateRandomNum(2);
    const qnData = {};
    if (random === 0) {
      qnData.flag = countryData.flags.svg;
      qnData.question = "Which country does this flag belong to?";
    } else {
      qnData.question = `${countryData.capital} is the capital of `;
    }
    qnData.answer = countryData.name;
    return qnData;
  };
  const setQnsAndOptions = (data) => {
    const randomNums = generateRandomUniqueNums(data.length);
    const countries = randomNums.map((num) => data[num]);
    const qnNum = generateRandomNum(countries.length);

    const question = generateQn(countries[qnNum]);
    const options = countries.map((country) => country.name);
    console.log(question, options);
  };

  async function getCountryDetails(url) {
    let response = await fetch(url);
    let data = await response.json();
    return data;
  }

  getCountryDetails(
    "https://restcountries.com/v2/all?fields=name,capital,flags"
  ).then((data) => {
    setQnsAndOptions(data);
  });

  return (
    <div className="App">
      <QuizSection></QuizSection>
    </div>
  );
}

export default App;
