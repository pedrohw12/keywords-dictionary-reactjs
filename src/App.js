import "./App.css";
import { useState } from "react";

const keywords = ["function", "const", "let", "export"];

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

    if (keywords.indexOf(value) !== -1) {
      setInputValue("");
      setWordsToShow([...wordsToShow, value]);
    } else {
      return;
    }
  }

  function handleGiveUp() {
    setWordsToShow(keywords);
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
      {keywords.map((item, index) => {
        if (wordsToShow.indexOf(item) !== -1) {
          return <p key={index}>{wordsToShow[wordsToShow.indexOf(item)]}</p>;
        } else {
          return <p key={index}>______</p>;
        }
      })}
    </div>
  );
}

export default App;
