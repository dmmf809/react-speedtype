import { useLogic } from './useLogic'
import './App.css';

function App() {
  const { handleChange, 
         startGame, 
         wordCount, 
         text, 
         textBoxRef, 
         isTimeRunning,
         time } = useLogic(20)

  return (
    <div className="App">
      <h1>
        How fast can you type?
      </h1>
      <textarea 
        value= {text}
        onChange= {handleChange}
        disabled= {!isTimeRunning}
        ref = {textBoxRef}
      />
      <h4>
        Time Remaining: {time}s
      </h4>
      <button 
        onClick= {startGame}
        disabled= {isTimeRunning}
      >
        Start
      </button>
      <h1>
        Total word count: {wordCount}
      </h1>
    </div>
  );
}

export default App;
