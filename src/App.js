import "./App.css";
import QuizSection from "./components/Quiz/QuizSection";
import { useState } from "react";

function App() {
  const optionsNum = 4;
  const [qnData, setQnData] = useState({});
  const [options, setOptions] = useState([]);
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
    const qn = {};
    if (random === 0) {
      qn.flag = countryData.flags.svg;
      qn.question = "Which country does this flag belong to?";
    } else {
      qn.question = `${countryData.capital} is the capital of `;
    }
    qn.answer = countryData.name;
    return qn;
  };
  const setQnsAndOptions = (data) => {
    const randomNums = generateRandomUniqueNums(data.length);
    const countries = randomNums.map((num) => data[num]);
    const qnNum = generateRandomNum(countries.length);

    const question = generateQn(countries[qnNum]);
    const optionList = countries.map((country) => country.name);
    return [question, optionList];
  };

  async function getCountryDetails(url) {
    let response = await fetch(url);
    let data = await response.json();
    return data;
  }

  getCountryDetails(
    "https://restcountries.com/v2/all?fields=name,capital,flags"
  ).then((data) => {
    const [question, optionList] = setQnsAndOptions(data);
    // setQnData(question);
    // setOptions(optionList);
    console.log(question, optionList);
  });

  return (
    <div className="App">
      <QuizSection></QuizSection>
    </div>
  );
}

export default App;
