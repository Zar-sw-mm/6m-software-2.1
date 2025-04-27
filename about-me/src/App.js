//import logo from "./logo.svg";
import "./App.css";
import photo from "./assets/PPFrame.png";
import Parent from "./Parent";

function App() {
  return (
    <div className="App">
      <div>
        <img
          style={{
            width: "200px",
            height: "200px",
            padding: "10px",
            margin: "0 0 0 100px",
          }}
          src={photo}
        />
        <Parent />
      </div>
    </div>
  );
}

export default App;
