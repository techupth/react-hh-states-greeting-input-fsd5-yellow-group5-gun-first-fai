import "./App.css";
import { useState } from "react";

function App() {
  const [greetingMessage, setGreetingMessage] = useState("Greeting Message");
  const [textGreetingMessage, setTextGreetingMessage] = useState("");

  return (
    <div className="App">
      <div className="greeting-container">{greetingMessage}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input
          id="greeting-message"
          type="text"
          value={textGreetingMessage}
          onChange={(event) => {
            setTextGreetingMessage(event.target.value);
          }}
        />
      </div>

      <div className="buttons">
        <button
          onClick={() => {
            setGreetingMessage(textGreetingMessage);
          }}
        >
          Update text
        </button>
      </div>
    </div>
  );
}

export default App;
