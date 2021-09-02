import "./App.css";
import { useState } from "react";

const keywords = [
  { word: "function", id: 1 },
  { word: "const", id: 2 },
  { word: "let", id: 3 },
  { word: "export", id: 4 },
];

function App() {
  const [wordsToShow, setWordsToShow] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function calculatePercent(score) {
    const totalScore = keywords.length;
    const fraction = score / totalScore;
    return fraction * 100;
  }

  function replay() {
    setWordsToShow([]);
  }

  function handleChange(value) {
    setInputValue(value);

    if (keywords.find((item) => item.word === value)) {
      setInputValue("");
      setWordsToShow([...wordsToShow, value]);
    } else {
      return;
    }
  }

  function handleGiveUp() {
    let words = [];
    keywords.map((item) => words.push(item.word));
    setWordsToShow(words);
  }

  return (
    <div className="App">
      <p>5:00</p>
      <button onClick={handleGiveUp}>Desistir</button>
      <br />
      <br />
      <p>
        Score: {wordsToShow.length}/{keywords.length} <br />
        Percentual: Você fez {calculatePercent(wordsToShow.length)}%
      </p>
      <button onClick={replay}>Replay</button>
      <input
        value={inputValue}
        placeholder="palavra-chave"
        onChange={(e) => handleChange(e.target.value)}
      />
      {keywords.map((item) => {
        if (wordsToShow.indexOf(item.word) !== -1) {
          return <p key={item.id}>{item.word}</p>;
        } else {
          return <p key={item.id}>______</p>;
        }
      })}
    </div>
  );
}

export default App;
