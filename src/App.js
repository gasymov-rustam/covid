import "./App.css";
import "./resets.css";
import Header from "./Components/Header/Header";
// import { useData } from "./hooks/useData";
import CardList from "./Components/CardList/CardList";
import Lang from "./Components/Lang/Lang";

function App() {
  return (
    <>
      <table className="container">
        <Lang />
        <Header title="CORONA" />
        <CardList />
      </table>
    </>
  );
}

export default App;
