import logo from "./logo.svg";
import "./App.css";
import Solution from "./components/Solution";
import Letters from "./components/Letters";
import Score from "./components/Score";

function App() {
  return (
    <div className="App">
      <Score /> <Solution />
      <Letters />
    </div>
  );
}

export default App;
