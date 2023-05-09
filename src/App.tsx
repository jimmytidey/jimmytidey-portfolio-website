import "./App.css";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Employment from "./components/Employment";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Header></Header>
      <div className="narrow-wrapper">
        <Intro></Intro>

        <h2>Summary Employment History</h2>
      </div>
      <Employment></Employment>

      <Projects></Projects>
    </>
  );
}

export default App;
